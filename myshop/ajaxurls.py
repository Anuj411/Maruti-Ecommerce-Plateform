from django.urls import path
from . import ajaxviews as views

urlpatterns = [
    path('brand/', views.brandropdown, name="branddropdown"),
    path('size/', views.sizedropdown, name="sizedropdown"),
    path('deals/', views.deals, name="deals"),
    path('wishlist/', views.wish, name="wish"),
    path('showwish/', views.showwish, name="showwish"),
    path('increasecart/<str:pid>', views.increasecart, name="increasecart"),
    path('showtryandbuy/', views.showtryandbuy, name="showtryandbuy"),
    path('active/', views.active, name="active"),
    path('activeprod/', views.activeprod, name="activeprod"),
    path('username/', views.validuname, name="validuname")


]
