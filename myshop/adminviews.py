from django.shortcuts import render, redirect
from django.http import HttpRequest, HttpResponse

from django.contrib.auth import logout, login, authenticate

from . import models as dataBase
from django.contrib.auth.models import User, auth

from django.conf import settings
from django.core.mail import send_mail

from django.contrib.auth.decorators import login_required

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

import random
from datetime import date, datetime

from django.db.models import Sum

from io import BytesIO
from django.template.loader import get_template
from xhtml2pdf import pisa
from num2words import num2words

import json
from calendar import monthrange

###################################################################################

def adminviewseller(request,sid):
    seller = dataBase.Seller.objects.get(id=sid)


    seller_sub = dataBase.sellersubscription.objects.filter(seller_id=seller).order_by('id')

    subscription = []
    for sub in seller_sub:
        subscription.append(dataBase.Subscription.objects.get(id=sub.subscription_id.id))

    return render(request,'Admin-View-Seller.html',{'seller':seller,'subscription':list(zip(seller_sub,subscription))})

def adminviewcustomer(request, cid):
    customer = dataBase.Customer.objects.get(id=cid)

    return render(request,'Admin-View-Customer.html',{'customer':customer})

def adminviewsp(request, spid):
    sp = dataBase.Salesperson.objects.get(id=spid)
    sal_att = dataBase.SalespersonAttendance.objects.all()
    delivery = dataBase.Delivery.objects.all()

    month = datetime.now().month
    att = sal_att.filter(attendance_date__month=month, salesperson_salesperson_id=spid).count()
    total_del = delivery.filter(salesperson_salesperson_id=spid).count()

    return render(request,'Admin-View-Salesperson.html', {'salesperson':sp, 'att':att, 'total_del':total_del})

def adminviewprod(request,pid):
    product = dataBase.Product.objects.get(id=pid)
    prod_img = dataBase.ProductImage.objects.filter(product_product_id=product)

    img = prod_img[0].image

    return render(request,'Admin-View-Product.html', {'product':product, 'img':img})

###################################################################################


def stockpdf(request):
    product = dataBase.Product.objects.all()
    d = date.today()

    data = {'date': d, 'products': product}
    pdf = render_to_pdf('Stock-report.html', data)

    # return render(request,"Stock-report.html",data)
    return HttpResponse(pdf, content_type='application/pdf')


####################################################################################

def sellerpaytranpdf(request):
    seller = dataBase.Seller.objects.get(id=17)
    tran_list = dataBase.PaymentTransaction.objects.all()
    d = date.today()

    tran = tran_list.filter(seller_seller_id=seller).order_by('-id')

    data = {'date': d, 'transactions': tran, 'seller': seller}
    pdf = render_to_pdf('Seller-pay-tran-pdf.html', data)

    # return render(request,"Seller-pay-tran-pdf.html",data)
    return HttpResponse(pdf, content_type='application/pdf')


#######################################################################################

def custprodreturnpdf(request):
    transaction = dataBase.PaymentTransaction.objects.get(id=31)
    d = date.today()

    prod = dataBase.Product.objects.get(
        id=transaction.product_return_product_return_id.order_details_product_product_id.id)
    amt_word = num2words(transaction.amount).title()

    data = {'transaction': transaction, 'date': d,
            'product': prod, 'amt_word': amt_word}
    pdf = render_to_pdf('Cust-prod-return-pdf.html', data)

    # return render(request,"Cust-prod-return-pdf.html",data)
    return HttpResponse(pdf, content_type='application/pdf')

######################################################################################


def transactionpdf(request):
    tran_list = dataBase.PaymentTransaction.objects.all().order_by('-transaction_date')
    d = date.today()

    data = {'date': d, 'transactions': tran_list}
    pdf = render_to_pdf('Transaction-pdf.html', data)

    if pdf:
        response = HttpResponse(pdf, content_type='application/pdf')
        filename = "Transaction-report.pdf"
        content = "inline; filename='%s'" % (filename)
        #download = request.GET.get("download")
        # if download:
        content = "attachment; filename=%s" % (filename)
        response['Content-Disposition'] = content
        return response
    return HttpResponse("Not found")
    # return render(request,"Transaction-pdf.html",data)
    # return HttpResponse(pdf, content_type='application/pdf')


def productreturnpdf(request):
    pr = dataBase.ProductReturn.objects.all().order_by('-product_return_date')

    d = date.today()
    data = {'date': d, 'prod_rtn': pr}
    pdf = render_to_pdf('Product-return-pdf.html', data)

    if pdf:
        response = HttpResponse(pdf, content_type='application/pdf')
        filename = "Product-return-report.pdf"
        content = "inline; filename='%s'" % (filename)
        #download = request.GET.get("download")
        # if download:
        content = "attachment; filename=%s" % (filename)
        response['Content-Disposition'] = content
        return response
    return HttpResponse("Not found")
    # return render(request,"Product-return-pdf.html",data)
    # return HttpResponse(pdf, content_type='application/pdf')


def salespdf(request):
    order_list = dataBase.Order.objects.all()
    ord_details = dataBase.OrderDetails.objects.all()

    d = date.today()

    total_prod = []
    try_buy_order = []
    city_name = []

    for order in order_list:
        total_ord_det = ord_details.filter(
            orderdetails_order_id=order.id).count()
        total_prod.append(total_ord_det)
        city = order.customer_customer_id.city_city_id.city_name
        city_name.append(city)

        try_buy_ord = ord_details.filter(
            orderdetails_order_id=order.id).first()
        try_buy_order.append(try_buy_ord.try_and_buy)

    data = {'date': d, 'orders': list(
        zip(order_list, total_prod, try_buy_order, city_name))}

    pdf = render_to_pdf('Sales-pdf.html', data)

    if pdf:
        response = HttpResponse(pdf, content_type='application/pdf')
        filename = "Sales-report.pdf"
        content = "inline; filename='%s'" % (filename)
        #download = request.GET.get("download")
        # if download:
        content = "attachment; filename=%s" % (filename)
        response['Content-Disposition'] = content
        return response
    return HttpResponse("Not found")
    # return render(request,"Sales-pdf.html",data)
    # return HttpResponse(pdf, content_type='application/pdf')


##########################################################################################

def customerbill(request):
    transaction = dataBase.PaymentTransaction.objects.get(id=30)  # 36
    d = date.today()
    ord_id = transaction.order_id
    ord_details = dataBase.OrderDetails.objects.filter(
        orderdetails_order_id=ord_id)

    total_prods = ord_details.count()

    seller = dataBase.Seller.objects.get(
        id=ord_details[0].product_product_id.seller_seller_id.id)

    amount_list = []
    offer_list = []
    for prod in ord_details:
        offer = dataBase.Offer.objects.get(
            product_product_id=prod.product_product_id.id)
        offer_list.append(offer.discount)
        net = (prod.product_price*prod.qty_ordered)*offer.discount/100
        net_amt = (prod.product_price*prod.qty_ordered)-net
        text_amount = net_amt*(5/100)
        if prod.fixed_charge:
            amount = net_amt + text_amount - prod.fixed_charge
        else:
            amount = net_amt + text_amount
        amount_list.append(amount)
    total_amt = sum(amount_list)

    amt_word = num2words(total_amt).title()

    data = {'date': d, 'transaction': transaction, 'products': list(zip(
        ord_details, offer_list, amount_list)), 'seller': seller, 'total_amt': total_amt, 'amt_word': amt_word, 'total_prods': total_prods}
    pdf = render_to_pdf('Customer-bill.html', data)

    # return render(request,"Customer-bill.html",data)
    return HttpResponse(pdf, content_type='application/pdf')


def sellerpayack(request, tranid):

    transaction = dataBase.PaymentTransaction.objects.get(id=tranid)
    seller = dataBase.Seller.objects.get(id=transaction.seller_seller_id.id)

    d = date.today()
    sub = 0
    if dataBase.sellersubscription.objects.filter(seller_id=seller).exists():
        seller_sub = dataBase.sellersubscription.objects.filter(
            seller_id=seller).last()
        if seller_sub.end_date >= d:
            sub = dataBase.Subscription.objects.get(
                id=seller_sub.subscription_id.id)

    amt_word = num2words(transaction.amount).title()
    if sub is None:
        data = {'date': d, 'transaction': transaction, 'amt_word': amt_word}
    else:
        data = {'date': d, 'transaction': transaction,
                'subscription': sub, 'amt_word': amt_word, 'seller_sub':seller_sub}

    pdf = render_to_pdf('seller-payment-ack.html', data)

    if pdf:
        response = HttpResponse(pdf, content_type='application/pdf')
        filename = "Seller_subscription_%s.pdf" % (tranid)
        content = "inline; filename='%s'" % (filename)
        #download = request.GET.get("download")
        # if download:
        content = "attachment; filename=%s" % (filename)
        response['Content-Disposition'] = content
        return response
    return HttpResponse("Not found")
    # return render(request,"seller-payment-ack.html",data)
    # return HttpResponse(pdf, content_type='application/pdf')


