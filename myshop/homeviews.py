from django.shortcuts import render,redirect

# Create your views here.
def homePage(request):
    return redirect('customerdash')