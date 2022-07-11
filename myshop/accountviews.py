from django.shortcuts import render, redirect
from django.http import HttpRequest

from django.contrib.auth import logout, login, authenticate

from . import models as dataBase
from django.contrib.auth.models import User, auth

from django.conf import settings
from django.core.mail import send_mail

from django.contrib.auth.decorators import login_required

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

import random
import datetime

from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa
from io import BytesIO


#######################################################################
def signIn(request):
    return render(request, 'CustomerSignIn.html')

#######################################################################


def postsignin(request):
    email = request.POST.get('your_email')
    passw = request.POST.get('your_pass')
    print(email+passw)
    try:
        u = User.objects.get(email=email)
        uname = u.username
        authUser = authenticate(username=uname, password=passw)
        customeruser = dataBase.Customer.objects.get(user_user_id=u)

        if customeruser != None and authUser != None:
            login(request, u)

        else:
            message = "wrong email and password"
            return render(request, 'CustomerSignIn.html', {'msg': message})

    except Exception as e:
        message = "wrong email and password "+str(e)
        return render(request, 'CustomerSignIn.html', {'msg': message})

    if u.is_active == 1:
        return redirect('customerdash')
    else:
        alert("something went wrong")
        return redirect('signin')

    if u.first_name == "":
        return redirect('customerdash')
    else:
        return redirect('customerdash')

#######################################################################


def signUp(request):
    state = dataBase.State.objects.all()
    city = dataBase.City.objects.all()
    return render(request, 'CustomerSignUp.html', {'state': state, 'city': city})

#######################################################################


def postsignup(request):

    name = request.POST.get('name')
    email = request.POST.get('email')
    passw = request.POST.get('pass')
    phone = request.POST.get('mob')
    city = request.POST.get('city')
    country = request.POST.get('country')
    state = request.POST.get('stt')
    # jugadlen=len(city)
    jugad = city[1:-1]

    print(city)
    print(jugad)
    stateid = dataBase.State.objects.get(state_name=state)
    dbcity = dataBase.City.objects.filter(city_name=jugad)
    for d in dbcity:
        if d.state_state_id == stateid:
            dbcityid = d

    # print(city)
    # dbcity = dataBase.city.objects.get(city_name=city)
    # dbcityId = dbcity.city_id

    # try:
        # user = User()
        # user.username =name
        # user.email = email
        # user.password =passw
        # user.save()
    try:
        user = User.objects.create_user(name, email, passw)
        user.save()
        # last_cust_id =dataBase.Customer.objects.all().order_by('-customer_id')
        # print(last_cust_id)
        cust = dataBase.Customer()
        cust.user_user_id = user
        cust.customer_mobile_num = phone
        cust.city_city_id = dbcityid
        cid = dataBase.Company.objects.all()
        cust.company_company_id = cid[0]
        # print(len(last_cust_id))
        # if len(last_cust_id) == 0:
        #     cust.customer_id = 1
        # else:
        #     idi = last_cust_id[0].customer_id
        #     cust.customer_id =int(idi)+1
        cust.save()

        # except Exception as e:
        #     message="Unable to create account try again"+str(e)
        #     return render(request,"CustomerSignUp.html",{'msg':message})

        return render(request, "CustomerSignIn.html")
    except Exception as e:
        message = "this email and username is already exist"
        return render(request, "CustomerSignUp.html", {'msg': message})
    return render(request, "CustomerSignUp.html")

#######################################################################


def terms(request):
    return render(request, 'account/terms.html')


#######################################################################

def logout_new(request):
    user = request.user
    try:
        cust = dataBase.Customer.objects.get(user_user_id=user)

        print(cust)
        # print(seller)
        if cust:
            try:
                logout(request)
            except KeyError:
                pass
            return redirect('customerdash')

        # if seller:
        #     try:
        #         logout(request)
        #     except KeyError:
        #         pass
        #     return redirect('sellersignin')
    except Exception as e:
        print(e)

    try:
        seller = dataBase.Seller.objects.get(user_user_id=user)

        if seller:
            try:
                logout(request)
            except KeyError:
                pass
            return redirect('sellersignin')

    except Exception as e:
        print(e)

    return redirect('signup')


'''
Seller account management
contains seller signin signup
'''

#######################################################################


def sellersignin(request):

    return render(request, 'SellerSignIn.html')

#######################################################################


def sellerpostsignin(request):
    email = request.POST.get('your_email')
    passw = request.POST.get('your_pass')
    try:
        u = User.objects.get(email=email)
        uname = u.username
        authUser = authenticate(username=uname, password=passw)
        seller = dataBase.Seller.objects.get(user_user_id=u)
        print(uname)
        print(email+passw)
        print(authUser)
        verified = seller.is_verified
        if seller != None and authUser != None:
            login(request, u)
        else:
            message = "wrong email and password "
            return render(request, 'SellerSignIn.html', {'msg': message})

    except Exception as e:
        message = "wrong email and password "+str(e)
        return render(request, 'SellerSignIn.html', {'msg': message})

    if u.is_active == 1:
        return redirect('welcome')
    else:
        alert("something went wrong")
        return redirect('signin')

    verified = seller.is_verified
    gstverify = seller.gstin
    bankacc = seller.account_number
    cancelcheck = seller.cancelled_cheque_image
    store = seller.store_address
    progress = 10

    if verified:
        progress = progress+30
    else:
        print("email not verified")

    if gstverify:
        progress = progress + 15

    if bankacc:
        progress = progress+15

    if cancelcheck:
        progress = progress+15

    if store:
        progress = progress+15

    if progress == 100:
        return redirect('dashboard')
    # return render(request,'seller welcome screen/welcome.html',{'e':verified})
    return redirect('welcome')


#######################################################################