def fixchargeack(request):
    # print(str(settings.BASE_DIR)+"\myshop\static")
    transaction = dataBase.PaymentTransaction.objects.get(id=152)
    ord_id = transaction.order_id
    ord_details = dataBase.OrderDetails.objects.filter(
        orderdetails_order_id=ord_id)

    d = date.today()

    amt_word = num2words(transaction.amount).title()

    data = {'date': d, 'transaction': transaction,
            'products': ord_details, 'amt_word': amt_word}
    pdf = render_to_pdf('Fix-charge-ack.html', data)

    # return render(request,"Fix-charge-ack.html")
    return HttpResponse(pdf, content_type='application/pdf')


def spsalaryack(request, tid):
    transaction = dataBase.PaymentTransaction.objects.get(id=tid)
    sp = dataBase.Salesperson.objects.get(id=transaction.salesperson_salesperson_id.id)
    sp_att = dataBase.SalespersonAttendance.objects.filter(salesperson_salesperson_id=sp)

    month = transaction.transaction_date.month
    working_days = sp_att.filter(attendance_date__month=month).count()

    month = transaction.transaction_date.strftime("%B")
    d = date.today()
    amt_word = num2words(transaction.amount).title()
    data = {'date': d, 'transaction': transaction, 'working_days': working_days, 'amt_word': amt_word, 'month':month}

    pdf = render_to_pdf('salesperson-salary-ack.html', data)

    if pdf:
        response = HttpResponse(pdf, content_type='application/pdf')
        filename = "Salary_%s.pdf" % (tid)
        content = "inline; filename='%s'" % (filename)
        #download = request.GET.get("download")
        # if download:
        content = "attachment; filename=%s" % (filename)
        response['Content-Disposition'] = content
        return response
    return HttpResponse("Not found")
    # return render(request,"salesperson-salary-ack.html")
    # return HttpResponse(pdf, content_type='application/pdf')

##############################################################


def report(request):
    order_list = dataBase.Order.objects.all()
    ord_details = dataBase.OrderDetails.objects.all()

    total_prod = []
    try_buy_order = []
    city_name = []

    for order in order_list:
        total_ord_det = ord_details.filter(
            orderdetails_order_id=order.id).count()
        total_prod.append(total_ord_det)
        city = order.customer_customer_id.city_city_id.city_name
        city_name.append(city)

        try_buy_ord = ord_details.filter(
            orderdetails_order_id=order.id).first()
        try_buy_order.append(try_buy_ord.try_and_buy)

    orders = list(zip(order_list, try_buy_order, city_name, total_prod))

    data = {
        'orders': orders
    }
    pdf = render_to_pdf('report.html', data)
    if pdf:
        response = HttpResponse(pdf, content_type='application/pdf')
        filename = "report_.pdf"
        content = "inline; filename='%s'" % (filename)
        #download = request.GET.get("download")
        # if download:
        content = "attachment; filename=%s" % (filename)
        response['Content-Disposition'] = content
        return response
    return HttpResponse("Not found")
    # return HttpResponse(pdf, content_type='application/pdf')
    # return render(request,'report.html', data)


def render_to_pdf(template_src, context_dict={}):
    template = get_template(template_src)
    html = template.render(context_dict)
    result = BytesIO()
    pdf = pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None

##############################################################

def sphelp(request):
    u = request.user
    sp = dataBase.Salesperson.objects.get(user_user_id=u)
    return render(request,'Salesperson-help.html', {'salesperson':sp})

def sphcontactus(request):
    u = request.user
    sp = dataBase.Salesperson.objects.get(user_user_id=u)
    return render(request,'Salesperson-contact-us.html', {'salesperson':sp})


###############################################################################


def assignduty(request, spid):
    sp = dataBase.Salesperson.objects.get(id=spid)
    order_list = dataBase.Order.objects.filter(
        order_status="pending").order_by('-id')
    ord_list = []
    for ord in order_list:
        if dataBase.Delivery.objects.filter(order_order_id=ord, salesperson_salesperson_id__isnull=True).exists():
            ord_list.append(ord)

    # page = request.GET.get('page', 1)

    # paginator = Paginator(ord_list, 5)
    # try:
    #     orders = paginator.page(page)
    # except PageNotAnInteger:
    #     orders = paginator.page(1)
    # except EmptyPage:
    #     orders = paginator.page(paginator.num_pages)

    if request.method == "POST":
        try:
            orders_list = request.POST.get('orders')
            ords = json.loads(orders_list)
            for o in ords:
                ord = dataBase.Order.objects.get(id=o)
                d = dataBase.Delivery.objects.filter(
                    order_order_id=ord).first()
                d.salesperson_salesperson_id = sp
                d.save()
            return render(request, 'Admin-Assign-Duty.html', {'msg': "Duty assigned successfully", 'orders': ord_list, 'sp': sp})
        except Exception as e:
            return render(request, 'Admin-Assign-Duty.html', {'msg': str(e), 'orders': ord_list, 'sp': sp})

    return render(request, 'Admin-Assign-Duty.html', {'orders': ord_list, 'sp': sp})

#############################################################


@login_required(login_url="salespersonlogin")
def salespersontodaydel(request):
    u = request.user
    sp = dataBase.Salesperson.objects.get(user_user_id=u)

    return render(request, 'Salesperson-upcoming-delivery.html', {'salesperson': sp})

#################################################################


@login_required(login_url="salespersonlogin")
def salespersonsalary(request):
    delivery = dataBase.Delivery.objects.all()
    pt = dataBase.PaymentTransaction.objects.all()
    attendance = dataBase.SalespersonAttendance.objects.all()

    u = request.user
    sp = dataBase.Salesperson.objects.get(user_user_id=u)

    sp_att = attendance.filter(salesperson_salesperson_id=sp)
    sp_pt = pt.filter(salesperson_salesperson_id=sp).order_by(
        'transaction_date')

    month_list = []
    year_list = []
    work_day = []
    absent_day = []
    # count each month from sp_att
    for pay_date in sp_pt:
        month = pay_date.transaction_date.month
        year = pay_date.transaction_date.year
        year_list.append(year)
        month_list.append(month)

    # count work days monthwise
    for month,year in zip(month_list,year_list):
        days = sp_att.filter(attendance_date__month=month).count()
        num_days = monthrange(year, month)[1]
        work_day.append(days)
        absent_day.append(num_days-days)

    page = request.GET.get('page', 1)

    paginator = Paginator(list(zip(sp_pt, work_day, absent_day)), 5)
    try:
        salary = paginator.page(page)
    except PageNotAnInteger:
        salary = paginator.page(1)
    except EmptyPage:
        salary = paginator.page(paginator.num_pages)

    return render(request, 'Salesperson-salary.html', {'salary': salary, 'salesperson': sp})

##############################################################


@login_required(login_url="salespersonlogin")
def salespersondelivery(request):
    delivery_list = dataBase.Delivery.objects.all()
    pay_trans = dataBase.PaymentTransaction.objects.all()
    Ord_dels = dataBase.OrderDetails.objects.all()

    u = request.user
    sp = dataBase.Salesperson.objects.get(user_user_id=u)

    sp_dels = delivery_list.filter(salesperson_salesperson_id=sp)
    total_del = sp_dels.count()

    del_charges = []
    pay_method = []
    try_buy_del = 0
    norm_del = 0
    for sp_del in sp_dels:
        pay_tran = pay_trans.filter(order_id=sp_del.order_order_id.id)
        del_chrg = Ord_dels.filter(
            orderdetails_order_id=sp_del.order_order_id.id).first()
        del_charges.append(del_chrg.delivery_charges)
        try_buy_prod = Ord_dels.filter(
            orderdetails_order_id=sp_del.order_order_id.id)

        for prod in try_buy_prod:
            if prod.try_and_buy:
                try_buy_del += 1
                break
            else:
                norm_del += 1
                break

        if not pay_tran:
            pay_method.append("-")
        else:
            for i in pay_tran:
                pay_method.append(
                    i.payment_method_payment_method_id.payment_method_name)

    repl_del = sp_dels.filter(
        product_replace_product_replace_id__isnull=False).count()

    comp_dels = 0
    pend_dels = 0
    fail_dels = 0

    for sp_del in sp_dels:
        if sp_del.order_order_id.order_status == "cancelled":
            fail_dels = fail_dels+1
        elif sp_del.order_order_id.order_status == "completed":
            comp_dels = comp_dels+1
        else:
            pend_dels = pend_dels+1

    page = request.GET.get('page', 1)

    paginator = Paginator(list(zip(sp_dels, del_charges, pay_method)), 5)
    try:
        delivery = paginator.page(page)
    except PageNotAnInteger:
        delivery = paginator.page(1)
    except EmptyPage:
        delivery = paginator.page(paginator.num_pages)

    return render(request, 'Salesperson-delivery.html', {'deliveries': delivery, 'salesperson': sp, 'total_del': total_del, 'comp_del': comp_dels, 'pend_del': pend_dels, 'fail_del': fail_dels, 'try_buy_del': try_buy_del, 'norm_del': norm_del, 'repl_del': repl_del})

