from django.urls import path
from . import customerviews as views

urlpatterns = [
    path('customerdash/', views.customerdash, name="customerdash"),
    path('productview/', views.seeall, name="seeall"),
    path('search/', views.search, name="search"),
    path('category/<str:catid>', views.catfilter, name="catfilter"),
    path('brand/', views.brandfilter, name="brandfilter"),
    path('first/', views.fristtime_profile, name="firsttime"),
    path('profile/', views.profile_setting, name="profile"),
    path('prodview/<str:pid>', views.prodview, name="prodview"),
    path('customerwish/', views.customerwish, name="customerwish"),
    path('cart', views.show_cart, name="showcart"),
    path('cart/<str:pid>', views.cart, name="cart"),
    path('removewish/<str:pid>', views.removewish, name="removewish"),
    path('removecart/<str:pid>', views.removecart, name="removecart"),
    path('placeorder/<str:pid>/<int:tryandbuy>',
         views.placeorder, name="placeorder"),
    path('placefullorder/<int:tryandbuy>',
         views.placefullorder, name="placefullorder"),
    path('category/<str:catname>/<int:what>',
         views.showCatProduct, name="showcatproduct"),
    path('checkout/<int:tryandbuy>', views.checkoutcart, name="checkoutcart"),
    path('orderlist/',
         views.orderlist, name="orderlist"),
    path('return/<str:oid>', views.returnproduct, name="returnproduct"),
    path('returnprod/<str:odid>', views.returnprod, name="returnprod"),
    path('cancelorder/<str:oid>', views.cancelorder, name="cancelorder"),
    path('reviews/<str:pid>', views.reviews, name="reviews"),
    path('newreleases/', views.newreleases, name="newreleases"),
    #     path('showoffer/<str:catname>/<int:what>',
    #          views.showofferproduct, name="showofferproduct")



]