def sellersignup(request):
    return render(request, 'SellerSignUp.html')
    # return render(request,'CustomerDashboard.html')

#######################################################################


def sellerpostsignup(request):

    name = request.POST.get('name')
    email = request.POST.get('email')
    passw = request.POST.get('pass')
    phone = request.POST.get('mob')
    state = request.POST.get('stt')
    city = request.POST.get('city')
    country = request.POST.get('country')

    # jugadlen = len(city)
    jugad = city[1:-1]
    # dbcityId = ""
    print(city)
    print(jugad)
    stateid = dataBase.State.objects.get(state_name=state)
    dbcity = dataBase.City.objects.filter(city_name=jugad)
    # for d in dbcity:
    #     if d.state_id == stateid:
    #         dbcityid = d
    for d in dbcity:
        if d.state_state_id == stateid:
            dbcityid = d
    # dbcityId = dbcity.city_id
    cid = dataBase.Company.objects.all()

    try:

        # user =User()
        # user.username = name
        # user.email = email
        # user.password = passw
        # user.save()
        user = User.objects.create_user(name, email, passw)
        user.save()
        seller = dataBase.Seller()
        print("--------------seller----------")
        seller.company_company_id = cid[0]
        seller.city_city_id = dbcityid
        seller.seller_mobile_num = phone
        seller.user_user_id = user
        seller.save()

        # user = authe.create_user_with_email_and_password(email,passw)
        # uid = user['localId']
        return render(request, "SellerSignIn.html")
    except Exception as e:
        message = "this email and username is already exist"
        return render(request, "SellerSignUp.html", {'msg': message})

        # print("IDDDD"+str(uid))
        # data={"name":name,"email":email,'phone':phone,'country':country,'state':state,'city':city}
        # print(data)
        # database.child("Data").child("SellerDetails").child(uid).set(data)

    return render(request, "SellerSignUp.html")


@login_required(login_url='sellersignin')
def verifyEmail(request):
    print("------------------verify email function called")
    # print(request.user)
    user = request.user
    # print(user)
    seller = dataBase.Seller.objects.get(user_user_id=user)
    subject = 'Welcome'
    mail = seller.user_user_id.username
    message = f'Hi {user.username}, thank you for click here http://127.0.0.1:8000/account/verifymymail/?q={mail}'
    print("Email sent1")
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [user.email]
    print("Email sent")
    send_mail(subject, message, email_from, recipient_list)
    return redirect('welcome')


def verifymymail(request):
    user = User.objects.get(username=request.GET.get('q'))
    seller = dataBase.Seller.objects.get(user_user_id=user)
    seller.is_verified = 1
    seller.save()
    return redirect('sellersignin')


@login_required(login_url='sellersignin')
def verifygst(request):
    gst = request.POST.get('gstno')
    storename = request.POST.get('storename')
    address = request.POST.get('storeadd')

    user = request.user
    seller = dataBase.Seller.objects.get(user_user_id=user)
    seller.gstin = gst
    seller.store_name = storename
    seller.store_address = address
    seller.gstin_certificate_image = request.FILES['gstInImg']
    print(request.FILES['gstInImg'])
    seller.save()

    return redirect('welcome')


@login_required(login_url='sellersignin')
def verifybank(request):
    account_name = request.POST.get('acnm')
    account_no = request.POST.get('acno')
    ifsc = request.POST.get('name')

    user = request.user
    seller = dataBase.Seller.objects.get(user_user_id=user)
    seller.account_name = account_name
    seller.account_number = account_no
    seller.account_ifsc_code = ifsc
    # seller.cancelled_cheque_image = request.FILES['cancel_cheque']
    seller.save()

    return redirect('welcome')


@login_required(login_url='sellersignin')
def cancelchq(request):
    user = request.user
    print("callling  cancel function")
    seller = dataBase.Seller.objects.get(user_user_id=user)
    seller.cancelled_cheque_image = request.FILES['cancel_cheque']
    seller.save()
    print(request.FILES['cancel_cheque'])

    return redirect('welcome')