##############################################################


@login_required(login_url="salespersonlogin")
def salespersonprofile(request):
    u = request.user
    sp = dataBase.Salesperson.objects.get(user_user_id=u)

    if request.method == "POST":

        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        email = request.POST.get('email')
        address = request.POST.get('addr')
        city = request.POST.get('city').strip()
        mob = request.POST.get('mob')
        print(pro_img)
        try:
            if len(request.FILES) != 0:
                pro_img = request.FILES['proimg']
                sp.profile_image = pro_img
            sp.salesperson_address = address
            sp.salesperson_mobile_num = mob

            cid = dataBase.City.objects.get(city_name=city)
            print(cid)
            sp.city_city_id = cid
            sp.save()

            u.first_name = fname
            u.last_name = lname
            u.email = email
            u.save()

            return redirect('salespersondashboard')
        except Exception as e:
            return render(request, 'Salesperson-profile-modify.html', {'user': u, 'salesperson': sp, 'msg': str(e)})

    return render(request, 'Salesperson-profile-modify.html', {'user': u, 'salesperson': sp})

######################################################################


@login_required(login_url="salespersonlogin")
def salespersonchngpass(request):
    u = request.user
    sp = dataBase.Salesperson.objects.get(user_user_id=u)
    if request.method == "POST":
        passw = request.POST.get("pass")

        try:
            user = request.user
        # user = User.objects.get(username=u)
            user.set_password(passw)
            user.save()
        except Exception as e:
            print(e)

        return render(request, 'Salesperson-Dashboard.html', {'msg': "succesfully changed your password", 'salesperson': sp})

    else:
        return render(request, 'Salesperson-change-pass.html', {'salesperson': sp})


#####################################################################

def salespersonlogout(request):
    try:
        logout(request)
    except KeyError:
        pass
    return redirect('salespersonlogin')

################################################################


def salespersonlogin(request):
    return render(request, 'Salesperson-login.html')

####################################################################


def salespersonpostlogin(request):
    email = request.POST.get('email')
    passw = request.POST.get('password')

    try:
        u = User.objects.get(email=email)
        uname = u.username
        authUser = authenticate(username=uname, password=passw)
        sp = dataBase.Salesperson.objects.get(user_user_id=u)
        print(authUser)
        if authUser != None and sp != None and u.is_active:
            login(request, u)

        else:
            message = "wrong email and password"
            return render(request, 'Salesperson-login.html', {'msg': message})

    except Exception as e:
        message = "wrong email and password "+str(e)
        return render(request, 'Salesperson-login.html', {'msg': message})

    return redirect('salespersondashboard')

##################################################################


@login_required(login_url="salespersonlogin")
def salespersondashboard(request):
    u = request.user
    sp = dataBase.Salesperson.objects.get(user_user_id=u)
    return render(request, 'Salesperson-Dashboard.html', {'salesperson': sp})

##############################################################


@login_required(login_url="adminlogin")
def adminpaysalarysp(request):
    salesperson = dataBase.Salesperson.objects.all()
    sp_atts = dataBase.SalespersonAttendance.objects.all()
    transaction = dataBase.PaymentTransaction.objects.all()

    year = datetime.now().year
    month = datetime.now().month
    num_days = monthrange(year, month)[1]
    sp_list = []
    for sp in salesperson:
        if transaction.filter(salesperson_salesperson_id=sp).exists():
            trans = transaction.filter(salesperson_salesperson_id=sp).last()
            if trans.transaction_date.month != month:
                sp_list.append(sp)
        else:
            sp_list.append(sp)

    absent_days_list = []
    working_days_list = []
    salary = []
    for sp in sp_list:
        sp_att = sp_atts.filter(salesperson_salesperson_id=sp)
        working_days = sp_att.filter(attendance_date__month=month).count()
        working_days_list.append(working_days)
        absent_days_list.append(num_days-working_days)
        salary.append(working_days*500)

    page = request.GET.get('page', 1)

    paginator = Paginator(
        list(zip(sp_list, working_days_list, absent_days_list, salary)), 10)
    try:
        sp = paginator.page(page)
    except PageNotAnInteger:
        sp = paginator.page(1)
    except EmptyPage:
        sp = paginator.page(paginator.num_pages)

    return render(request, 'Admin-paysalary-sp.html', {'salesperson': sp})


def postspsalarypay(request, spid):
    try:
        salesperson = dataBase.Salesperson.objects.get(id=spid)
        sp_atts = dataBase.SalespersonAttendance.objects.filter(
            salesperson_salesperson_id=salesperson)

        month = datetime.now().month
        working_days = sp_atts.filter(attendance_date__month=month).count()
        salary = working_days*500

        trans = dataBase.PaymentTransaction()
        trans.transaction_date = date.today()
        trans.amount = salary
        trans.credit_debit = 0

        cid = dataBase.Company.objects.get(id=1)
        trans.company_company_id = cid

        pay_method_id = dataBase.PaymentMethod.objects.get(id=5)
        trans.payment_method_payment_method_id = pay_method_id

        pay_int_id = dataBase.PaymentIntention.objects.get(id=1)
        trans.payment_intention_payment_intention_id = pay_int_id

        trans.salesperson_salesperson_id = salesperson
        trans.save()

        return redirect('spsalaryack', tid=trans.id)

        salesperson = dataBase.Salesperson.objects.all()
        sp_atts = dataBase.SalespersonAttendance.objects.all()
        transaction = dataBase.PaymentTransaction.objects.all()

        year = datetime.now().year
        month = datetime.now().month
        num_days = monthrange(year, month)[1]
        sp_list = []
        for sp in salesperson:
            if transaction.filter(salesperson_salesperson_id=sp).exists():
                trans = transaction.filter(
                    salesperson_salesperson_id=sp).last()
                if trans.transaction_date.month != month:
                    sp_list.append(sp)
            else:
                sp_list.append(sp)

        absent_days_list = []
        working_days_list = []
        salary = []
        for sp in sp_list:
            sp_att = sp_atts.filter(salesperson_salesperson_id=sp)
            working_days = sp_att.filter(attendance_date__month=month).count()
            working_days_list.append(working_days)
            absent_days_list.append(num_days-working_days)
            salary.append(working_days*500)

        page = request.GET.get('page', 1)

        paginator = Paginator(
            list(zip(sp_list, working_days_list, absent_days_list, salary)), 10)
        try:
            sp = paginator.page(page)
        except PageNotAnInteger:
            sp = paginator.page(1)
        except EmptyPage:
            sp = paginator.page(paginator.num_pages)

        return render(request, 'Admin-paysalary-sp.html', {'salesperson': sp, 'msg': "Successfully Paid Salary"})

    except Exception as e:
        return render(request, 'Admin-paysalary-sp.html', {'msg': str(e)})


##############################################################

@login_required(login_url="adminlogin")
def addnewsalesperson(request):
    last_id = User.objects.last().id
    last_id = last_id + 1

    params = {'last_id': last_id}
    return render(request, 'Add-new-salesperson.html', params)


