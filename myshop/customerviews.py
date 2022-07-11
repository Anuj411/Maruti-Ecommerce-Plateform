from django.shortcuts import render, redirect
from django.http import HttpRequest

from django.contrib.auth import logout, login, authenticate

from . import models as dataBase
from django.contrib.auth.models import User, auth

from django.conf import settings
from django.core.mail import send_mail

from django.contrib.auth.decorators import login_required
from datetime import date

import random

from django.db.models import Sum
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

import datetime


def customerdash(request):
    try:
        customer = dataBase.Customer.objects.get(user_user_id=request.user)
        if customer.firstvisit == 0:
            return redirect('firsttime')
    except Exception as e:
        print(request.user)
        if request.user == "AnonymousUser":
            return redirect('customerdash')

    product = dataBase.Product.objects.filter(status=1)
    print(range(len(product)))
    img = []

    for i in product:
        imge = dataBase.ProductImage.objects.filter(product_product_id=i.id)
        if len(imge) > 0:
            img.append(imge[0])
        else:
            img.append("sry")
    return render(request, "CustomerDashBoard.html", {'product': zip(product, img), 'product1': zip(product, img), 'product2': zip(product, img)})


def seeall(request):
    product = dataBase.Product.objects.filter(status=1)
    midcat = dataBase.CategoryMid.objects.all()
    brand = dataBase.Brand.objects.all()
    print(len(product))
    img = []
    for i in product:
        imge = dataBase.ProductImage.objects.filter(product_product_id=i.id)
        if len(imge) > 0:
            img.append(imge[0])
        else:
            img.append("sry")

    page = request.GET.get('page', 1)

    paginator = Paginator(product, 10)
    try:
        productpage = paginator.page(page)
    except PageNotAnInteger:
        productpage = paginator.page(1)
    except EmptyPage:
        productpage = paginator.page(paginator.num_pages)

    return render(request, "ProductView.html", {'product': zip(product, img), "productpage": zip(productpage, img), "procount": len(productpage), "page": productpage, 'midcat': midcat, "brand": brand})


def newreleases(request):
    product = dataBase.Product.objects.filter(
        status=1).order_by('product_add_date').reverse()
    midcat = dataBase.CategoryMid.objects.all()
    brand = dataBase.Brand.objects.all()
    print(len(product))
    img = []
    for i in product:
        imge = dataBase.ProductImage.objects.filter(product_product_id=i.id)
        if len(imge) > 0:
            img.append(imge[0])
        else:
            img.append("sry")

    page = request.GET.get('page', 1)

    paginator = Paginator(product, 10)
    try:
        productpage = paginator.page(page)
    except PageNotAnInteger:
        productpage = paginator.page(1)
    except EmptyPage:
        productpage = paginator.page(paginator.num_pages)

    return render(request, "ProductView.html", {'product': zip(product, img), "productpage": zip(productpage, img), "procount": len(productpage), "page": productpage, 'midcat': midcat, "brand": brand})


def search(request):
    brand = dataBase.Brand.objects.all()
    midcat = dataBase.CategoryMid.objects.all()
    print("--------searchproduct")
    print(request.GET.get("searchbox"))
    search = request.GET.get("searchbox")
    searchlist = str(search).split()
    subcat = dataBase.CategorySub.objects.all()
    # print(searchlist)
    # print(type(searchlist))
    p = dataBase.Product.objects.filter(status=1)
    product = []
    producthasfeat = dataBase.ProductHasFeature.objects.all()
    for searchvalue in searchlist:
        for i in p:
            if str(searchvalue).lower() in i.product_name.lower().split():
                if i not in product:
                    product.append(i)
        for b in brand:
            if str(searchvalue).lower() in b.brand_name.lower().split():
                for j in p:
                    print(j.categoryHasBrand_id.brand_brand_id)
                    if b.id == j.categoryHasBrand_id.brand_brand_id.id:
                        print(j.categoryHasBrand_id.brand_brand_id)
                        if j not in product:
                            product.append(j)

        for pf in producthasfeat:
            if str(searchvalue).lower() in pf.feature_value.lower().split():
                for j in p:
                    if j not in product:
                        product.append(j)

        for sc in subcat:
            if str(searchvalue).lower() in sc.category_name.lower().split():
                for j in p:
                    if j not in product:
                        if sc.midCategoryId == j.categoryHasBrand_id.category_category_id:
                            product.append(j)

    print(len(product))
    img = []
    for i in product:
        imge = dataBase.ProductImage.objects.filter(product_product_id=i.id)
        if len(imge) > 0:
            img.append(imge[0])
        else:
            img.append("sry")

    page = request.GET.get('page', 1)

    paginator = Paginator(product, 10)
    try:
        productpage = paginator.page(page)
    except PageNotAnInteger:
        productpage = paginator.page(1)
    except EmptyPage:
        productpage = paginator.page(paginator.num_pages)

    return render(request, "ProductView.html", {'product': zip(product, img), "productpage": zip(productpage, img), "page": productpage, 'midcat': midcat, "brand": brand, "procount": len(productpage)})


