from django.urls import path
from . import views


urlpatterns = [
    path("",views.api,name='api'),
    path("sellerlogin",views.sellerapilogin,name="apisellerlogin"),
    path("sellersignup",views.sellerfirstsignupapi,name="apisellersignup"),
    path("sellergstaddapi",views.getgstdetail,name="sellergstadd"),
    path("sellerbankaddapi",views.bankdetail,name="sellerbankadd"),
    path("productlist/<str:typeof>",views.productList,name="productList")
]