def postaddnewsalesperson(request):
    try:
        uname = request.POST.get('username')
        date = request.POST.get('date')
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        email = request.POST.get('email')
        passw = request.POST.get('pass')

        user = User.objects.create_user(uname, email, passw)
        user.first_name = fname
        user.last_name = lname
        user.date_joined = date
        user.save()

        sp = dataBase.Salesperson()
        sp.pan = request.POST.get('pan')
        sp.salesperson_address = request.POST.get('address')
        sp.salesperson_mobile_num = request.POST.get('mob')
        sp.security_amt_paid = request.POST.get('secamt')
        sp.account_number = request.POST.get('accno')
        sp.account_name = request.POST.get('accname')
        sp.account_ifsc_code = request.POST.get('ifsc')
        sp.profile_image = request.FILES['proimg']
        sp.cancelled_cheque_image = request.FILES['cancel']
        sp.salary = request.POST.get('salary')
        sp.is_verified = 1
        sp.user_user_id = user
        city = request.POST.get('city').strip()
        city_id = dataBase.City.objects.get(city_name=city)
        sp.city_city_id = city_id

        cid = dataBase.Company.objects.all()
        sp.company_company_id = cid[0]

        sp.save()

        last_id = User.objects.last().id
        last_id = last_id + 1

        params = {'msg': 'New salesperson created successfully.',
                  'last_id': last_id}
        return render(request, 'Add-new-salesperson.html', params)
    except Exception as e:
        last_id = User.objects.last().id
        last_id = last_id + 1
        params = {'msg': str(e), 'last_id': last_id}
        return render(request, 'Add-new-salesperson.html', params)

######################################################


@login_required(login_url="adminlogin")
def adminchangepass(request):
    if request.method == "POST":
        passw = request.POST.get("pass")
        currpass = request.POST.get("changepass")
        try:
            user = request.user

            if user.check_password(currpass):
                user.set_password(passw)
                user.save()
                login(request, user)

                users = User.objects.all()
                count = users.count()
                sellers = dataBase.Seller.objects.all()
                order = dataBase.Order.objects.count()
                transaction = dataBase.PaymentTransaction.objects.all()
                customer = dataBase.Customer.objects.all()
                salesperson = dataBase.Salesperson.objects.all()
                tot_sp = salesperson.count()

                cred_amt = transaction.filter(credit_debit=1).aggregate(Sum('amount'))
                debt_amt = transaction.filter(credit_debit=0).aggregate(Sum('amount'))
                total_profit = cred_amt['amount__sum'] - debt_amt['amount__sum']
                if total_profit < 0:
                    total_profit = 0

                tot_cus = customer.count()

                today = date.today()
                today_user = users.filter(date_joined__date=today)

                today_cus = 0
                for user in today_user:
                    if customer.filter(user_user_id=user.id):
                        today_cus += 1
                    else:
                        pass

                tot_seller = sellers.count()
                sub = sellers.filter(seller_subscription=1).count()
                unsub = sellers.filter(seller_subscription=0,).count()

                month = datetime.now().month
                sal_att = dataBase.SalespersonAttendance.objects.all()
                delivery = dataBase.Delivery.objects.all()

                total_del = delivery.count()
                present_sp = sal_att.filter(attendance_date=today).count()

                return render(request, 'Admin-panel.html', {'msg': "succesfully changed your password !!!", 'count': count, 'order': order, 'total_profit': total_profit, 'tot_cus': tot_cus, 'today_cus': today_cus, 'tot_seller': tot_seller, 'sub': sub, 'unsub': unsub, 'tot_sp': tot_sp, 'total_del': total_del, 'present_sp': present_sp})
            else:
                return render(request, 'Admin-change-pass.html', {'msg': "Incorrect Current Password"})

        except Exception as e:
            return render(request, 'Admin-change-pass.html', {'msg': e})

    else:
        return render(request, 'Admin-change-pass.html')


####################################################

@login_required(login_url="adminlogin")
def salesreport(request):
    order_list = dataBase.Order.objects.all()
    ord_details = dataBase.OrderDetails.objects.all()

    total_prod = []
    try_buy_order = []
    city_name = []

    for order in order_list:
        total_ord_det = ord_details.filter(
            orderdetails_order_id=order.id).count()
        total_prod.append(total_ord_det)
        city = order.customer_customer_id.city_city_id.city_name
        city_name.append(city)
        print("order", order)
        try_buy_ord = ord_details.filter(
            orderdetails_order_id=order.id).first()
        print("try_buy_ord ", try_buy_ord)
        try_buy_order.append(try_buy_ord.try_and_buy)

    # All orders
    page = request.GET.get('page', 1)

    paginator = Paginator(
        list(zip(order_list, try_buy_order, city_name, total_prod)), 5)
    try:
        orders = paginator.page(page)
    except PageNotAnInteger:
        orders = paginator.page(1)
    except EmptyPage:
        orders = paginator.page(paginator.num_pages)

    return render(request, 'Sales-report.html', {'orders': orders})


####################################################

@login_required(login_url="adminlogin")
def transactionreport(request):
    tran_list = dataBase.PaymentTransaction.objects.all()

    page = request.GET.get('page', 1)
    paginator = Paginator(tran_list, 5)
    try:
        pt = paginator.page(page)
    except PageNotAnInteger:
        pt = paginator.page(1)
    except EmptyPage:
        pt = paginator.page(paginator.num_pages)

    return render(request, 'Transaction-report.html', {'transactions': pt})

####################################################


@login_required(login_url="adminlogin")
def productreturnreport(request):
    prod_rtn = dataBase.ProductReturn.objects.all()

    page = request.GET.get('page', 1)
    paginator = Paginator(prod_rtn, 5)
    try:
        pr = paginator.page(page)
    except PageNotAnInteger:
        pr = paginator.page(1)
    except EmptyPage:
        pr = paginator.page(paginator.num_pages)

    return render(request, 'Product-return-report.html', {'prod_rtn': pr})

####################################################


@login_required(login_url="adminlogin")
def manageproduct(request):
    prod_list = dataBase.Product.objects.all().order_by('-id')
    p_img = dataBase.ProductImage.objects.all()

    try:
        prod_img_list = []
        for p in prod_list:
            prod_img = p_img.filter(product_product_id=p).first()
            prod_img_list.append(prod_img)
    except Exception as e:
        print(e)

    tot_prod = prod_list.count()

    tot_active = prod_list.filter(status=1).count()
    tot_inactive = prod_list.filter(status=0).count()
    tot_block = prod_list.filter(status=2).count()
    tot_unblock = prod_list.filter(status=3).count()

    page = request.GET.get('page', 1)

    paginator = Paginator(list(zip(prod_list, prod_img_list)), 5)
    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    return render(request, 'Admin-Manage-Product.html', {'products': products, 'tot_prod': tot_prod, 'tot_active': tot_active, 'tot_inactive': tot_inactive, 'tot_block': tot_block, 'tot_unblock': tot_unblock})

####################################################


def spforgetPassword(request, by, stat):
    if stat == 'sent':
        email = request.POST.get('email')
        print(email)
        print(by)
        if by == 'salesperson':
            try:

                user = User.objects.get(email=email)
                print(user)
                sp = dataBase.Salesperson.objects.get(user_user_id=user)
                print(sp)

                print('-------------------------')
                if sp is not None:
                    print('--------non')
                    otp = random.randrange(100000, 999999)
                    sp.otp = otp
                    sp.save()
                    subject = 'Conformation '
                    message = f'Your OTP To Reset Password is {otp}'
                    email_from = settings.EMAIL_HOST_USER
                    recipient_list = [user.email, ]
                    send_mail(subject, message, email_from, recipient_list)

            except Exception as e:

                return render(request, "sp-ForgotPass.html", {'by': by, 'msg': "The User Does Not Exists "+str(e)})

            return render(request, "sp-OTP.html", {'by': by, 'user': email})

        elif by == 'admin':
            try:

                user = User.objects.get(email=email)
                print(user)
                admin = dataBase.Admin.objects.get(user_user_id=user)
                print(admin)

                print('-------------------------')
                if admin is not None:
                    print('--------non')
                    otp = random.randrange(100000, 999999)
                    print(otp)
                    admin.otp = otp
                    admin.save()
                    subject = 'Conformation '
                    message = f'Your OTP To Reset Password is {otp}'
                    email_from = settings.EMAIL_HOST_USER
                    recipient_list = [user.email, ]
                    print('-----11------')
                    send_mail(subject, message, email_from, recipient_list)
                    print('--------12----------')

            except Exception as e:

                return render(request, "Admin-forgot-pass.html", {'by': by, 'msg': "The User Does Not Exists "})

            return render(request, "Admin-OTP.html", {'by': by, 'user': email})
        print(by)

    elif stat == 'verify':
        otp = request.POST.get('otp')
        email = request.POST.get('user')
        usermail = User.objects.get(email=email)
        if by == 'salesperson':
            sp = dataBase.Salesperson.objects.get(user_user_id=usermail)
            print(otp)
            print(sp)
            print(sp.otp)
            if otp == str(sp.otp):
                print('----------------')
                return render(request, "sp-Changepass.html", {'by': by, 'user': email})
            else:
                return render(request, "sp-OTP.html", {'by': by, 'user': email, 'msg': "Please enter the correct otp"})
        elif by == 'admin':
            admin = dataBase.Admin.objects.get(user_user_id=usermail)
            print(otp)
            print(admin)
            print(admin.otp)
            if otp == str(admin.otp):
                print('----------------')
                return render(request, "Admin-change-forgot-pass.html", {'by': by, 'user': email})
            else:
                return render(request, "Admin-OTP.html", {'by': by, 'user': email, 'msg': "Please enter the correct otp"})

    elif stat == 'change':
        passw = request.POST.get('pass')
        email = request.POST.get('email')
        print("------###------", email, passw)
        if by == 'salesperson':
            user = User.objects.get(email=email)
            user.set_password(passw)
            user.save()
            return redirect('salespersonlogin')

        elif by == "admin":
            user = User.objects.get(email=email)
            user.set_password(passw)
            user.save()
            return redirect('adminlogin')

    elif stat == 'toSend':
        if by == "admin":
            return render(request, "Admin-forgot-pass.html", {'by': by})
        elif by == "salesperson":
            return render(request, "sp-ForgotPass.html", {'by': by})
    # return render(request,'ForgotPass.html')