@login_required(login_url='sellersignin')
def addproduct(request):
    color = dataBase.Color.objects.all()
    if request.method == "POST":
        print(request.POST)
        user = request.user
        seller = dataBase.Seller.objects.get(user_user_id=user)

        product = dataBase.Product()

        tryandbuy = request.POST.get('TryAndBuy')
        prod_name = request.POST.get('product_name')
        shortdesc = request.POST.get('short_desc')

        mrp = request.POST.get('inputMRP')
        selling_price = request.POST.get('txtChar')
        qty = request.POST.get('qty')
        # color = request.POST.get('color')
        prod_specification = request.POST.get('prod_spec')
        print('---------specification------')
        print(prod_specification)
        # date = request.POST.get('AddDate')
        color = request.POST.get('colordropdown')
        brand = request.POST.get('DropDownList4')
        print(brand)
        category = request.POST.get("subcategory")
        print(category)
        try:
            size = dataBase.Size.objects.get(
                size_value=request.POST.get('size'))
            product.size = size
        except Exception as e:
            print(e)

        try:

            categoryid = dataBase.CategoryMid.objects.get(
                category_name=category)
            brandid = dataBase.Brand.objects.get(brand_name=brand)
            checkCategoryHasBrand = dataBase.CategoryHasBrand.objects.filter(
                category_category_id=categoryid, brand_brand_id=brandid)
            print("------------------------------")
            print(checkCategoryHasBrand)
            print("------------------------------")
            if len(checkCategoryHasBrand) > 0:
                product.categoryHasBrand_id = checkCategoryHasBrand[0]
            else:
                catbrand = dataBase.CategoryHasBrand()
                catbrand.category_category_id = categoryid
                catbrand.brand_brand_id = brandid
                catbrand.save()
                product.categoryHasBrand_id = catbrand

        except Exception as e:
            print(e)
        product.product_name = prod_name
        product.product_short_description = shortdesc
        product.product_mrp = mrp
        product.qty_product = qty
        product.product_selling_price = selling_price
        product.product_specification = prod_specification
        product.product_add_date = datetime.date.today()
        product.seller_seller_id = seller

        if tryandbuy == "on":
            product.try_and_buy = 1
        else:
            product.try_and_buy = 0
        featurecount = int(request.POST.get('featurecount'))
        print(f"------------------{featurecount}")
        product.save()

        print(tryandbuy)

        filepath = request.FILES.getlist('files')

        for i in range(len(filepath)):

            productimg = dataBase.ProductImage()
            productimg.image = filepath[i]
            # productimg.save()
            clr = dataBase.Color.objects.get(colorName=color)
            productimg.color = clr
            productimg.product_product_id = product
            productimg.save()

        for f in range(1, featurecount+1):
            if f == 1:
                print("---------add 1")
                feature = dataBase.Feature()
                feature.feature_name = request.POST.get("name0")

                feature.save()
                producthasfeature = dataBase.ProductHasFeature()
                producthasfeature.feature_feature_id = feature
                producthasfeature.product_product_id = product
                producthasfeature.feature_value = request.POST.get("mail0")
                producthasfeature.save()
            else:
                print("---------add 2")
                feature = dataBase.Feature()
                print(request.POST.get(f"Fname{f-1}"))
                feature.feature_name = request.POST.get(f"Fname{f-1}")
                feature.save()
                producthasfeature = dataBase.ProductHasFeature()
                producthasfeature.feature_feature_id = feature
                producthasfeature.product_product_id = product
                producthasfeature.feature_value = request.POST.get(
                    f"value{f-1}")
                producthasfeature.save()

        try:
            offer = dataBase.Offer()

            offer_name = request.POST.get('offer_name')
            startdate = request.POST.get('OfferStartDate')
            enddate = request.POST.get('OfferEndDate')
            discount = request.POST.get('discount')

            print(offer_name)
            offer.offer_name = offer_name
            offer.start_date = startdate
            offer.end_date = enddate
            offer.discount = discount
            offer.product_product_id = product
            print(offer.offer_name)
            offer.save()

        except Exception as e:
            print(e)
        message = "Succesfully Added Your Product"
        return render(request, 'AddNewProduct.html', {'color': color, 'msg': message})

    return render(request, 'AddNewProduct.html', {'color': color})


@login_required(login_url='sellersignin')
def sellermyproduct(request, typep):
    user = request.user
    seller = dataBase.Seller.objects.get(user_user_id=user)
    if typep == 0:  # normal
        product = dataBase.Product.objects.filter(seller_seller_id=seller)
    elif typep == 1:  # try and buy
        product = dataBase.Product.objects.filter(
            seller_seller_id=seller, try_and_buy=1)
    elif typep == 2:  # active(status)
        product = dataBase.Product.objects.filter(
            seller_seller_id=seller, status=1)
    elif typep == 4:  # inactive
        product = dataBase.Product.objects.filter(
            seller_seller_id=seller, status=0)
    elif typep == 5:  # try and buy
        product = dataBase.Product.objects.filter(
            seller_seller_id=seller, try_and_buy=0)
    elif typep == 6:  # block product
        product = dataBase.Product.objects.filter(
            seller_seller_id=seller, status=2)
    proimg = []
    active = len(dataBase.Product.objects.filter(
        seller_seller_id=seller, try_and_buy=1))
    inactive = len(dataBase.Product.objects.filter(
        seller_seller_id=seller, status=0))
    status1 = len(dataBase.Product.objects.filter(
        seller_seller_id=seller, status=1))
    block = len(dataBase.Product.objects.filter(
        seller_seller_id=seller, status=2))

    for i in product:
        # if i.try_and_buy==1:
        #     active=active+1

        # if i.status == 1:
        #     status1 = status1+1
        # else:
        #     inactive = inactive+1
        try:
            imgae = dataBase.ProductImage.objects.filter(product_product_id=i)
            proimg.append(imgae[0].image)
        except Exception as e:
            print(e)

    page = request.GET.get('page', 1)

    paginator = Paginator(
        list(zip(product, proimg, range(1, len(product)+1))), 10)
    try:
        users = paginator.page(page)
    except PageNotAnInteger:
        users = paginator.page(1)
    except EmptyPage:
        users = paginator.page(paginator.num_pages)
    print("--------------")
    print(users)
    print("--------------")
    return render(request, 'SellerMyProducts.html', {'block2': block, 'inactive': inactive, 'users': users, 'active': active, 'ab': zip(product, proimg, range(1, len(product)+1)), 'status': status1})


@login_required(login_url='sellersignin')
def sellereditproduct(request, idi):
    print(type(idi))
    product = dataBase.Product.objects.get(id=idi)

    color = dataBase.Color.objects.all()
    feature = dataBase.ProductHasFeature.objects.filter(
        product_product_id=product)
    categorymid = dataBase.CategoryMid.objects.get(
        category_name=product.categoryHasBrand_id.category_category_id.category_name)
    categorybrand = dataBase.CategoryHasBrand.objects.filter(
        category_category_id=categorymid)
    offer = dataBase.Offer.objects.filter(product_product_id=product)
    print(offer)
    image = dataBase.ProductImage.objects.filter(product_product_id=product)
    brandname = []
    sizevalue = None
    size = None

    try:

        print(product.size)
        size = dataBase.Size.objects.get(id=product.size.id)
        # catid =
        sizevalue = dataBase.Size.objects.filter(categoryid=size.categoryid)
        print(sizevalue)
    except Exception as e:
        print(e)
    try:
        offerlist = offer[0]
    except Exception as e:
        offerlist = []
    for i in categorybrand:

        brandn = dataBase.Brand.objects.get(id=i.brand_brand_id.id)
        brandname.append(brandn.brand_name)

    return render(request, 'SellerEditProduct.html', {'image': image, 'p': product, 'color': color, 'feature': zip(feature, range(1, len(feature)+1)), 'brand': brandname, 'offer': offerlist, 'size': sizevalue, 'selectedsize': size, 'brandname': product.categoryHasBrand_id.brand_brand_id.brand_name})


