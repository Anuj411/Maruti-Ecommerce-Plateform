from django.shortcuts import render,redirect
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from django.views.decorators.csrf import csrf_exempt
# from .serializers import contentSerializer,notifyserializer
from . import serializers as serialData
from rest_framework import mixins
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from django.contrib.auth.forms import UserCreationForm
from rest_framework.parsers import MultiPartParser,FormParser

from django.conf import settings
from django.core.mail import send_mail
from myshop import models as dataBase


from rest_framework.views import APIView
from rest_framework import status

import datetime




@api_view(['POST'])
def api(request):
    # product = dataBase.Product.objects.all()
    # statedata = dataBase.State.objects.all()
    # citydata = dataBase.City.objects.all()
    # productData = serialData.productserializer(product,many=True)
    # state = serialData.state(statedata,many=True)
    # city = serialData.city(citydata,many=True)
    # data = []
    # for s in statedata:
    #     cityl = []
    #     for c in citydata:
    #         if c.state_state_id ==s:
    #             cityl.append({'id':c.id,'name':c.city_name})
    #     dictstate = {'stateid':s.id,'statename':s.state_name,'cities':cityl}
    #     data.append(dictstate)
    print(request.data)
    return Response({'user':"hello"},status=201)
    return Response(data,status=201)




@api_view(['POST'])
def sellerfirstsignupapi(request):
    # print(request.data)
    # return Response({'user':"hello"},status=201)
    name = request.data['fname']+request.data['lname']

    email = request.data['email']
    passw = request.data['password']
    phone = request.data['number']
    # state = request.data['stt']
    # city = request.POST.get('city')
    # country = request.POST.get('country')

    # jugadlen = len(city)
    # jugad = city[1:-1]
    # dbcityId = ""
    # print(city)
    # print(jugad)
    # stateid = dataBase.State.objects.get(state_name=state)
    # dbcity = dataBase.City.objects.filter(city_name=jugad)


    # cid = dataBase.Company.objects.all()

    try:

        user = User.objects.create_user(name, email, passw)
        user.save()
        seller = dataBase.Seller()
        print("--------------seller----------")
        # seller.company_id = cid[0]
        # seller.city_id = dbcity
        # seller.seller_mobile_num = phone
        seller.user_user_id = user
        seller.save()

        return Response({'user':user.id,'seller':seller.id},status=201)
    except Exception as e:
        message = "this email and username is already exist"
        return Response({'msg':message},status=401)


    return Response({'msg':message},status=401)



@api_view(['POST'])
def sellerapilogin(request):

    passw = request.data['your_pass']
    email = request.data['your_email']
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
            # return render(request, 'SellerSignIn.html', {'msg': message})
            return Response({"Error":"Incorrect username or password"},status=401)

    except Exception as e:
        message = "wrong email and password "+str(e)
        return Response({"Error":"Incorrect username or password"+str(e),},status=401)

    if u.is_active == 1:
        # return Response({"message":"Login sucessful","id":u.id},status=201)
        pass
    else:
        return Response({"Error":"Incorrect username or password"+str(e),},status=401)

    verified = seller.is_verified
    gstverify = seller.gstin
    bankacc = seller.account_number
    # cancelcheck = seller.cancelled_cheque_image
    store = seller.store_address
    progress = 10

    if verified:
        progress = progress+45
    else:
        # return Response({"Error":"Incorrect username or password",},status=401)
        pass

    if gstverify:
        progress = progress + 15

    if bankacc:
        progress = progress+15

    # if cancelcheck:
    #     progress = progress+15

    if store:
        progress = progress+15

    if progress == 100:
        return Response({"message":"Login sucessful","id":u.id,"emailVerified":seller.is_verified,"gstVerify":seller.gstin,"bankacc":seller.account_number,"store":seller.store_address},status=201)
    # return render(request,'seller welcome screen/welcome.html',{'e':verified})
    return Response({"message":"Login sucessful","id":u.id,"emailVerified":seller.is_verified,"gstVerify":seller.gstin,"bankacc":seller.account_number,"store":seller.store_address},status=201)


class SellerGst(APIView):
  parser_classes = (MultiPartParser, FormParser)
  def post(self, request, *args, **kwargs):
    file_serializer = serialData.sellergstserializer(data=request.data)
    if file_serializer.is_valid():
      file_serializer.save()
      return Response(file_serializer.data, status=status.HTTP_201_CREATED)
    else:
      return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['POST'])
def getgstdetail(request):
    print("-------------gstdetail---------")
    print(request.POST)
    print(request.FILES)
    idi = request.POST.get('id')
    user = dataBase.User.objects.get(id=idi)
    seller = dataBase.Seller.objects.get(user_user_id=user)
    seller.gstin = request.POST.get('gstin')
    seller.store_name = request.POST.get('store_name')
    seller.store_address = request.POST.get('store_address')
    seller.gstin_certificate_image = request.FILES['gstin_certificate_image']
    seller.save()
    print(seller)
    return Response({'done':'done'},status=201)


@api_view(['POST'])
def bankdetail(request):
    print("-------------gstdetail---------")
    print(request.POST)
    idi = request.POST.get('id')
    user = dataBase.User.objects.get(id=idi)
    seller = dataBase.Seller.objects.get(user_user_id=user)
    seller.account_name = request.POST.get('accname')
    seller.account_number = request.POST.get('accno')
    seller.account_ifsc_code = request.POST.get('ifsccode')
    seller.cancelled_cheque_image = request.FILES['cancelcheque']
    seller.save()
    print(seller)
    return Response({'done':'done'},status=201)



@api_view(['POST'])
def productList(request,typeof):
    print("----Started---")

    try:
        idi = request.POST.get('id')
        user = dataBase.User.objects.get(id=idi)
        seller = dataBase.Seller.objects.get(user_user_id=user)
        print(seller)
        if typeof=='all':
            product = dataBase.Product.objects.filter(seller_seller_id=seller)
        elif typeof=='active':
            product = dataBase.Product.objects.filter(seller_seller_id=seller,status=1)
        elif typeof=="inactive":
            product = dataBase.Product.objects.filter(seller_seller_id=seller,status=0)
        elif typeof=="blocked":
            product = dataBase.Product.objects.filter(seller_seller_id=seller,status=3)
        elif typeof=='tryandbuy':
            product = dataBase.Product.objects.filter(seller_seller_id=seller,try_and_buy=1)
        proimg = []
        for p in product:
            proim = dataBase.ProductImage.objects.filter(product_product_id=p)
            proimg.append(proim[0])
        proList=[]
        for i,j in zip(product,proimg):
            data = {
                'pcode':i.id,
                'pname':i.product_name,
                'status':i.status,
                'mrp':i.product_mrp,
                'finalprice':i.product_selling_price,
                'stock':i.qty_product,
                'category':i.categoryHasBrand_id.category_category_id.category_name,
                'img':j.image.path
                }
            proList.append(data)
        return Response({'done':proList},status=201)
    except Exception as e:
        product = dataBase.Product.objects.filter(seller_seller_id=seller)
        proim = dataBase.ProductImage.objects.filter(product_product_id=p)
        return Response({'done':str(e),'user':user.username,'product':len(product),'img':len(proim)},status=400)