###################################################

@login_required(login_url="adminlogin")
def managecustomer(request):
    cust_list = dataBase.Customer.objects.all().order_by('-id')
    users = User.objects.all()
    order = dataBase.Order.objects.all()

    total_cust = cust_list.count()
    today = date.today()
    today_user = users.filter(date_joined__date=today)

    today_cus = 0
    for user in today_user:
        if cust_list.filter(user_user_id=user.id):
            today_cus += 1
        else:
            pass

    tot_order = []
    # total orders
    for cus in cust_list:
        orders = order.filter(customer_customer_id=cus.id).count()
        tot_order.append(orders)

    page = request.GET.get('page', 1)

    paginator = Paginator(list(zip(cust_list, tot_order)), 5)
    try:
        customers = paginator.page(page)
    except PageNotAnInteger:
        customers = paginator.page(1)
    except EmptyPage:
        customers = paginator.page(paginator.num_pages)

    return render(request, 'Customer-table.html', {'customers': customers, 'total_cust': total_cust, 'today_cus': today_cus})

###################################################


@login_required(login_url="adminlogin")
def manageseller(request):
    seller_list = dataBase.Seller.objects.all().order_by('-id')
    payment = dataBase.PaymentTransaction.objects.all()
    amount = []
    commision = []
    total_orders = []
    orders = 0

    total_Seller = seller_list.count()

    sub = seller_list.filter(seller_subscription=1).count()
    unsub = seller_list.filter(seller_subscription=0).count()
    due_date = []
    d = date.today()

    for seller in seller_list:
        amt = payment.filter(seller_seller_id=seller.id,
                             payment_intention_payment_intention_id=2).aggregate(Sum('amount'))
        comm = payment.filter(seller_seller_id=seller.id,
                              payment_intention_payment_intention_id=6).aggregate(Sum('amount'))

        prods = dataBase.Product.objects.filter(seller_seller_id=seller.id)
        orders = 0
        for prod in prods:
            count_orders = dataBase.OrderDetails.objects.filter(
                product_product_id=prod.id).count()
            orders = orders + count_orders
        total_orders.append(orders)

        amount.append(amt)
        commision.append(comm)

    page = request.GET.get('page', 1)

    paginator = Paginator(
        list(zip(seller_list, amount, total_orders, commision)), 5)
    try:
        sellers = paginator.page(page)
    except PageNotAnInteger:
        sellers = paginator.page(1)
    except EmptyPage:
        sellers = paginator.page(paginator.num_pages)

    param = {'sellers': sellers, 'total_Seller': total_Seller,
             'sub': sub, 'unsub': unsub}

    # if request.method == "POST":
    #     date1 = request.POST.get('d1')
    #     date2 = request.POST.get('d2')

    #     users = User.objects.filter(date_joined__range=(date1,date2))
    #     # print(users)
    #     seller_list = []
    #     for user in users:
    #         s1 = dataBase.Seller.objects.filter(user_user_id=user.id)
    #         seller_list.append(s1)
    #     print(seller_list)
    #     param = {'sellers':seller_list,'amount':amount,'total_orders':total_orders,'commision':commision,'sub':sub,'unsub':unsub}
    #     return render(request,'Seller-table.html', param)

    return render(request, 'Seller-table.html', param)

###################################################


def sortbydate(request):
    date1 = request.POST.get('d1')
    date2 = request.POST.get('d2')

    users = User.objects.filter(date_joined__range=(date1, date2))
    # print(users)
    seller_list = []
    for user in users:
        s1 = dataBase.Seller.objects.filter(user_user_id=user.id)
        seller_list.append(s1)
    print(seller_list)
    return render(request, 'Seller-table.html', {'result': seller_list})

####################################################


def removeseller(request, uid):
    user = dataBase.User.objects.get(id=uid)
    user.delete()

    seller_list = dataBase.Seller.objects.all().order_by('-id')
    payment = dataBase.PaymentTransaction.objects.all()
    amount = []
    commision = []
    total_orders = []
    orders = 0

    total_Seller = seller_list.count()

    sub = seller_list.filter(seller_subscription=1).count()
    unsub = seller_list.filter(seller_subscription=0).count()

    for seller in seller_list:
        amt = payment.filter(seller_seller_id=seller.id,
                             payment_intention_payment_intention_id=2).aggregate(Sum('amount'))
        comm = payment.filter(seller_seller_id=seller.id,
                              payment_intention_payment_intention_id=6).aggregate(Sum('amount'))

        prods = dataBase.Product.objects.filter(seller_seller_id=seller.id)
        orders = 0
        for prod in prods:
            count_orders = dataBase.OrderDetails.objects.filter(
                product_product_id=prod.id).count()
            orders = orders + count_orders
        total_orders.append(orders)

        amount.append(amt)
        commision.append(comm)

    page = request.GET.get('page', 1)

    paginator = Paginator(
        list(zip(seller_list, amount, total_orders, commision)), 5)
    try:
        sellers = paginator.page(page)
    except PageNotAnInteger:
        sellers = paginator.page(1)
    except EmptyPage:
        sellers = paginator.page(paginator.num_pages)

    param = {'msg': 'Seller remove successfully', 'sellers': sellers,
             'total_Seller': total_Seller, 'sub': sub, 'unsub': unsub}
    return render(request, 'Seller-table.html', param)


def removecustomer(request, uid):
    user = User.objects.get(id=uid)
    user.delete()

    cust_list = dataBase.Customer.objects.all().order_by('-id')
    users = User.objects.all()
    order = dataBase.Order.objects.all()

    total_cust = cust_list.count()

    today = date.today()
    today_user = users.filter(date_joined__date=today)

    today_cus = 0
    for user in today_user:
        if cust_list.filter(user_user_id=user.id):
            today_cus += 1
        else:
            pass

    tot_order = []
    # total orders
    for cus in cust_list:
        orders = order.filter(customer_customer_id=cus.id).count()
        tot_order.append(orders)

    page = request.GET.get('page', 1)

    paginator = Paginator(list(zip(cust_list, tot_order)), 5)
    try:
        customers = paginator.page(page)
    except PageNotAnInteger:
        customers = paginator.page(1)
    except EmptyPage:
        customers = paginator.page(paginator.num_pages)

    return render(request, 'Customer-table.html', {'msg': 'Customer remove successfully', 'customers': customers, 'total_cust': total_cust, 'today_cus': today_cus})