def forgetPassword(request, by, stat):
    if stat == 'sent':
        email = request.POST.get('email')
        print(email)
        if by == 'seller':
            try:

                user = User.objects.get(email=email)
                print(user)
                seller = dataBase.Seller.objects.get(user_user_id=user)
                print(seller)
                # print("++++++++++++++++++++++++++++++++++++++++" + seller)
                print('-------------------------')
                if seller is not None:
                    print('--------non')
                    otp = random.randrange(1000, 9999)
                    seller.otp = otp
                    seller.save()
                    subject = 'Conformation '
                    message = f'Your OTP To Reset Password is {otp}'
                    email_from = settings.EMAIL_HOST_USER
                    recipient_list = [user.email, ]
                    send_mail(subject, message, email_from, recipient_list)

            except Exception as e:

                return render(request, "ForgotPass.html", {'by': by, 'msg': "The User Does Not Exists "})

        # return render(request, "OTP.html", {'by': by, 'user': email})

        elif by == 'customer':
            try:
                print('------------------------cus-----------------')
                user = User.objects.get(email=email)
                print(user)
                customer = dataBase.Customer.objects.get(user_user_id=user)
                print('---------------------')
                print(customer)
                # print(customer)
                if customer is not None:

                    otp = random.randrange(1000, 9999)
                    customer.otp = otp
                    customer.save()
                    subject = 'Conformation '
                    message = f'Your OTP To Reset Password is {otp}'
                    email_from = settings.EMAIL_HOST_USER
                    recipient_list = [user.email, ]
                    send_mail(subject, message, email_from, recipient_list)

            except Exception as e:

                return render(request, "ForgotPass.html", {'by': by, 'msg': "The User Does Not Exists "+str(e)})

        return render(request, "OTP.html", {'by': by, 'user': email})
        print(by)

    elif stat == 'verify':
        otp = request.POST.get('otp')
        email = request.POST.get('user')
        usermail = User.objects.get(email=email)
        if by == 'seller':
            seller = dataBase.Seller.objects.get(user_user_id=usermail)
            print(otp)
            print(seller)
            print(seller.otp)
            if otp == str(seller.otp):
                print('----------------')
                return render(request, "Changepass.html", {'by': by, 'user': email})
            else:
                return render(request, "OTP.html", {'by': by, 'user': email, 'msg': "Please enter the correct otp"})

        elif by == 'customer':
            customer = dataBase.Customer.objects.get(user_user_id=usermail)
            if otp == str(customer.otp):
                return render(request, "Changepass.html", {'by': by, 'user': email})
            else:
                return render(request, "OTP.html", {'by': by, 'user': email, 'msg': "Please enter the correct otp"})

    elif stat == 'change':
        passw = request.POST.get('pass')
        email = request.POST.get('email')
        if by == 'seller':
            user = User.objects.get(email=email)
            user.set_password(passw)
            user.save()
            return redirect('sellersignin')

        elif by == 'customer':
            user = User.objects.get(email=email)
            user.set_password(passw)
            user.save()
            return redirect('signin')

    elif stat == 'toSend':
        return render(request, "ForgotPass.html", {'by': by})


def deleteFeature(request, fid, pid):
    feature = dataBase.ProductHasFeature.objects.get(id=fid)
    feature.delete()
    return redirect('sellereditproduct', idi=pid)


def updateFeature(request, fid, pid, loop):
    print("--------------")
    val = request.GET
    myDict = dict(val)
    print(myDict)
    for i in myDict:
        if "name" in i:
            feat = dataBase.ProductHasFeature.objects.get(id=fid)
            # print(myDict[i][0])
            print(request.GET.get('mail'+loop))
            print(request.GET.get('name'+loop))
            feat.feature_value = request.GET.get('mail'+loop)
            Featureid = dataBase.Feature.objects.get(
                id=feat.feature_feature_id.id)
            Featureid.feature_name = request.GET.get('name'+loop)
            Featureid.save()
            feat.save()
    # feature = dataBase.Feature.objects.get(id=fid)
    # feature.delete()
    return redirect('sellereditproduct', idi=pid)


def removeimg(request, pid, imgid):
    prodimg = dataBase.ProductImage.objects.get(id=imgid)
    prodimg.delete()
    return redirect('sellereditproduct', idi=pid)


def updateimg(request, pid):
    print("-----updateimg------")
    # print(request.FILES)
    # print(request.FILES['files'])
    # print(request.GET.files('files'))

    product = dataBase.Product.objects.get(id=pid)
    filepath = request.FILES.getlist('files')
    proimg = dataBase.ProductImage.objects.filter(product_product_id=product)
    for i in range(len(filepath)):

        productimg = dataBase.ProductImage()
        productimg.image = filepath[i]
        # productimg.save()
        productimg.color = proimg[0].color
        productimg.product_product_id = product
        productimg.save()

    return redirect('sellereditproduct', idi=pid)