def catfilter(request, catid):
    brand = dataBase.Brand.objects.all()
    midcat = dataBase.CategoryMid.objects.all()
    cat = dataBase.CategoryMid.objects.get(id=catid)
    cathasbrand = dataBase.CategoryHasBrand.objects.filter(
        category_category_id=cat)
    print(type(cathasbrand))
    product = []
    for i in cathasbrand:
        productio = dataBase.Product.objects.filter(
            categoryHasBrand_id=i, status=1)
        for pr in productio:
            product.append(pr)
    print(range(len(product)))
    img = []
    for i in product:
        imge = dataBase.ProductImage.objects.filter(product_product_id=i.id)
        if len(imge) > 0:
            img.append(imge[0])
        else:
            img.append("sry")

    page = request.GET.get('page', 1)

    paginator = Paginator(product, 10)
    try:
        productpage = paginator.page(page)
    except PageNotAnInteger:
        productpage = paginator.page(1)
    except EmptyPage:
        productpage = paginator.page(paginator.num_pages)

    return render(request, "ProductView.html", {'product': zip(product, img), "productpage": zip(productpage, img), "page": productpage, 'midcat': midcat, "brand": brand})


def brandfilter(request):
    midcat = dataBase.CategoryMid.objects.all()
    print(request.GET.getlist('brand_name'))
    brand_ids = request.GET.getlist('brand_name')
    product = []
    for b in brand_ids:
        try:
            bran = dataBase.CategoryHasBrand.objects.get(brand_brand_id=b)
            pro = dataBase.Product.objects.filter(
                categoryHasBrand_id=bran, status=1)
            for p in pro:
                product.append(p)
        except Exception as e:
            print(e)
    img = []
    for i in product:
        imge = dataBase.ProductImage.objects.filter(product_product_id=i.id)
        if len(imge) > 0:
            img.append(imge[0])
        else:
            img.append("sry")

    page = request.GET.get('page', 1)

    paginator = Paginator(product, 10)
    try:
        productpage = paginator.page(page)
    except PageNotAnInteger:
        productpage = paginator.page(1)
    except EmptyPage:
        productpage = paginator.page(paginator.num_pages)
    brand = dataBase.Brand.objects.all()
    return render(request, "ProductView.html", {'product': zip(product, img), "procount": len(productpage), "productpage": zip(productpage, img), "page": productpage, 'midcat': midcat, "brand": brand})


def fristtime_profile(request):
    if request.method == "POST":
        print(request.POST)
        user = request.user
        customer = dataBase.Customer.objects.get(user_user_id=user)
        print(user.username)

        user.first_name = request.POST.get('fname')
        user.last_name = request.POST.get('lname')
        customer.customer_address = request.POST.get('addr')
        customer.profile_image = request.FILES.get('propic')
        user.email = request.POST.get('email')
        user.save()
        customer.firstvisit = 1
        customer.save()
        return redirect('customerdash')
    return render(request, 'CustomerFirstTimeProfile.html')


def profile_setting(request):
    if request.method == "POST":
        user = request.user
        customer = dataBase.Customer.objects.get(user_user_id=user)
        if request.POST.get('fname'):
            user.first_name = request.POST.get('fname')
        user.last_name = request.POST.get('lname')
        customer.customer_address = request.POST.get('addr')
        if request.FILES.get('propic'):
            customer.profile_image = request.FILES.get('propic')
        user.email = request.POST.get('email')
        print(request.POST.get('cupass'))
        print(request.POST.get('newpass'))
        try:
            if user.check_password(request.POST.get('cupass')):

                user.set_password(request.POST.get('newpass'))
                user.save()
                return render(request, 'CustomerLaterProfileSetting.html', {'msg': "succesfully Changed your Password"})
            else:
                return render(request, 'CustomerLaterProfileSetting.html', {'msg': "Please Enter Correct Current Password"})

        except Exception as e:
            print(e)
        customer.save()
        return render(request, 'CustomerLaterProfileSetting.html')
    return render(request, 'CustomerLaterProfileSetting.html')