def removesalesperson(request, uid):
    user = User.objects.get(id=uid)
    user.delete()

    salesperson_list = dataBase.Salesperson.objects.all().order_by('-id')
    month = datetime.now().month
    sal_att = dataBase.SalespersonAttendance.objects.all()
    delivery = dataBase.Delivery.objects.all()
    Ord_dels = dataBase.OrderDetails.objects.all()

    total_salesperson = salesperson_list.count()

    att_sp = []
    total_del = []
    for sp in salesperson_list:
        total_sp = sal_att.filter(attendance_date__month=month, salesperson_salesperson_id=sp.id).count()
        deliveries = delivery.filter(salesperson_salesperson_id=sp.id).count()

    today = date.today()
    present_sp = sal_att.filter(attendance_date=today)

    assign_sp = []
    notassign_sp = []
    sp_total_duty = {}
    sp_del_list = {}

    for sp in salesperson_list:
        sp_count_duty = delivery.filter(salesperson_salesperson_id=sp).count()
        sp_dels = delivery.filter(salesperson_salesperson_id=sp)

        count = 0
        for d in sp_dels:
            if d.order_order_id.order_status == "completed":
                count += 1

        sp_del_list[sp.id] = count
        sp_total_duty[sp.id] = sp_count_duty

    for k, k2 in zip(sp_total_duty, sp_del_list):
        if sp_total_duty[k]-sp_del_list[k2] == 0:
            notassign_sp.append(k)
        else:
            assign_sp.append(k)

    assign_duty_list = []
    for assign in assign_sp:
        sp_assign_duty = salesperson_list.get(id=assign)
        assign_duty_list.append(sp_assign_duty)

    try_buy_del, norm_del = 0, 0
    total_try, total_norm = 0, 0
    try_buy_ord = []
    norm_ord = []
    total_assign_duty = []
    for sp in assign_duty_list:
        sp_count_duty = delivery.filter(salesperson_salesperson_id=sp).count()
        sp_dels = delivery.filter(salesperson_salesperson_id=sp)
        total_assign_duty.append(sp_count_duty)
        total_try, total_norm = 0, 0

        for d in sp_dels:
            try_buy_prod = Ord_dels.filter(orderdetails_order_id=d.order_order_id.id)
            try_buy_del, norm_del = 0, 0

            for prod in try_buy_prod:

                if prod.try_and_buy:
                    try_buy_del = 1
                    break
                else:
                    norm_del = 1
                    break

            if try_buy_del == 1:
                total_try += 1
            else:
                total_norm += 1

        try_buy_ord.append(total_try)
        norm_ord.append(total_norm)

    # All sp
    page = request.GET.get('page', 1)
    paginator = Paginator(salesperson_list, 5)

    try:
        salespersons = paginator.page(page)
    except PageNotAnInteger:
        salespersons = paginator.page(1)
    except EmptyPage:
        salespersons = paginator.page(paginator.num_pages)

    page = request.GET.get('page', 1)
    paginator = Paginator(list(zip(assign_duty_list, total_assign_duty, try_buy_ord, norm_ord)), 5)

    try:
        assign_duty_sp = paginator.page(page)
    except PageNotAnInteger:
        assign_duty_sp = paginator.page(1)
    except EmptyPage:
        assign_duty_sp = paginator.page(paginator.num_pages)

    notassign_duty_list = []
    for notassign in notassign_sp:
        sp_assign_duty = salesperson_list.get(id=notassign)
        notassign_duty_list.append(sp_assign_duty)

    for sp in notassign_duty_list:
        sp_count_duty = delivery.filter(salesperson_salesperson_id=sp).count()
        sp_dels = delivery.filter(salesperson_salesperson_id=sp)
        total_assign_duty.append(sp_count_duty)
        total_try, total_norm = 0, 0

        for d in sp_dels:
            try_buy_prod = Ord_dels.filter(
                orderdetails_order_id=d.order_order_id.id)
            try_buy_del, norm_del = 0, 0

            for prod in try_buy_prod:

                if prod.try_and_buy:
                    try_buy_del = 1
                    break
                else:
                    norm_del = 1
                    break

            if try_buy_del == 1:
                total_try += 1
            else:
                total_norm += 1

        try_buy_ord.append(total_try)
        norm_ord.append(total_norm)

    page = request.GET.get('page', 1)

    paginator = Paginator(list(zip(notassign_duty_list, total_assign_duty, try_buy_ord, norm_ord)), 5)

    try:
        notassign_duty_sp = paginator.page(page)
    except PageNotAnInteger:
        notassign_duty_sp = paginator.page(1)
    except EmptyPage:
        notassign_duty_sp = paginator.page(paginator.num_pages)

    return render(request, 'Salesperson-table.html', {'msg':'Remove Salesperson Successfully','salespersons': salespersons, 'assign_duty_sp': assign_duty_sp, 'notassign_duty_sp': notassign_duty_sp, 'total_assign_sp': len(assign_duty_list), 'total_notassign_sp': len(notassign_duty_list), 'total_salesperson': total_salesperson, 'del': delivery, 'present_sal': present_sp})

def removeoffer(request, oid):
    offer = dataBase.Offer.objects.get(id=oid)
    offer.delete()

    offer_list = dataBase.Offer.objects.all().order_by('-id')
    prod_list = dataBase.Product.objects.all()

    today = date.today()
    today_offer = offer_list.filter(start_date=today).count()

    total_prod = []
    for prod in prod_list:
        prod_offer = offer_list.filter(product_product_id=prod.id).first()
        total_prod.append(prod_offer)

    page = request.GET.get('page', 1)

    paginator = Paginator(offer_list, 5)
    try:
        offers = paginator.page(page)
    except PageNotAnInteger:
        offers = paginator.page(1)
    except EmptyPage:
        offers = paginator.page(paginator.num_pages)

    return render(request, 'Manage-Offer-table.html', {'msg': 'Offer remove successfully', 'offers': offers, 'total_prod': len(total_prod), 'today_offers': today_offer})


def removeproduct(request, pid):
    prod = dataBase.Product.objects.get(id=pid)
    prod.delete()

    prod_list = dataBase.Product.objects.all().order_by('-id')
    p_img = dataBase.ProductImage.objects.all()

    try:
        prod_img_list = []
        for p in prod_list:
            prod_img = p_img.filter(product_product_id=p).first()
            prod_img_list.append(prod_img)
    except Exception as e:
        print(e)

    tot_prod = prod_list.count()

    tot_active = prod_list.filter(status=1).count()
    tot_inactive = prod_list.filter(status=0).count()
    tot_block = prod_list.filter(status=2).count()
    tot_unblock = prod_list.filter(status=3).count()

    page = request.GET.get('page', 1)

    paginator = Paginator(list(zip(prod_list, prod_img_list)), 5)
    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    return render(request, 'Admin-Manage-Product.html', {'msg': 'Product remove successfully', 'products': products, 'tot_prod': tot_prod, 'tot_active': tot_active, 'tot_inactive': tot_inactive, 'tot_block': tot_block, 'tot_unblock': tot_unblock})

###################################################