def removeproduct(request, pid):
    product = dataBase.Product.objects.get(id=pid)
    product.delete()
    user = request.user
    typep = 0
    seller = dataBase.Seller.objects.get(user_user_id=user)
    if typep == 0:  # normal
        product = dataBase.Product.objects.filter(seller_seller_id=seller)
    elif typep == 1:  # try and buy
        product = dataBase.Product.objects.filter(
            seller_seller_id=seller, try_and_buy=1)
    elif typep == 2:  # active(status)
        product = dataBase.Product.objects.filter(
            seller_seller_id=seller, status=1)
    elif typep == 4:  # inactive
        product = dataBase.Product.objects.filter(
            seller_seller_id=seller, status=0)
    elif typep == 5:  # try and buy
        product = dataBase.Product.objects.filter(
            seller_seller_id=seller, try_and_buy=0)

    proimg = []
    active = len(dataBase.Product.objects.filter(
        seller_seller_id=seller, try_and_buy=1))
    inactive = len(dataBase.Product.objects.filter(
        seller_seller_id=seller, status=0))
    status1 = len(dataBase.Product.objects.filter(
        seller_seller_id=seller, status=1))
    for i in product:
        # if i.try_and_buy==1:
        #     active=active+1

        # if i.status == 1:
        #     status1 = status1+1
        # else:
        #     inactive = inactive+1
        try:
            imgae = dataBase.ProductImage.objects.filter(product_product_id=i)
            proimg.append(imgae[0].image)
        except Exception as e:
            print(e)

    page = request.GET.get('page', 1)

    paginator = Paginator(
        list(zip(product, proimg, range(1, len(product)+1))), 5)
    try:
        users = paginator.page(page)
    except PageNotAnInteger:
        users = paginator.page(1)
    except EmptyPage:
        users = paginator.page(paginator.num_pages)
    print("--------------")
    print(users)
    print("--------------")
    return render(request, 'SellerMyProducts.html', {'msg': "Product removed sucessfully", 'inactive': inactive, 'users': users, 'active': active, 'ab': zip(product, proimg, range(1, len(product)+1)), 'status': status1})


def updateproduct(request, pid):
    if request.method == "POST":
        product = dataBase.Product.objects.get(id=pid)
        print('--------update------------')
        print(request.POST.get('product_name'))
        print(request.POST.get('TryAndBuy'))
        product.product_name = request.POST.get('product_name')
        product.product_selling_price = request.POST.get('txtChar')
        product.product_short_description = request.POST.get('short_desc')
        product.product_specification = request.POST.get('inputSpecs')
        product.qty_product = request.POST.get('quantity')
        product.product_mrp = request.POST.get('inputMRP')
        print(dataBase.Size.objects.filter(
            size_value=request.POST.get('size'))[0])
        product.size = dataBase.Size.objects.filter(
            size_value=request.POST.get('size'))[0]
        product.status = request.POST.get('active')
        # print("------------------------brnad")
        # print(request.POST.get('DropDownList4'))
        # print(dataBase.Brand.objects.get(brand_name=request.POST.get('DropDownList4')))
        product.categoryHasBrand_id = dataBase.CategoryHasBrand.objects.filter(
            brand_brand_id=dataBase.Brand.objects.get(brand_name=request.POST.get('DropDownList4')))[0]

        print(request.POST.get('TryAndBuy'))
        if request.POST.get('TryAndBuy') != None:
            product.try_and_buy = 1
        else:
            product.try_and_buy = 0
        print(request.POST.get('active'))
        if request.POST.get('active') == 'on':
            product.status = 1
        else:
            product.status = 0
        # product. =request.GET.get('')

        product.save()
        return redirect('sellereditproduct', idi=pid)
    return redirect('sellereditproduct', idi=pid)


def updateoffer(request, pid, oid):
    if request.method == "POST":
        if oid == "null":
            print(request.POST.get('OfferStartDate'))
            offer = dataBase.Offer()
            offer.start_date = request.POST.get('OfferStartDate')
            offer.end_date = request.POST.get('offerenddate')
            offer.offer_name = request.POST.get('offername')
            offer.discount = request.POST.get('discount')
            product = dataBase.Product.objects.get(id=pid)
            offer.product_product_id = product
            offer.save()
        else:
            offer = dataBase.Offer.objects.get(id=oid)
            # print(offer)
            offer.start_date = request.POST.get('OfferStartDate')
            offer.end_date = request.POST.get('offerenddate')
            offer.offer_name = request.POST.get('offername')
            offer.discount = request.POST.get('discount')
            product = dataBase.Product.objects.get(id=pid)
            offer.product_product_id = product
            offer.save()
    return redirect('sellereditproduct', idi=pid)


def updatefeature(request, pid):
    if request.method == "POST":
        print("--------fc")
        print(request.POST.get("featurecount"))
        print("--------fc")
        print(request.POST)
        featurecount = int(request.POST.get("featurecount"))
        product = dataBase.Product.objects.get(id=pid)
        if featurecount > 0:
            for f in range(1, int(featurecount)+1):
                print("---------add 2")
                feature = dataBase.Feature()
                print(f)

                print(request.POST.get(f"Fname{f}"))
                feature.feature_name = request.POST.get(f"Fname{f}")
                feature.save()
                producthasfeature = dataBase.ProductHasFeature()
                producthasfeature.feature_feature_id = feature
                producthasfeature.product_product_id = product
                producthasfeature.feature_value = request.POST.get(f"value{f}")
                producthasfeature.save()

    return redirect('sellereditproduct', idi=pid)
#     user_email = request.POST.get('email')


#     # seller = dataBase.seller.objects.get(user_id=user)
#     # customer = dataBase.customer.objjects.get(user)
#     #todo
#     user.dataBase.seller.otp = random.randrange(100000,999999)


# def firstTimeLogin(request):
    # return render(request,'customer/CustomerFirstTimeProfile.html')