@login_required(login_url='signin')
def prodview(request, pid):
    user = request.user
    customer = dataBase.Customer.objects.get(user_user_id=user)
    counter = 0
    r1 = 0
    r2 = 0
    r3 = 0
    r4 = 0
    r5 = 0

    try:
        review = dataBase.ProductReviews.objects.filter(product_product_id=pid)
        for r in review:
            if r.customer_customer_id == customer:
                counter = counter+1
            if r.rating == 1:
                r1 = r1+1
            if r.rating == 2:
                r2 = r2+1
            if r.rating == 3:
                r3 = r3+1
            if r.rating == 4:
                r4 = r4+1
            if r.rating == 5:
                r5 = r5+1
        avg = (r1+r2+r3+r4+r5)/5
        customer = dataBase.Customer.objects.get(user_user_id=request.user)
        if customer.firstvisit == 0:
            return redirect('firsttime')
    except Exception as e:
        print(request.user)
        if request.user == "AnonymousUser":
            return redirect('prodview')
    product = dataBase.Product.objects.get(id=pid, status=1)

    prodimg = dataBase.ProductImage.objects.filter(product_product_id=product)
    feature = dataBase.ProductHasFeature.objects.filter(
        product_product_id=product)
    # discounted = []
    discounted = 0
    cal = 0
    try:
        offer = dataBase.Offer.objects.get(product_product_id=product)
        print('-------------offer-----------')
        print(offer)
        # print(len(offer))
        if offer is not None:
            discount = offer.discount
            print('------------------discount-----')
            print(discount)
            if offer.end_date > datetime.date.today():
                print('--------------------')
                discounted1 = (product.product_selling_price*discount)/100
                discounted = product.product_selling_price-discounted1
                cal = product.product_mrp-discounted
                print(discounted)
            else:

                print('------------------else')
                discounted = product.product_selling_price
                cal = product.product_mrp-discounted
                print(discounted)
        else:
            print("hello")
            discounted = product.product_selling_price
            cal = product.product_mrp-discounted
            print(discounted)

    except Exception as e:
        print("hello")
        discounted = product.product_selling_price
        cal = product.product_mrp-discounted
        print(discounted)
        print('------------------------------------')
        print(e)
    try:
        wishobj = dataBase.wishlist.objects.get(
            product_product_id=product, customer_customer_id=customer)
    except:
        wishobj = None
    # cal = product.product_mrp-product.product_selling_price

    return render(request, 'CustomerProductView.html', {'discounted': discounted, 'avg': avg,  'r5': r5, 'r4': r4, 'r3': r3, 'r1': r1, 'r2': r2, 'counter': counter, 'review': review, 'product': product, 'prodimg': prodimg, 'feature': feature, 'cal': cal, 'wish': wishobj})


def customerwish(request):
    customer = dataBase.Customer.objects.get(user_user_id=request.user)
    print('hello')
    try:
        wishlist = dataBase.wishlist.objects.filter(
            customer_customer_id=customer)
        img = []
        print(wishlist)
        for i in wishlist:
            pro = dataBase.Product.objects.get(id=i.product_product_id.id)
            print(pro)
            proimg = dataBase.ProductImage.objects.filter(
                product_product_id=pro)
            # print(proimg)
            img.append(proimg[0])
        print('---------------------------')
        # print(img)
    except Exception as e:
        print("------exception--------")
        print(e)
        wishlist = None
    return render(request, 'CustomerWishlist.html', {"wish": zip(wishlist, img)})


def cart(request, pid):
    print(pid)
    product = dataBase.Product.objects.get(id=pid, status=1)
    prodimg = dataBase.ProductImage.objects.filter(product_product_id=product)
    customer = dataBase.Customer.objects.get(user_user_id=request.user)
    try:

        cart = dataBase.Cart()

        cart.product_product_id = product
        cart.customer_customer_id = customer
        cart.save()
        print("product added to cart")
    except Exception as e:
        print(e)

    # carts = dataBase.Cart.objects.filter(customer_customer_id=customer)
    # img = []
    # try:
    #     for i in carts:
    #         pro = dataBase.Product.objects.get(id=i.product_product_id.id)
    #         proimg = dataBase.ProductImage.objects.filter(product_product_id=pro)
    #         # print(proimg)
    #         img.append(proimg[0])

    # except Exception as e:
    #     print("------exception--------")
    #     print(e)
    #     carts=None

    return redirect('showcart')
    # return render(request,'CustomerCart.html',{"cart":zip(carts,img)})


