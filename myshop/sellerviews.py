from django.shortcuts import render,redirect
from django.contrib.auth import logout

from . import models as dataBase
from django.contrib.auth.models import User,auth

from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required(login_url='sellersignin')
def welcomeseller(request):
    #req = authe.get_account_info(request.session['uid'])
    #data = req['users']
    #verified = data[0]['emailVerified']
    #verified = dataBase.seller.objects.get()
    user = request.user
    # print(user)
    seller = dataBase.Seller.objects.get(user_user_id=user)
    # print(seller)
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
        progress = progress +15
    
    if bankacc:
        progress = progress+15

    if cancelcheck:
        progress = progress+15
    
    if store:
        progress = progress+15

    if progress == 100:
        return redirect('dashboard')
    # verified =1
    return render(request,"Welcome.html",{'e':verified,'gst':gstverify,'bankverify':bankacc,'progress':progress,'cancelcheck':cancelcheck,'store':store})


# def emailverify(request):
#     try:
#         req = authe.get_account_info(request.session['uid'])
#         data = req['users']
#         verified = data[0]['emailVerified']
#         print(verified)
#         getinfo = authe.send_email_verification(request.session['uid'])
#         print(getinfo)
#         return render(request,"seller welcome screen/welcome.html",{'e':verified})
#     except Exception as e:
#         req = authe.get_account_info(request.session['uid'])
#         data = req['users']
#         verified = data[0]['emailVerified']
#         print(verified)
#         print("error occured")
#         return render(request,"seller welcome screen/welcome.html",{'msg':e,'e':verified})