def sellerdashboard(request):
    user = request.user
    seller = dataBase.Seller.objects.get(user_user_id=user)
    product = dataBase.Product.objects.filter(seller_seller_id=seller)

    order_details = dataBase.OrderDetails.objects.all()
    # order = dataBase.Order.objects.filter()

    # pcode = product
    # print(pcode)
    # print(user)
    # print(seller)
    # print(product)
    # proimg = []
    active = 0
    status1 = 0
    normal = 0
    block = 0
    credit = 0
    debit = 0
    pending = 0

    totalOrder = 0
    tAbOrder = 0
    normalOrder = 0
    returnOrder = 0
    cancelOrder = 0
    try:
        payment = dataBase.PaymentTransaction.objects.filter(
            seller_seller_id=seller)
        for i in payment:

            if i.credit_debit == 1:
                credit = credit+1
            else:
                debit = debit+1
            if i.payment_status == 2:
                pending = pending+1
    except Exception as e:
        print(e)
    for i in product:
        if i.try_and_buy == 1:
            active = active+1
        else:
            normal = normal+1

        if i.status == 1:
            status1 = status1+1

        if i.status == 2:
            block = block+1
        # try:
        #     imgae = dataBase.ProductImage.objects.filter(product_product_id = i)
        #     proimg.append(imgae[0].image)
        # except Exception as e:
        #     print(e)
    for od in order_details:

        for p in product:
            if od.product_product_id == p:
                totalOrder = totalOrder+1
                # print('-------------')
                if od.orderdetails_order_id.order_status == "returned":
                    print('-------------hrthl------------------')
                    returnOrder = returnOrder+1
                if od.orderdetails_order_id.order_status == "Cancelled":
                    cancelOrder = cancelOrder+1
                # print(od.orderdetails_order_id.order_status)
                if od.try_and_buy == 1:
                    tAbOrder = tAbOrder+1
                if od.try_and_buy == 0:
                    normalOrder = normalOrder+1

    return render(request, 'SellerDashboard.html', {'cacelord': cancelOrder, 'pending': pending, 'block2': block, 'user': user, 'credit': credit, 'debit': debit, 'active': active, 'normal': normal, 'ab': product, 'status': status1, 'totalorder': totalOrder, 'tAborder': tAbOrder, 'normalorder': normalOrder, 'returnorder': returnOrder})


def sellerprofile(request):
    # if request.method == "POST":
    user = request.user
    seller = dataBase.Seller.objects.get(user_user_id=user)

    # print(request.GET.get('fname'))
    # user.first_name = request.GET.get('fname')

    return render(request, 'SellerProfilePage.html', {'user': user, 'seller': seller})


def sellereditprofile(request):
    print('profile')
    if request.method == "POST":
        user = request.user
        seller = dataBase.Seller.objects.get(user_user_id=user)
        # print(seller)
        # print('--------------')
        # print(request.POST.get('fname'))
        user.first_name = request.POST.get('fname')
        user.last_name = request.POST.get('lname')
        user.email = request.POST.get('email')
        seller.seller_mobile_num = request.POST.get('phone')
        print(request.FILES.get('img'))
        if request.FILES.get('img'):
            seller.profile_image = request.FILES.get('img')

        user.save()
        seller.save()

    return render(request, 'SellerProfilePage.html', {'seller': seller})


def sellerorder(request, ord):
    user = request.user
    seller = dataBase.Seller.objects.get(user_user_id=user)
    sellerProducts = dataBase.Product.objects.filter(seller_seller_id=seller)
    seller_order = []
    proimg = []
    order = []
    # order = dataBase.OrderDetails.objects.all()
    payment = []
    completed = 0
    active = 0
    returno = 0
    cancel = 0

    if ord == 0:  # total
        # print("-------0-----order")
        order = dataBase.OrderDetails.objects.all()
    if ord == 1:  # try and buy
        order = dataBase.OrderDetails.objects.filter(try_and_buy=1)
    if ord == 2:  # normal
        order = dataBase.OrderDetails.objects.filter(try_and_buy=0)
    if ord == 3:  # return
        orde = dataBase.OrderDetails.objects.all()
        for o in orde:
            if o.orderdetails_order_id.order_status == "returned":
                order.append(o)

    if ord == 4:  # cancel
        orde = dataBase.OrderDetails.objects.all()
        for o in orde:
            if o.orderdetails_order_id.order_status == "cancelled":
                order.append(o)

    if ord == 5:  # completed
        orde = dataBase.OrderDetails.objects.all()
        for o in orde:
            if o.orderdetails_order_id.order_status == "completed":
                order.append(o)

    if ord == 6:  # active
        orde = dataBase.OrderDetails.objects.all()
        for o in orde:
            if o.orderdetails_order_id.order_status == "pending":
                order.append(o)

    # payment = dataBase.PaymentTransaction.objects.get(
    #     order_id=order.orderdetails_order_id)
    # print('-------------------')
    # print(payment)
    for op in order:
        # print('-------------ord')
        for pro in sellerProducts:
            # print('---------pro')
            print(pro)

            if op.product_product_id == pro:

                print(returno)
                # print('--------img')
                proi = dataBase.ProductImage.objects.filter(
                    product_product_id=pro)

                proimg.append(proi[0])
                print(op)
                seller_order.append(op)
                # print('--------img2')
                try:
                    # print('------pay')
                    pay = dataBase.PaymentTransaction.objects.filter(
                        order_id=op.orderdetails_order_id)
                    for p in pay:

                        if p.payment_intention_payment_intention_id != 3:
                            payment.append(p)
                    # print('------------------hello----------')
                except Exception as e:
                    # print('----------error')
                    print(e)
    orderdetails12 = dataBase.OrderDetails.objects.all()
    # sellerProducts = dataBase.Product.objects.filter(seller_seller_id=seller)
    for s in orderdetails12:
        for sp in sellerProducts:
            if s.product_product_id == sp:
                if s.orderdetails_order_id.order_status == "returned":
                    returno = returno+1
                    print(returno)
                if s.orderdetails_order_id.order_status == "pending":
                    active = active+1
                    print(active)
                if s.orderdetails_order_id.order_status == "completed":
                    completed = completed+1
                    print(completed)
                if s.orderdetails_order_id.order_status == "cancelled":
                    cancel = cancel+1
                    print(cancel)

    print('-----------------')
    # print(seller_order[0].id)
    print('-----------------')
    page = request.GET.get('page', 1)
    print(len(seller_order))
    print(len(proimg))
    print(len(payment))
    paginator = Paginator(list(zip(seller_order, proimg, payment)), 1)
    try:
        users = paginator.page(page)
        print("page try")
    except PageNotAnInteger:
        users = paginator.page(1)
        print("page error")
    except EmptyPage:
        print("page error2")
        users = paginator.page(paginator.num_pages)
    print("------------")
    print(len(users))
    for i, j, k in users:
        print(i, j.image.url, k)
    print("------------")

    return render(request, 'SellerOrderTab.html', {'cancelled': cancel, 'active': active, 'returned': returno, 'completed': completed, 'users': users, 'order': zip(seller_order, proimg, payment), 'order2': zip(seller_order, proimg, payment)})


