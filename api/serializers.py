from rest_framework import serializers
from myshop import models as dataBase

class productserializer(serializers.ModelSerializer):
    class Meta:
        model = dataBase.Product
        fields ="__all__"

class state(serializers.ModelSerializer):
    class Meta:
        model = dataBase.State
        fields ="__all__"

class city(serializers.ModelSerializer):
    class Meta:
        model = dataBase.City
        fields ="__all__"


class productImageserializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = dataBase.ProductImage
        fields ="__all__"



class sellergstserializer(serializers.ModelSerializer):
    gstin_certificate_image = serializers.ImageField(use_url=True)
    class Meta:
        model = dataBase.Seller
        field =['gstin_certificate_image','gstin','store_name','store_address']