from django.urls import path
from . import sellerviews as views

#app_name = 'seller'

urlpatterns = [
    path('', views.welcomeseller, name='welcome'),
    # path('emailverify/', views.emailverify, name='emailverify'),

]