def sellertransaction(request, cred):
    user = request.user
    seller = dataBase.Seller.objects.get(user_user_id=user)
    payment = []
    credit = len(dataBase.PaymentTransaction.objects.filter(
        seller_seller_id=seller, credit_debit=1))
    debit = len(dataBase.PaymentTransaction.objects.filter(
        seller_seller_id=seller, credit_debit=0))
    pending = len(dataBase.PaymentTransaction.objects.filter(
        seller_seller_id=seller, payment_status=2))
    failed = len(dataBase.PaymentTransaction.objects.filter(
        seller_seller_id=seller, payment_status=3))
    print(credit)
    print(debit)
    try:
        if cred == 0:  # normal
            payment = dataBase.PaymentTransaction.objects.filter(
                seller_seller_id=seller)
        elif cred == 1:  # credit
            payment = dataBase.PaymentTransaction.objects.filter(
                seller_seller_id=seller, credit_debit=1)
        elif cred == 2:  # debit
            payment = dataBase.PaymentTransaction.objects.filter(
                seller_seller_id=seller, credit_debit=0)
        elif cred == 3:  # pending
            payment = dataBase.PaymentTransaction.objects.filter(
                seller_seller_id=seller, payment_status=2)
        elif cred == 4:  # failed
            payment = dataBase.PaymentTransaction.objects.filter(
                seller_seller_id=seller, payment_status=3)

        # payment = dataBase.PaymentTransaction.objects.filter(seller_seller_id=seller)
        # for i in payment:

        #     if i.credit_debit == 1:
        #         credit= credit+1
        #     else:
        #         debit = debit+1
    except Exception as e:
        print(e)
    page = request.GET.get('page', 1)

    paginator = Paginator(payment, 10)
    try:

        users = paginator.page(page)

    except PageNotAnInteger:
        users = paginator.page(1)

    except EmptyPage:
        users = paginator.page(paginator.num_pages)

    return render(request, 'SellerTransactionHistory.html', {'pending': pending, 'failed': failed, 'users': users, 'pay': payment, 'credit': credit, 'debit': debit})


def subscriptionplan(request):
    return render(request, 'Subscription.html')