def removewish(request, pid):

    user = request.user
    customer = dataBase.Customer.objects.get(user_user_id=user)
    pro = dataBase.Product.objects.get(id=pid)

    print("----------remove")
    wishobj = dataBase.wishlist.objects.get(
        product_product_id=pro, customer_customer_id=customer)
    wishobj.delete()
    print(wishobj)

    return redirect('customerwish')


def show_cart(request):
    customer = dataBase.Customer.objects.get(user_user_id=request.user)
    carts = dataBase.Cart.objects.filter(customer_customer_id=customer)
    img = []
    price = 0
    tryprice = 0

    proid = []

    try:
        for i in carts:
            pro = dataBase.Product.objects.get(
                id=i.product_product_id.id)
            proid.append(pro.id)
            proimg = dataBase.ProductImage.objects.filter(
                product_product_id=pro)
            # print(proimg)
            img.append(proimg[0])
            if pro.try_and_buy == 1:
                tryprice = tryprice+pro.product_selling_price
            else:
                price = price+pro.product_selling_price
        request.session['cartproducts'] = proid
    except Exception as e:
        print("------exception--------")
        print(e)
        # carts = None

    print(price)
    return render(request, 'CustomerCart.html', {"pro": proid, "car": carts, "cart": zip(carts, img), "cart2": zip(carts, img), "price": price, "tryprice": tryprice})


def removecart(request, pid):
    customer = dataBase.Customer.objects.get(user_user_id=request.user)
    pro = dataBase.Product.objects.get(id=pid)
    print(pro)
    try:
        cartobj = dataBase.Cart.objects.get(
            product_product_id=pro, customer_customer_id=customer)
        print('-------------')

        cartobj.delete()

    except Exception as e:
        print(e)

    return redirect('showcart')