@login_required(login_url="adminlogin")
def managesalesperson(request):
    salesperson_list = dataBase.Salesperson.objects.all().order_by('-id')
    month = datetime.now().month
    sal_att = dataBase.SalespersonAttendance.objects.all()
    delivery = dataBase.Delivery.objects.all()
    Ord_dels = dataBase.OrderDetails.objects.all()

    total_salesperson = salesperson_list.count()

    # att_sp = []
    # total_del = []
    # for sp in salesperson_list:
    #     total_sp = sal_att.filter(attendance_date__month=month, salesperson_salesperson_id=sp.id).count()
    #     deliveries = delivery.filter(salesperson_salesperson_id=sp.id).count()

    today = date.today()
    present_sp = sal_att.filter(attendance_date=today)

    assign_sp = []
    notassign_sp = []
    sp_total_duty = {}
    sp_del_list = {}

    for sp in salesperson_list:
        sp_count_duty = delivery.filter(salesperson_salesperson_id=sp).count()
        sp_dels = delivery.filter(salesperson_salesperson_id=sp)

        count = 0
        for d in sp_dels:
            if d.order_order_id.order_status == "completed":
                count += 1

        sp_del_list[sp.id] = count
        sp_total_duty[sp.id] = sp_count_duty

    for k, k2 in zip(sp_total_duty, sp_del_list):
        if sp_total_duty[k]-sp_del_list[k2] == 0:
            notassign_sp.append(k)
        else:
            assign_sp.append(k)

    assign_duty_list = []
    for assign in assign_sp:
        sp_assign_duty = salesperson_list.get(id=assign)
        assign_duty_list.append(sp_assign_duty)

    try_buy_del, norm_del = 0, 0
    total_try, total_norm = 0, 0
    try_buy_ord = []
    norm_ord = []
    total_assign_duty = []
    for sp in assign_duty_list:
        sp_count_duty = delivery.filter(salesperson_salesperson_id=sp).count()
        sp_dels = delivery.filter(salesperson_salesperson_id=sp)
        total_assign_duty.append(sp_count_duty)
        total_try, total_norm = 0, 0

        for d in sp_dels:
            try_buy_prod = Ord_dels.filter(orderdetails_order_id=d.order_order_id.id)
            try_buy_del, norm_del = 0, 0

            for prod in try_buy_prod:

                if prod.try_and_buy:
                    try_buy_del = 1
                    break
                else:
                    norm_del = 1
                    break

            if try_buy_del == 1:
                total_try += 1
            else:
                total_norm += 1

        try_buy_ord.append(total_try)
        norm_ord.append(total_norm)

    # All sp
    page = request.GET.get('page', 1)
    paginator = Paginator(salesperson_list, 5)

    try:
        salespersons = paginator.page(page)
    except PageNotAnInteger:
        salespersons = paginator.page(1)
    except EmptyPage:
        salespersons = paginator.page(paginator.num_pages)

    page = request.GET.get('page', 1)
    paginator = Paginator(list(zip(assign_duty_list, total_assign_duty, try_buy_ord, norm_ord)), 5)

    try:
        assign_duty_sp = paginator.page(page)
    except PageNotAnInteger:
        assign_duty_sp = paginator.page(1)
    except EmptyPage:
        assign_duty_sp = paginator.page(paginator.num_pages)

    notassign_duty_list = []
    for notassign in notassign_sp:
        sp_assign_duty = salesperson_list.get(id=notassign)
        notassign_duty_list.append(sp_assign_duty)

    for sp in notassign_duty_list:
        sp_count_duty = delivery.filter(salesperson_salesperson_id=sp).count()
        sp_dels = delivery.filter(salesperson_salesperson_id=sp)
        total_assign_duty.append(sp_count_duty)
        total_try, total_norm = 0, 0

        for d in sp_dels:
            try_buy_prod = Ord_dels.filter(
                orderdetails_order_id=d.order_order_id.id)
            try_buy_del, norm_del = 0, 0

            for prod in try_buy_prod:

                if prod.try_and_buy:
                    try_buy_del = 1
                    break
                else:
                    norm_del = 1
                    break

            if try_buy_del == 1:
                total_try += 1
            else:
                total_norm += 1

        try_buy_ord.append(total_try)
        norm_ord.append(total_norm)

    page = request.GET.get('page', 1)

    paginator = Paginator(list(zip(notassign_duty_list, total_assign_duty, try_buy_ord, norm_ord)), 5)

    try:
        notassign_duty_sp = paginator.page(page)
    except PageNotAnInteger:
        notassign_duty_sp = paginator.page(1)
    except EmptyPage:
        notassign_duty_sp = paginator.page(paginator.num_pages)

    return render(request, 'Salesperson-table.html', {'salespersons': salespersons, 'assign_duty_sp': assign_duty_sp, 'notassign_duty_sp': notassign_duty_sp, 'total_assign_sp': len(assign_duty_list), 'total_notassign_sp': len(notassign_duty_list), 'total_salesperson': total_salesperson, 'del': delivery, 'present_sal': present_sp})

###################################################


@login_required(login_url="adminlogin")
def adminsales(request):
    order_list = dataBase.Order.objects.all()
    ord_details = dataBase.OrderDetails.objects.all()
    del_list = dataBase.Delivery.objects.all()

    total_order = order_list.count()

    total_prod = []
    try_buy_order = []
    city_name = []
    total_try_buy, total_normal = 0, 0

    try:
        for order in order_list:
            total_ord_det = ord_details.filter(
                orderdetails_order_id=order.id).count()
            total_prod.append(total_ord_det)
            city = order.customer_customer_id.city_city_id.city_name
            city_name.append(city)
            try_buy = ord_details.filter(
                orderdetails_order_id=order.id, try_and_buy=1).count()
            normal = ord_details.filter(
                orderdetails_order_id=order.id, try_and_buy=0).count()

            total_try_buy = total_try_buy+try_buy
            total_normal = total_normal+normal

            try_buy_ord = ord_details.filter(
                orderdetails_order_id=order.id).first()
            try_buy_order.append(try_buy_ord.try_and_buy)
    except Exception as e:
        print(e)

    can_ord = order_list.filter(order_status="cancelled").count()

    # assigned and notassigned orders
    assigned_ord_list = []
    notassigned_ord_list = []

    notassigned_del = del_list.filter(salesperson_salesperson_id__isnull=True)
    assigned_del = del_list.filter(salesperson_salesperson_id__isnull=False)

    for delivery in notassigned_del:
        notassigned_ord = order_list.get(id=delivery.order_order_id.id)
        notassigned_ord_list.append(notassigned_ord)

    for delivery in assigned_del:
        assigned_ord = order_list.get(id=delivery.order_order_id.id)
        assigned_ord_list.append(assigned_ord)

    tot_ret_prod = order_list.filter(order_status="returned").count()
    tot_comp_ord = order_list.filter(order_status="completed").count()

    # All orders
    page = request.GET.get('page', 1)

    paginator = Paginator(
        list(zip(order_list, try_buy_order, city_name, total_prod)), 5)
    try:
        orders = paginator.page(page)
    except PageNotAnInteger:
        orders = paginator.page(1)
    except EmptyPage:
        orders = paginator.page(paginator.num_pages)

    # Assigned orders
    page = request.GET.get('page', 1)

    paginator = Paginator(
        list(zip(assigned_ord_list, try_buy_order, city_name, total_prod)), 5)
    try:
        assigned_ords = paginator.page(page)
    except PageNotAnInteger:
        assigned_ords = paginator.page(1)
    except EmptyPage:
        assigned_ords = paginator.page(paginator.num_pages)

    # Notassigned orders
    page = request.GET.get('page', 1)

    paginator = Paginator(
        list(zip(notassigned_ord_list, try_buy_order, city_name, total_prod)), 5)
    try:
        notassigned_ords = paginator.page(page)
    except PageNotAnInteger:
        notassigned_ords = paginator.page(1)
    except EmptyPage:
        notassigned_ords = paginator.page(paginator.num_pages)

    return render(request, 'Sales-table.html', {'orders': orders, 'assigned_ords': assigned_ords, 'notassigned_ords': notassigned_ords, 'total_assigned_ord': len(assigned_ord_list), 'total_notassigned_ord': len(notassigned_ord_list), 'total_order': total_order, 'total_try_buy': total_try_buy, 'total_normal': total_normal, 'cancel_order': can_ord, 'tot_ret_prod': tot_ret_prod, 'tot_comp_ord': tot_comp_ord})

###################################################


@login_required(login_url="adminlogin")
def admintransaction(request):
    tran_list = dataBase.PaymentTransaction.objects.all().order_by('-id')
    total_trans = tran_list.count()

    cred_amt = tran_list.filter(credit_debit=1).aggregate(Sum('amount'))
    debt_amt = tran_list.filter(credit_debit=0).aggregate(Sum('amount'))
    page = request.GET.get('page', 1)

    paginator = Paginator(tran_list, 5)
    try:
        transactions = paginator.page(page)
    except PageNotAnInteger:
        transactions = paginator.page(1)
    except EmptyPage:
        transactions = paginator.page(paginator.num_pages)

    return render(request, 'Transaction-table.html', {'transactions': transactions, 'total_trans': total_trans, 'cred_amt': cred_amt, 'debt_amt': debt_amt})

###################################################


@login_required(login_url="adminlogin")
def adminproductreturn(request):
    prod_return_list = dataBase.ProductReturn.objects.all().order_by('-id')
    total_return = prod_return_list.count()

    page = request.GET.get('page', 1)

    paginator = Paginator(prod_return_list, 5)
    try:
        prod_return = paginator.page(page)
    except PageNotAnInteger:
        prod_return = paginator.page(1)
    except EmptyPage:
        prod_return = paginator.page(paginator.num_pages)

    return render(request, 'Product-return-table.html', {'prod_returns': prod_return, 'total_return': total_return})

###################################################


@login_required(login_url="adminlogin")
def adminoffers(request):
    offer_list = dataBase.Offer.objects.all().order_by('-id')
    prod_list = dataBase.Product.objects.all()

    today = date.today()
    today_offer = offer_list.filter(start_date=today).count()

    total_prod = []
    for prod in prod_list:
        prod_offer = offer_list.filter(product_product_id=prod.id).last()
        if prod_offer and prod_offer.end_date >= today:
            total_prod.append(prod_offer)

    page = request.GET.get('page', 1)

    paginator = Paginator(offer_list, 5)
    try:
        offers = paginator.page(page)
    except PageNotAnInteger:
        offers = paginator.page(1)
    except EmptyPage:
        offers = paginator.page(paginator.num_pages)

    return render(request, 'Manage-Offer-table.html', {'offers': offers, 'total_prod': len(total_prod), 'today_offers': today_offer})

