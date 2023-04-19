from django.shortcuts import render, redirect
from django.http import HttpRequest

from django.contrib.auth import logout, login, authenticate

from . import models as dataBase
from django.contrib.auth.models import User, auth

from django.conf import settings
from django.core.mail import send_mail

from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.core import serializers
from datetime import date


import random


def brandropdown(request):

    categorymid = dataBase.CategoryMid.objects.get(
        category_name=request.GET.get("username"))
    categorybrand = dataBase.CategoryHasBrand.objects.filter(
        category_category_id=categorymid)
    brandname = []
    for i in categorybrand:

        brandn = dataBase.Brand.objects.get(id=i.brand_brand_id.id)
        brandname.append(brand.brand_name)
    print(brandname)

    data = {
        'is_taken': brandname
    }
    return JsonResponse(data)


def sizedropdown(request):
    categorysub = dataBase.CategorySub.objects.get(
        category_name=request.GET.get("username"))
    size = dataBase.Size.objects.filter(categoryid=categorysub)

    sizevale = []

    for i in size:
        sizevale.append(i.size_value)

    print(sizevale)
    data = {
        'is_taken': sizevale
    }
    return JsonResponse(data)


def deals(request):
    offer = dataBase.Offer.objects.all()
    todaydate = date.today()
    print(todaydate)
    # sdate = offer.values('start_date')
    # edate = offer.values('end_date')
    enddate = []

    for i in offer:
        if i.end_date > todaydate:
            enddate.append(i.offer_name)

    print(enddate)

    data = {

        'is_taken': enddate
    }
    return JsonResponse(data)


def showtryandbuy(request):
    print('-----------------try----------------')
    product = dataBase.Product.objects.filter(try_and_buy=1)
    pro = []
    for p in product:
        pro.append(p.product_name)
    print(pro)
    data = {

        'is_taken': pro
    }

    return JsonResponse(data)


def wish(request):
    if request.user == "AnonymousUser":
        data = {
            'is_taken': "success"
        }

        return JsonResponse(data)

    user = request.user
    customer = dataBase.Customer.objects.get(user_user_id=user)
    pro = dataBase.Product.objects.get(id=request.GET.get("username"))
    action = request.GET.get('action')
    print(action)
    if action == "add":
        print("----------add")
        wishlist = dataBase.wishlist()

        wishlist.customer_customer_id = customer
        wishlist.product_product_id = pro
        wishlist.save()
    else:
        print("----------remove")
        wishobj = dataBase.wishlist.objects.get(
            product_product_id=pro, customer_customer_id=customer)
        wishobj.delete()
        print(wishobj)
    data = {
        'is_taken': pro.product_name
    }

    return JsonResponse(data)


def showwish(request):
    data = {
        'is_taken': "succes"
    }

    return JsonResponse(data)


def increasecart(request):
    data = {
        'is_taken': "success"
    }

    return JsonResponse(data)


def active(request):
    user = dataBase.User.objects.get(id=request.GET.get('id'))
    if request.GET.get('isactive') == "true":
        user.is_active = 1
    else:
        user.is_active = 0
    user.save()

    data = {
        'is_taken': "success"
    }
    return JsonResponse(data)


def activeprod(request):
    prod = dataBase.Product.objects.get(id=request.GET.get('id'))
    if request.GET.get('isactive') == "true":
        prod.status = 3
    else:
        prod.status = 2
    prod.save()

    data = {
        'is_taken': "success"
    }
    return JsonResponse(data)


def validuname(request):

    if User.objects.filter(username=request.GET.get('username')).exists():
        data = {'is_taken': "Username already exist"}
    else:
        data = {'is_taken': ""}

    return JsonResponse(data)