def placeorder(request, pid, tryandbuy):
    if request.method == "POST":
        print(request.POST)
        name = request.POST.get('name')
        number = request.POST.get('mob')
        flat = request.POST.get('flat')
        area = request.POST.get('area')
        landmark = request.POST.get('landmark')
        pincode = request.POST.get('pin')
        qty = int(request.POST.get('qty'))
        price = int(request.POST.get('pprice'))
        print(type(price))
        paymentmode = request.POST.get('orderpay')
        gtotal = request.POST.get('hiddengtotal')
        print(gtotal)
        order = dataBase.Order()
        delivery = dataBase.Delivery()
        order_details = dataBase.OrderDetails()

        customer = dataBase.Customer.objects.get(user_user_id=request.user)

        order.mobile_number = number
        order.customer_customer_id = customer
        order.delivery_address = flat+','+area+','+landmark
        order.order_status = "pending"
        order.total_amount = gtotal
        order.order_date = date.today()

        order.save()
        delivery.order_order_id = order
        delivery.save()

        order_details.orderdetails_order_id = order
        order_details.product_price = price
        order_details.customer_delivery_area = area+'-'+pincode
        order_details.product_product_id = dataBase.Product.objects.get(id=pid)
        order_details.qty_ordered = qty
        order_details.try_and_buy = 0

        if price < 1000:

            order_details.delivery_charges = 60
        else:
            order_details.delivery_charges = 0
        order_details.save()

        if tryandbuy == 1:
            visitTime = request.POST.get('visitdate')
            tryandbuyopt = request.POST.get('tryandbuy')
            order.schedule_order = visitTime
            # print(tryandbuyopt)

            if tryandbuyopt == "tpaytm":
                tryandbuyopt = dataBase.PaymentMethod.objects.get(
                    payment_method_name="UPI")
                pass
            if tryandbuyopt == "tcredit":
                tryandbuyopt = dataBase.PaymentMethod.objects.get(
                    payment_method_name="credit card")

            if tryandbuyopt == "tdebit":
                tryandbuyopt = dataBase.PaymentMethod.objects.get(
                    payment_method_name="debit card")
                ccdetails = request.POST.get('ccdetails')
                ccdate = request.POST.get('ccdate')
                crecvv = request.POST.get('crecvv')

            paymentinten = dataBase.PaymentIntention.objects.get(
                payment_intention_desc="fix charge")
            paymenttrans = dataBase.PaymentTransaction()
            if price > 0 and price < 1000:

                order_details.fixed_charge = 50
            elif price > 1000 and price < 5000:

                order_details.fixed_charge = 150
            elif price > 5000 and price < 10000:
                order_details.fixed_charge = 300

            if price > 0 and price < 1000:

                paymenttrans.amount = 50
            elif price > 1000 and price < 5000:

                paymenttrans.amount = 150
            elif price > 5000 and price < 10000:
                paymenttrans.amount = 300
            paymenttrans.company_company_id = dataBase.Company.objects.get(
                name="maruti")
            paymenttrans.payment_intention_payment_intention_id = paymentinten
            paymenttrans.payment_method_payment_method_id = tryandbuyopt
            paymenttrans.credit_debit = 1
            paymenttrans.transaction_date = datetime.date.today()
            paymenttrans.order_id = order
            paymenttrans.payment_status = 1

            paymenttrans.save()
            order_details.try_and_buy = 1
            order.save()
            order_details.save()

        paymenttrans = dataBase.PaymentTransaction()
        if paymentmode == 'cod':

            paymentmode = dataBase.PaymentMethod.objects.get(
                payment_method_name="COD")
            paymenttrans.payment_status = 2

            # pass
        if paymentmode == 'paytm':

            paymentmode = dataBase.PaymentMethod.objects.get(
                payment_method_name="UPI")
            paymenttrans.payment_status = 1

        if paymentmode == "cc":

            paymentmode = dataBase.PaymentMethod.objects.get(
                payment_method_name="credit card")
            ccdetails = request.POST.get('ccdetails')
            ccdate = request.POST.get('ccdate')
            crecvv = request.POST.get('crecvv')
            paymenttrans.payment_status = 1

        if paymentmode == "dbcard":

            paymentmode = dataBase.PaymentMethod.objects.get(
                payment_method_name="debit card")
            paymenttrans.payment_status = 1

        paymentintent = dataBase.PaymentIntention.objects.get(
            payment_intention_desc="order payment")
        # paymenttrans = dataBase.PaymentTransaction()
        if price < 1000:

            paymenttrans.amount = (qty*price)+60

        else:
            paymenttrans.amount = price*qty

        paymenttrans.company_company_id = dataBase.Company.objects.get(
            name="maruti")
        paymenttrans.payment_intention_payment_intention_id = paymentintent
        paymenttrans.payment_method_payment_method_id = paymentmode
        paymenttrans.credit_debit = 1
        paymenttrans.transaction_date = datetime.date.today()
        paymenttrans.order_id = order

        paymenttrans.save()

        print(order)
        print(order_details)
        order.save()
        order_details.save()
        customer = dataBase.Customer.objects.get(user_user_id=request.user)
        pro = dataBase.Product.objects.get(id=pid, status=1)
        print(qty)
        pro.qty_product = pro.qty_product-qty
        pro.save()
        prodimg = dataBase.ProductImage.objects.filter(product_product_id=pro)
        return render(request, 'CustomerPlaceOrder.html', {'msg': "Succesfully Placed The Order", 'pro': pro, 'cus': customer, 'proimg': prodimg[0], "tryandbuy": tryandbuy})
    customer = dataBase.Customer.objects.get(user_user_id=request.user)
    pro = dataBase.Product.objects.get(id=pid)
    prodimg = dataBase.ProductImage.objects.filter(product_product_id=pro)

    # return redirect('orderlist')
    return render(request, 'CustomerPlaceOrder.html', {'pro': pro, 'cus': customer, 'proimg': prodimg[0], "tryandbuy": tryandbuy})


#