###################################################


@login_required(login_url="adminlogin")
def addnewadmin(request):
    last_id = User.objects.last().id
    last_id = last_id + 1

    params = {'last_id': last_id}
    return render(request, 'Add-new-admin.html', params)
####################################################


def postaddnewadmin(request):
    try:
        uname = request.POST.get('username')
        date = request.POST.get('date')
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        email = request.POST.get('email')
        passw = request.POST.get('pass')
        pro_img = request.FILES['proimg']
        addr = request.POST.get('address')
        city = request.POST.get('city')
        mobile = request.POST.get('mob')

        user = User.objects.create_user(uname, email, passw)
        user.first_name = fname
        user.last_name = lname
        user.is_staff = 1
        user.date_joined = date
        user.save()

        admin = dataBase.Admin()
        admin.profile_image = pro_img
        admin.address = addr
        admin.mobile_num = mobile
        cid = dataBase.City.objects.get(city_name=city.strip())
        admin.city_city_id = cid
        admin.user_user_id = user
        comid = dataBase.Company.objects.get(id=1)
        admin.company_company_id = comid
        admin.save()

        last_id = User.objects.last().id
        last_id = last_id + 1

        params = {'msg': 'New admin created successfully', 'last_id': last_id}
        return render(request, 'Add-new-admin.html', params)

    except Exception as e:
        last_id = User.objects.last().id
        last_id = last_id + 1
        return render(request, 'Add-new-admin.html', {'msg': str(e), 'last_id': last_id})

####################################################


@login_required(login_url="adminlogin")
def adminprofile(request):
    user = request.user
    if user.is_superuser == 0:
        admin = dataBase.Admin.objects.get(user_user_id=user)
        params = {'user': user, 'admin': admin}
    else:
        params = {'user': user}

    return render(request, 'Admin-profile.html', params)

#########################################################################


def postadminprofile(request):

    email = request.POST.get('email')
    fname = request.POST.get('fname')
    lname = request.POST.get('lname')

    user = request.user
    user.email = email
    user.first_name = fname
    user.last_name = lname
    user.save()

    if user.is_superuser == 0:
        addr = request.POST.get('address')
        city = request.POST.get('city')
        mobile = request.POST.get('mob')

        admin = dataBase.Admin.objects.get(user_user_id=user)

        if len(request.FILES) != 0:
            pro_img = request.FILES['proimg']
            admin.profile_image = pro_img
        admin.address = addr
        cid = dataBase.City.objects.get(city_name=city.strip())
        admin.city_city_id = cid
        admin.mobile_num = mobile
        admin.save()

    users = User.objects.all()
    count = users.count()
    sellers = dataBase.Seller.objects.all()
    order = dataBase.Order.objects.count()
    transaction = dataBase.PaymentTransaction.objects.all()
    customer = dataBase.Customer.objects.all()
    salesperson = dataBase.Salesperson.objects.all()
    tot_sp = salesperson.count()

    cred_amt = transaction.filter(credit_debit=1).aggregate(Sum('amount'))
    debt_amt = transaction.filter(credit_debit=0).aggregate(Sum('amount'))
    total_profit = cred_amt['amount__sum'] - debt_amt['amount__sum']
    if total_profit < 0:
        total_profit = 0

    tot_cus = customer.count()

    today = date.today()
    today_user = users.filter(date_joined__date=today)

    today_cus = 0
    for user in today_user:
        if customer.filter(user_user_id=user.id):
            today_cus += 1
        else:
            pass

    tot_seller = sellers.count()
    sub = sellers.filter(seller_subscription=1).count()
    unsub = sellers.filter(seller_subscription=0,).count()

    month = datetime.now().month
    sal_att = dataBase.SalespersonAttendance.objects.all()
    delivery = dataBase.Delivery.objects.all()

    total_del = delivery.count()
    present_sp = sal_att.filter(attendance_date=today).count()

    return render(request, 'Admin-profile.html', {'msg': "Successfully save profile", 'count': count, 'order': order, 'total_profit': total_profit, 'tot_cus': tot_cus, 'today_cus': today_cus, 'tot_seller': tot_seller, 'sub': sub, 'unsub': unsub, 'tot_sp': tot_sp, 'total_del': total_del, 'present_sp': present_sp})


#############################################################

@login_required(login_url="adminlogin")
def adminpanel(request):
    users = User.objects.all()
    count = users.count()
    sellers = dataBase.Seller.objects.all()
    order = dataBase.Order.objects.count()
    transaction = dataBase.PaymentTransaction.objects.all()
    customer = dataBase.Customer.objects.all()
    salesperson = dataBase.Salesperson.objects.all()
    tot_sp = salesperson.count()

    total_profit = 0
    if transaction.count() != 0:
        cred_amt = transaction.filter(credit_debit=1).aggregate(Sum('amount'))
        debt_amt = transaction.filter(credit_debit=0).aggregate(Sum('amount'))
        total_profit = cred_amt['amount__sum'] - debt_amt['amount__sum']
        if total_profit < 0:
            total_profit = 0

    tot_cus = customer.count()

    today = date.today()
    today_user = users.filter(date_joined__date=today)

    today_cus = 0
    for user in today_user:
        if customer.filter(user_user_id=user.id):
            today_cus += 1
        else:
            pass

    tot_seller = sellers.count()
    sub = sellers.filter(seller_subscription=1).count()
    unsub = sellers.filter(seller_subscription=0,).count()

    month = datetime.now().month
    sal_att = dataBase.SalespersonAttendance.objects.all()
    delivery = dataBase.Delivery.objects.all()

    total_del = delivery.count()
    present_sp = sal_att.filter(attendance_date=today).count()

    return render(request, 'Admin-panel.html', {'count': count, 'order': order, 'total_profit': total_profit, 'tot_cus': tot_cus, 'today_cus': today_cus, 'tot_seller': tot_seller, 'sub': sub, 'unsub': unsub, 'tot_sp': tot_sp, 'total_del': total_del, 'present_sp': present_sp})

def adminlogin(request):
    return render(request, 'Admin-Login.html')


def adminpostlogin(request):
    email = request.POST.get('email')
    passw = request.POST.get('password')
    try:
        u = User.objects.get(email=email)
        uname = u.username
        authUser = authenticate(username=uname, password=passw)
        if authUser != None and u.is_staff and u.is_active:
            login(request, u)
        else:
            message = "wrong email and password"
            return render(request, 'Admin-Login.html', {'msg': message})

        users = User.objects.all()
        count = users.count()
        sellers = dataBase.Seller.objects.all()
        order = dataBase.Order.objects.count()
        transaction = dataBase.PaymentTransaction.objects.all()
        customer = dataBase.Customer.objects.all()
        salesperson = dataBase.Salesperson.objects.all()
        tot_sp = salesperson.count()

        total_profit=0
        if transaction.count() != 0:
            cred_amt = transaction.filter(credit_debit=1).aggregate(Sum('amount'))
            debt_amt = transaction.filter(credit_debit=0).aggregate(Sum('amount'))
            total_profit = cred_amt['amount__sum'] - debt_amt['amount__sum']
            if total_profit < 0:
                total_profit = 0

        tot_cus = customer.count()

        today = date.today()
        today_user = users.filter(date_joined__date=today)

        today_cus = 0
        for user in today_user:
            if customer.filter(user_user_id=user.id):
                today_cus += 1
            else:
                pass

        tot_seller = sellers.count()
        sub = sellers.filter(seller_subscription=1).count()
        unsub = sellers.filter(seller_subscription=0,).count()

        month = datetime.now().month
        sal_att = dataBase.SalespersonAttendance.objects.all()
        delivery = dataBase.Delivery.objects.all()

        total_del = delivery.count()
        present_sp = sal_att.filter(attendance_date=today).count()

        # ,'present_sp':present_sp
        return render(request, 'Admin-panel.html', {'msg': 'Successfully login', 'count': count, 'order': order, 'total_profit': total_profit, 'tot_cus': tot_cus, 'today_cus': today_cus, 'tot_seller': tot_seller, 'sub': sub, 'unsub': unsub, 'tot_sp': tot_sp, 'total_del': total_del})

        # return redirect('adminpanel')

    except Exception as e:
        message = "wrong email and password "+str(e)
        return render(request, 'Admin-Login.html', {'msg': message})


def admin_logout(request):
    try:
        logout(request)
    except KeyError:
        pass
    return redirect('adminlogin')


#######################################################################