def getsubscription(request, plan):
    user = request.user
    print(user)
    seller = dataBase.Seller.objects.get(user_user_id=user)
    print(seller)
    # subscription = dataBase.Subscription.objects.all()
    sellersubscription = dataBase.sellersubscription()
    paymentintent = dataBase.PaymentIntention.objects.get(
        payment_intention_desc="Subscription payment")
    payment = dataBase.PaymentTransaction()
    if request.method == "POST":
        paymentmode = request.POST.get('orderpay')
        print(paymentmode)

        if plan == "ea":
            subscription = dataBase.Subscription.objects.get(id=6)
            sellersubscription.start_date = datetime.date.today()
            sellersubscription.end_date = datetime.date.today()+datetime.timedelta(weeks=+52)
            sellersubscription.seller_id = seller
            sellersubscription.subscription_id = subscription
            sellersubscription.save()

            if paymentmode == 'paytm':
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="UPI")

            if paymentmode == "cc":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="credit card")

            if paymentmode == "dbcard":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="debit card")
            print(subscription.cost)
            payment.transaction_date = datetime.date.today()
            payment.amount = subscription.cost
            payment.seller_seller_id = seller
            payment.payment_method_payment_method_id = paymentmode
            payment.payment_intention_payment_intention_id = paymentintent
            payment.credit_debit = 1
            payment.payment_status = 1
            payment.company_company_id = dataBase.Company.objects.get(
                name="maruti")
            payment.save()
            seller.seller_subscription = 1
            seller.save()

        if plan == "bua":
            subscription = dataBase.Subscription.objects.get(id=5)
            sellersubscription.start_date = datetime.date.today()
            sellersubscription.end_date = datetime.date.today()+datetime.timedelta(weeks=+52)
            sellersubscription.seller_id = seller
            sellersubscription.subscription_id = subscription
            sellersubscription.save()

            if paymentmode == 'paytm':
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="UPI")

            if paymentmode == "cc":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="credit card")

            if paymentmode == "dbcard":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="debit card")
            print(subscription.cost)
            payment.transaction_date = datetime.date.today()
            payment.amount = subscription.cost
            payment.seller_seller_id = seller
            payment.payment_status = 1
            payment.payment_method_payment_method_id = paymentmode
            payment.payment_intention_payment_intention_id = paymentintent
            payment.credit_debit = 1
            payment.company_company_id = dataBase.Company.objects.get(
                name="maruti")
            payment.save()
            seller.seller_subscription = 1
            seller.save()

        if plan == "ba":
            subscription = dataBase.Subscription.objects.get(id=4)
            sellersubscription.start_date = datetime.date.today()
            sellersubscription.end_date = datetime.date.today()+datetime.timedelta(weeks=+52)
            sellersubscription.seller_id = seller
            sellersubscription.subscription_id = subscription
            sellersubscription.save()

            if paymentmode == 'paytm':
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="UPI")

            if paymentmode == "cc":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="credit card")

            if paymentmode == "dbcard":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="debit card")
            print(subscription.cost)
            payment.transaction_date = datetime.date.today()
            payment.amount = subscription.cost
            payment.seller_seller_id = seller
            payment.payment_method_payment_method_id = paymentmode
            payment.payment_status = 1
            payment.payment_intention_payment_intention_id = paymentintent
            payment.credit_debit = 1
            payment.company_company_id = dataBase.Company.objects.get(
                name="maruti")
            payment.save()
            seller.seller_subscription = 1
            seller.save()

        if plan == "em":
            subscription = dataBase.Subscription.objects.get(id=3)
            sellersubscription.start_date = datetime.date.today()
            sellersubscription.end_date = datetime.date.today()+datetime.timedelta(weeks=+4)
            sellersubscription.seller_id = seller
            sellersubscription.subscription_id = subscription
            sellersubscription.save()

            if paymentmode == 'paytm':
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="UPI")

            if paymentmode == "cc":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="credit card")

            if paymentmode == "dbcard":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="debit card")
            print(subscription.cost)
            payment.transaction_date = datetime.date.today()
            payment.amount = subscription.cost
            payment.seller_seller_id = seller
            payment.payment_status = 1
            payment.payment_method_payment_method_id = paymentmode
            payment.payment_intention_payment_intention_id = paymentintent
            payment.credit_debit = 1
            payment.company_company_id = dataBase.Company.objects.get(
                name="maruti")

            payment.save()
            seller.seller_subscription = 1
            seller.save()

        if plan == "bum":
            subscription = dataBase.Subscription.objects.get(id=2)
            sellersubscription.start_date = datetime.date.today()
            sellersubscription.end_date = datetime.date.today()+datetime.timedelta(weeks=+4)
            sellersubscription.seller_id = seller
            sellersubscription.subscription_id = subscription
            sellersubscription.save()

            if paymentmode == 'paytm':
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="UPI")

            if paymentmode == "cc":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="credit card")

            if paymentmode == "dbcard":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="debit card")
            print(subscription.cost)
            payment.transaction_date = datetime.date.today()
            payment.amount = subscription.cost
            payment.seller_seller_id = seller
            payment.payment_status = 1
            payment.payment_method_payment_method_id = paymentmode
            payment.payment_intention_payment_intention_id = paymentintent
            payment.credit_debit = 1
            payment.company_company_id = dataBase.Company.objects.get(
                name="maruti")
            payment.save()
            seller.seller_subscription = 1
            seller.save()

        if plan == "bm":
            subscription = dataBase.Subscription.objects.get(id=1)
            sellersubscription.start_date = datetime.date.today()
            sellersubscription.end_date = datetime.date.today()+datetime.timedelta(weeks=+4)
            sellersubscription.seller_id = seller
            sellersubscription.subscription_id = subscription
            sellersubscription.save()

            if paymentmode == 'paytm':
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="UPI")

            if paymentmode == "cc":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="credit card")

            if paymentmode == "dbcard":
                paymentmode = dataBase.PaymentMethod.objects.get(
                    payment_method_name="debit card")
            print(subscription.cost)
            payment.transaction_date = datetime.date.today()
            payment.amount = subscription.cost
            payment.seller_seller_id = seller
            payment.payment_status = 1
            payment.payment_method_payment_method_id = paymentmode
            payment.payment_intention_payment_intention_id = paymentintent
            payment.credit_debit = 1
            payment.company_company_id = dataBase.Company.objects.get(
                name="maruti")
            payment.save()
            seller.seller_subscription = 1
            seller.save()

        return render(request, 'SubscribedSeller.html', {'sellersub': sellersubscription})

    return render(request, 'GetSubscription.html', {'plan': plan})


def subscribed(request):
    user = request.user
    seller = dataBase.Seller.objects.get(user_user_id=user)
    sellersubscription = dataBase.sellersubscription.objects.filter(
        seller_id=seller)
    sub = []
    try:
        for s in sellersubscription:

            if s.end_date >= datetime.date.today():
                sub.append(s)
            else:
                seller.seller_subscription = 0
            seller.save()
        if seller.seller_subscription == 1:
            return render(request, 'SubscribedSeller.html', {'sellersub': sub[0]})
    except Exception as e:
        print(e)

    return render(request, 'Subscription.html')


def contactus(request):
    return render(request, 'ContactUs.html')


def help(request):
    return render(request, 'Help.html')


def render_to_pdf(template_src, context_dict={}):
    template = get_template(template_src)
    html = template.render(context_dict)
    result = BytesIO()
    # , link_callback=fetch_resources)
    pdf = pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None


def reporttrans(request):
    user = request.user
    seller = dataBase.Seller.objects.get(user_user_id=user)
    payment = dataBase.PaymentTransaction.objects.filter(
        seller_seller_id=seller)
    date = datetime.date.today()
    data = {
        'pay': payment,
        'date': date
    }
    pdf = render_to_pdf('transaction.html', data)
    return HttpResponse(pdf, content_type='application/pdf')
    # return render(request,'report.html', data)