def showCatProduct(request, catname, what):
    if what == 1:
        catid = dataBase.CategorySub.objects.get(category_name=catname)
        # catmid = dataBase.CategoryHasBrand.objects.filter

        pro = dataBase.Product.objects.filter(status=1)
        product = []
        for i in pro:
            if i.categoryHasBrand_id.category_category_id == catid.midCategoryId:
                product.append(i)
        midcat = dataBase.CategoryMid.objects.all()
        brand = dataBase.Brand.objects.all()
        print(len(product))
        img = []
        for i in product:
            imge = dataBase.ProductImage.objects.filter(
                product_product_id=i.id)
            if len(imge) > 0:
                img.append(imge[0])
            else:
                img.append("sry")

        page = request.GET.get('page', 1)

        paginator = Paginator(product, 10)
        try:
            productpage = paginator.page(page)
        except PageNotAnInteger:
            productpage = paginator.page(1)
        except EmptyPage:
            productpage = paginator.page(paginator.num_pages)

        return render(request, "ProductView.html", {'product': zip(product, img), "productpage": zip(productpage, img), "procount": len(productpage), "page": productpage, 'midcat': midcat, "brand": brand})

    elif what == 2:
        catid = dataBase.CategoryMid.objects.get(category_name=catname)

        pro = dataBase.Product.objects.filter(status=1)
        product = []
        for i in pro:
            if i.categoryHasBrand_id.category_category_id == catid:
                product.append(i)
        midcat = dataBase.CategoryMid.objects.all()
        brand = dataBase.Brand.objects.all()
        print(len(product))
        img = []
        for i in product:
            imge = dataBase.ProductImage.objects.filter(
                product_product_id=i.id)
            if len(imge) > 0:
                img.append(imge[0])
            else:
                img.append("sry")

        page = request.GET.get('page', 1)

        paginator = Paginator(product, 10)
        try:
            productpage = paginator.page(page)
        except PageNotAnInteger:
            productpage = paginator.page(1)
        except EmptyPage:
            productpage = paginator.page(paginator.num_pages)

        return render(request, "ProductView.html", {'product': zip(product, img), "productpage": zip(productpage, img), "procount": len(productpage), "page": productpage, 'midcat': midcat, "brand": brand})


# def showofferproduct(request, catname, what):
#     if what == 1:


def checkoutcart(request, tryandbuy):
    customer = dataBase.Customer.objects.get(user_user_id=request.user)
    pro = request.session['cartproducts']
    print("----------------------checkoutcart")
    print(pro)
    product = []
    price = 0
    for i in pro:
        p = dataBase.Product.objects.get(id=i)
        if p.try_and_buy == tryandbuy:
            product.append(p)
            price = price+p.product_selling_price
    proimg = []
    for po in product:
        proi = dataBase.ProductImage.objects.filter(product_product_id=po)
        proimg.append(proi[0])
    return render(request, 'CustomerPlaceOrder2.html', {'price': price, 'product': zip(product, proimg), 'pro': product, 'cus': customer, 'proimg': proimg[0], "tryandbuy": tryandbuy})


