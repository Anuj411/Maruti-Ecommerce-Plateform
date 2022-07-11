from django.urls import path
from . import homeviews as views

app_name = 'myshop'

urlpatterns = [
    path('', views.homePage,name='home'),
]