def placefullorder(request, tryandbuy):

    pro = request.session['cartproducts']
    print("-----------placefullorder---------")
    if request.method == "POST":
        pprice = []
        fixcharge = []
        print(request.POST)
        name = request.POST.get('name')
        number = request.POST.get('mob')
        flat = request.POST.get('flat')
        area = request.POST.get('area')
        landmark = request.POST.get('landmark')
        pincode = request.POST.get('pin')
        # qty = int(request.POST.get('qty'))
        # price = str(request.POST.get('gtot'))
        # print(type(price))
        paymentmode = request.POST.get('orderpay')
        gtotal = request.POST.get('gtot')
        fixtotal = request.POST.get('fixtotal')
        print('--------------total--------------------')
        print(gtotal)
        order = dataBase.Order()
        delivery = dataBase.Delivery()
        customer = dataBase.Customer.objects.get(user_user_id=request.user)

        order.mobile_number = number
        order.customer_customer_id = customer
        order.delivery_address = flat+','+landmark
        order.order_status = "pending"
        order.total_amount = gtotal
        order.order_date = date.today()

        order.save()
        delivery.order_order_id = order
        delivery.save()
        for p in pro:
            if tryandbuy == 0:
                pid = None
                try:
                    pid = dataBase.Product.objects.get(id=p,  try_and_buy=0)
                except:
                    pid = None
                if pid != None:
                    order_details = dataBase.OrderDetails()

                    order_details.orderdetails_order_id = order
                    if pid.product_selling_price < 1000:
                        order_details.delivery_charges = 60
                    else:
                        order_details.delivery_charges = 0
                    order_details.product_price = (
                        request.POST.get('price'+str(p)))
                    order_details.customer_delivery_area = area+'-'+pincode
                    order_details.product_product_id = dataBase.Product.objects.get(
                        id=p,  try_and_buy=0)
                    order_details.qty_ordered = int(
                        request.POST.get('qty'+str(p)))
                    order_details.try_and_buy = 0
                    order_details.save()
            else:
                try:
                    pid = dataBase.Product.objects.get(id=p,  try_and_buy=1)
                except:
                    pid = None
                if pid != None:
                    order_details = dataBase.OrderDetails()
                    if pid.product_selling_price > 0 and pid.product_selling_price < 1000:
                        print('--------1-------')
                        order_details.fixed_charge = 50
                    elif pid.product_selling_price > 1000 and pid.product_selling_price < 5000:
                        print('--------2-------')
                        order_details.fixed_charge = 150
                    elif pid.product_selling_price > 5000:
                        print('--------3-------')
                        order_details.fixed_charge = 300

                    if pid.product_selling_price < 1000:
                        order_details.delivery_charges = 60
                    else:
                        order_details.delivery_charges = 0

                    order_details.orderdetails_order_id = order
                    order_details.product_price = (
                        request.POST.get('price'+str(p)))
                    order_details.customer_delivery_area = area+'-'+pincode
                    order_details.product_product_id = dataBase.Product.objects.get(
                        id=p, try_and_buy=1)
                    order_details.qty_ordered = int(
                        request.POST.get('qty'+str(p)))
                    order_details.try_and_buy = 1
                    order_details.save()
                    pprice.append(request.POST.get('price'+str(p)))
        # print(pprice)
        # print('---------price---------------')
        if tryandbuy == 1:
            visitTime = request.POST.get('visitdate')
            tryandbuyopt = request.POST.get('tryandbuy')
            order.schedule_order = visitTime
            # print(tryandbuyopt)

            if tryandbuyopt == "tpaytm":
                tryandbuyopt = dataBase.PaymentMethod.objects.get(
                    payment_method_name="UPI")
                pass
            if tryandbuyopt == "tcredit":
                tryandbuyopt = dataBase.PaymentMethod.objects.get(
                    payment_method_name="credit card")

            if tryandbuyopt == "tdebit":
                tryandbuyopt = dataBase.PaymentMethod.objects.get(
                    payment_method_name="debit card")
                ccdetails = request.POST.get('ccdetails')
                ccdate = request.POST.get('ccdate')
                crecvv = request.POST.get('crecvv')

            paymentinten = dataBase.PaymentIntention.objects.get(
                payment_intention_desc="fix charge")
            paymenttrans = dataBase.PaymentTransaction()
            # fix = len(pprice)

            for f in pro:
                try:
                    pid = dataBase.Product.objects.get(id=f,  try_and_buy=1)
                    print('---------------------------')
                    print(pid)
                    print('---------------------------')
                except:
                    pid = None
                if pid != None:
                    print('---------------------------1')
                    print(pid.product_selling_price)
                    print('---------------------------1')

                    if pid.product_selling_price > 0 and pid.product_selling_price < 1000:
                        print('--------4-------')
                        fixcharge.append(50)
                    elif pid.product_selling_price > 1000 and pid.product_selling_price < 5000:
                        print('--------5-------')
                        fixcharge.append(150)
                    elif pid.product_selling_price > 5000:
                        fixcharge.append(300)
                    paymenttrans.amount = sum(fixcharge)
                    paymenttrans.company_company_id = dataBase.Company.objects.get(
                        name="maruti")
                    paymenttrans.payment_intention_payment_intention_id = paymentinten
                    paymenttrans.payment_method_payment_method_id = tryandbuyopt
                    paymenttrans.credit_debit = 1
                    paymenttrans.transaction_date = datetime.date.today()
                    paymenttrans.order_id = order
                    paymenttrans.payment_status = 1

                    paymenttrans.save()
                    # order_details.try_and_buy = 1
                    order.save()
            # order_details.save()

        paymenttrans = dataBase.PaymentTransaction()
        if paymentmode == 'cod':

            paymentmode = dataBase.PaymentMethod.objects.get(
                payment_method_name="COD")
            paymenttrans.payment_status = 2

            # pass
        if paymentmode == 'paytm':

            paymentmode = dataBase.PaymentMethod.objects.get(
                payment_method_name="UPI")
            paymenttrans.payment_status = 1

        if paymentmode == "cc":

            paymentmode = dataBase.PaymentMethod.objects.get(
                payment_method_name="credit card")
            ccdetails = request.POST.get('ccdetails')
            ccdate = request.POST.get('ccdate')
            crecvv = request.POST.get('crecvv')
            paymenttrans.payment_status = 1

        if paymentmode == "dbcard":

            paymentmode = dataBase.PaymentMethod.objects.get(
                payment_method_name="debit card")
            paymenttrans.payment_status = 1

        paymentintent = dataBase.PaymentIntention.objects.get(
            payment_intention_desc="order payment")
        # paymenttrans = dataBase.PaymentTransaction()

        paymenttrans.amount = fixtotal

        paymenttrans.company_company_id = dataBase.Company.objects.get(
            name="maruti")
        paymenttrans.payment_intention_payment_intention_id = paymentintent
        paymenttrans.payment_method_payment_method_id = paymentmode
        paymenttrans.credit_debit = 1
        paymenttrans.transaction_date = datetime.date.today()
        paymenttrans.order_id = order

        paymenttrans.save()

    print(pro)
    return redirect('checkoutcart', tryandbuy=tryandbuy)


def orderlist(request):
    user = request.user
    customer = dataBase.Customer.objects.get(user_user_id=user)

    order = dataBase.Order.objects.filter(
        customer_customer_id=customer).order_by('order_date').reverse()
    payment = []
    order2 = []
    odetails = []
    pimg = []
    for o in order:
        orderdetails = dataBase.OrderDetails.objects.filter(
            orderdetails_order_id=o)
        try:
            pay = dataBase.PaymentTransaction.objects.filter(order_id=o)
            for p in pay:
                payment.append(p)
        except Exception as e:
            print(e)

        for orr in orderdetails:
            odetails.append(orr)
            proimg = dataBase.ProductImage.objects.filter(
                product_product_id=orr.product_product_id)
            pimg.append(proimg[0])
    # print(str(orderdetails))
    print(payment)
    page = request.GET.get('page', 1)

    paginator = Paginator(list(zip(odetails, pimg, payment)), 10)
    try:
        users = paginator.page(page)
    except PageNotAnInteger:
        users = paginator.page(1)
    except EmptyPage:
        users = paginator.page(paginator.num_pages)
    print('----------------order------------------')
    return render(request, 'CustomerPastOrderList.html', {'order': users})


def returnproduct(request, oid):
    orderdetails = dataBase.OrderDetails.objects.get(id=oid)
    pimg = dataBase.ProductImage.objects.filter(
        product_product_id=orderdetails.product_product_id)
    return render(request, 'CustomerProductReturnReplace.html', {'oid': orderdetails, 'pimg': pimg[0]})


def returnprod(request, odid):
    orderdetails = dataBase.OrderDetails.objects.get(id=odid)
    order = dataBase.Order.objects.get(
        id=orderdetails.orderdetails_order_id.id)
    product = dataBase.Product.objects.get(
        id=orderdetails.product_product_id.id, status=1)
    pimg = dataBase.ProductImage.objects.filter(
        product_product_id=product)
    if request.method == "POST":
        order.order_status = "returned"
        reason = request.POST.get('reasonprod')
        print(reason)
        returnprod = dataBase.ProductReturn()

        returnprod.product_return_date = datetime.date.today()
        returnprod.purchase_amount = orderdetails.orderdetails_order_id.total_amount
        if reason == "Others":
            returnprod.reason_for_return = request.POST.get('reason2')
        else:
            returnprod.reason_for_return = reason

        returnprod.order_details_order_order_id = orderdetails
        returnprod.order_details_product_product_id = product

        returnprod.save()
        order.save()
        # messsage = "Succesfully Returned The Order"
    return redirect('orderlist')


def cancelorder(request, oid):
    try:
        order = dataBase.Order.objects.get(id=oid)
        order.order_status = "cancelled"
        order.cancelled_order_date = datetime.date.today()
        # odetails = dataBase.OrderDetails.objects.get(id=odid)
        order.save()
        # order.delete()
    except Exception as e:
        print(e)
    return redirect('orderlist')


def reviews(request, pid):
    print('----------rev--------------')
    user = request.user
    customer = dataBase.Customer.objects.get(user_user_id=user)
    product = dataBase.Product.objects.get(id=pid, status=1)
    review = dataBase.ProductReviews()
    if request.method == "POST":
        try:
            rating = request.POST.get('rating')
            print(rating)
            rev = request.POST.get('reviews')
            print(rev)
            if rating == '5':
                review.rating = 5
            if rating == '4':
                review.rating = 4
            if rating == '3':
                review.rating = 3
            if rating == '2':
                review.rating = 2
            if rating == '1':
                review.rating = 1
            review.review = rev
            review.product_product_id = product
            review.customer_customer_id = customer
            review.save()
        except Exception as e:
            print(e)
    return redirect('prodview', pid=pid)
