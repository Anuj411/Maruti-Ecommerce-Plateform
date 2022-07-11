# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.models import User


class State(models.Model):
    # state_id = models.IntegerField(primary_key=True)
    state_name = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.state_name


class City(models.Model):
    # city_id = models.IntegerField(primary_key=True)
    city_name = models.CharField(max_length=50, blank=True, null=True)
    state_state_id = models.ForeignKey(
        State, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.city_name


class Brand(models.Model):
    # brand_id = models.IntegerField(primary_key=True)
    brand_name = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.brand_name

# class Category(models.Model):
#     # category_id = models.IntegerField(primary_key=True)
#     category_name = models.CharField(max_length=50, blank=True, null=True)
#     category_category_id = models.ForeignKey("Category",on_delete=models.CASCADE,null=True)


#     def __str__(self):
#         return self.category_name

class CategoryMain(models.Model):
    category_name = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.category_name


class CategoryMid(models.Model):
    category_name = models.CharField(max_length=50, blank=True, null=True)
    mainCategoryId = models.ForeignKey(
        CategoryMain, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.category_name


class CategorySub(models.Model):
    category_name = models.CharField(max_length=50, blank=True, null=True)
    midCategoryId = models.ForeignKey(
        CategoryMid, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.category_name


class Feature(models.Model):
    # feature_id = models.IntegerField(primary_key=True)
    feature_name = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.feature_name


class Company(models.Model):
    # company_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20, blank=True, null=True)
    address = models.CharField(max_length=300, blank=True, null=True)
    email = models.CharField(max_length=25, blank=True, null=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    city_city_id = models.ForeignKey(City, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name


class Customer(models.Model):
    # customer_id = models.IntegerField(primary_key=True)
    customer_address = models.CharField(max_length=300, blank=True, null=True)
    customer_mobile_num = models.CharField(
        max_length=15, blank=True, null=True)
    profile_image = models.ImageField(upload_to="profileimage", null=True)
    user_user_id = models.OneToOneField(
        User, on_delete=models.CASCADE, null=False)
    company_company_id = models.ForeignKey(
        Company, on_delete=models.CASCADE, null=True)
    city_city_id = models.ForeignKey(City, on_delete=models.CASCADE, null=True)
    firstvisit = models.IntegerField(default=0, null=False)
    otp = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return str(self.user_user_id)

class Admin(models.Model):
    # customer_id = models.IntegerField(primary_key=True)
    address = models.CharField(max_length=300, blank=True, null=True)
    mobile_num = models.CharField(
        max_length=15, blank=True, null=True)
    profile_image = models.ImageField(upload_to="profileimage", null=True)
    user_user_id = models.OneToOneField(
        User, on_delete=models.CASCADE, null=False)
    company_company_id = models.ForeignKey(
        Company, on_delete=models.CASCADE, null=True)
    city_city_id = models.ForeignKey(City, on_delete=models.CASCADE, null=True)
    otp = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return str(self.user_user_id)


class Subscription(models.Model):
    period = models.CharField(max_length=30, blank=True, null=True)
    subscription_type = models.CharField(max_length=50, blank=True, null=True)
    cost = models.IntegerField(blank=True, null=True)


class Seller(models.Model):
    # seller_id = models.IntegerField(primary_key=True)
    # Field name made lowercase.
    gstin = models.CharField(
        db_column='GSTIN', max_length=15, blank=True, null=True)
    seller_address = models.CharField(max_length=300, blank=True, null=True)
    seller_mobile_num = models.CharField(max_length=15, blank=True, null=True)
    seller_subscription = models.IntegerField(blank=True, null=True)
    account_number = models.CharField(max_length=15, blank=True, null=True)
    account_name = models.CharField(max_length=20, blank=True, null=True)
    store_name = models.CharField(max_length=40, blank=True, null=True)
    store_address = models.CharField(max_length=300, blank=True, null=True)
    gstin_certificate_image = models.ImageField(
        upload_to="gstin_image", null=True)
    # Field name made lowercase.
    account_ifsc_code = models.CharField(
        db_column='account_IFSC_code', max_length=20, blank=True, null=True)
    cancelled_cheque_image = models.ImageField(
        upload_to="checkimage", null=True)
    profile_image = models.ImageField(upload_to="profilepics", null=True)
    user_user_id = models.OneToOneField(
        User, on_delete=models.CASCADE, null=False)
    otp = models.IntegerField(null=True, blank=True)
    is_verified = models.IntegerField(blank=True, null=True)
    company_company_id = models.ForeignKey(
        Company, on_delete=models.CASCADE, null=True)
    city_city_id = models.ForeignKey(City, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.account_name


class sellersubscription(models.Model):
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    seller_id = models.ForeignKey(Seller, on_delete=models.CASCADE, null=False)
    subscription_id = models.ForeignKey(
        Subscription, on_delete=models.CASCADE, null=False)

    class Meta:
        # db_table = 'myshop_cart'
        unique_together = (('seller_id', 'subscription_id'),)

    def __str__(self):
        return str(self.start_date)


class Salesperson(models.Model):
    # salesperson_id = models.IntegerField(primary_key=True)
    # Field name made lowercase.
    pan = models.CharField(
        db_column='PAN', max_length=10, blank=True, null=True)
    salesperson_address = models.CharField(
        max_length=300, blank=True, null=True)
    salesperson_mobile_num = models.CharField(
        max_length=15, blank=True, null=True)
    security_amt_paid = models.IntegerField(blank=True, null=True)
    account_number = models.CharField(max_length=15, blank=True, null=True)
    account_name = models.CharField(max_length=40, blank=True, null=True)
    # Field name made lowercase.
    account_ifsc_code = models.CharField(
        db_column='account_IFSC_code', max_length=15, blank=True, null=True)
    cancelled_cheque_image = models.ImageField(
        upload_to="checkimage", null=True)
    profile_image = models.ImageField(upload_to="profilepics", null=True)
    salary = models.FloatField(blank=True, null=True)
    is_verified = models.IntegerField(blank=True, null=True)
    otp = models.IntegerField(null=True, blank=True)
    user_user_id = models.OneToOneField(
        User, on_delete=models.CASCADE, null=False)
    company_company_id = models.ForeignKey(
        Company, on_delete=models.CASCADE, null=True)
    city_city_id = models.ForeignKey(City, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.account_name


class CategoryHasBrand(models.Model):
    category_category_id = models.ForeignKey(
        CategoryMid, on_delete=models.CASCADE, null=False)
    brand_brand_id = models.ForeignKey(
        Brand, on_delete=models.CASCADE, null=False)
    # categoryhasbran_id = models.IntegerField(primary_key=True,null=False)

    class Meta:
        unique_together = (('category_category_id', 'brand_brand_id'),)

    def __str__(self):
        return str(self.brand_brand_id)


class Size(models.Model):
    size_value = models.CharField(max_length=10)
    categoryid = models.ForeignKey(
        CategorySub, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.size_value


class Product(models.Model):

    # product_id = models.IntegerField(primary_key=True)
    product_name = models.CharField(max_length=255, blank=True, null=True)
    product_short_description = models.CharField(
        max_length=250, blank=True, null=True)
    product_specification = models.CharField(
        max_length=1000, blank=True, null=True)
    # Field name made lowercase.
    product_mrp = models.IntegerField(
        db_column='product_MRP', blank=True, null=True)
    qty_product = models.IntegerField(blank=True, null=True)
    product_selling_price = models.IntegerField(blank=True, null=True)
    product_add_date = models.DateField(blank=True, null=True)
    seller_seller_id = models.ForeignKey(
        Seller, on_delete=models.CASCADE, null=False)
    try_and_buy = models.IntegerField(blank=True, null=True)
    size = models.ForeignKey(Size, on_delete=models.CASCADE, null=True)
    # color = ColorField(choices=colorChoice,format='hexa')
    # category_category_id = models.ForeignKey(Category,on_delete=models.CASCADE,null=False)
    # brand_brand_id = models.IntegerField()
    status = models.IntegerField(default=1, null=False)
    # block product 0 for unblock product
    # block = models.IntegerField(default=0, null=False)
    categoryHasBrand_id = models.ForeignKey(
        CategoryHasBrand, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.product_name


class wishlist(models.Model):
    product_product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, null=False)
    customer_customer_id = models.ForeignKey(
        Customer, on_delete=models.CASCADE, null=False)

    class Meta:
        # db_table = 'myshop_cart'
        unique_together = (('product_product_id', 'customer_customer_id'),)


class Color(models.Model):
    colorName = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.colorName


class ProductImage(models.Model):
    # product_image_id = models.IntegerField(primary_key=True)
    image = models.ImageField(upload_to="productimage", null=True)
    product_product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, null=False)
    color = models.ForeignKey(Color, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return str(self.image)


class Offer(models.Model):
    # offer_id = models.IntegerField(primary_key=True)
    offer_name = models.CharField(max_length=50, blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    discount = models.FloatField(blank=True, null=True)
    product_product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.offer_name


class ProductHasFeature(models.Model):
    product_product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, null=False)
    feature_feature_id = models.ForeignKey(
        Feature, on_delete=models.CASCADE, null=False)
    feature_value = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        # db_table = 'myshop_product_has_feature'
        unique_together = (('product_product_id', 'feature_feature_id'),)

    def __str__(self):
        return self.feature_value


class ProductReviews(models.Model):
    review = models.CharField(max_length=1000, blank=True, null=True)
    # image = models.ImageField(upload_to="reviewimage", null=True)
    rating = models.IntegerField(blank=True, null=True)
    product_product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, null=False)
    customer_customer_id = models.ForeignKey(
        Customer, on_delete=models.CASCADE, null=False)

    class Meta:
        # db_table = 'myshop_product_reviews'
        unique_together = (('product_product_id', 'customer_customer_id'),)

    def __str__(self):
        return self.review


class Cart(models.Model):
    quantity = models.IntegerField(default=1, blank=True, null=False)
    last_updated_date = models.DateTimeField(blank=True, null=True)
    product_product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, null=False)
    customer_customer_id = models.ForeignKey(
        Customer, on_delete=models.CASCADE, null=False)

    class Meta:
        # db_table = 'myshop_cart'
        unique_together = (('product_product_id', 'customer_customer_id'),)

    def __str__(self):
        return self.customer_customer_id


# class SalespersonAttendance(models.Model):
#     attendance_date = models.DateField()
#     name = models.CharField(max_length=50, blank=True, null=True)
#     salesperson_salesperson_id = models.ForeignKey(
#         Salesperson, on_delete=models.CASCADE, null=False)

#     class Meta:
#         unique_together = (('attendance_date', 'salesperson_salesperson_id'),)

#     def __str__(self):
#         return self.attendance_date

class SalespersonAttendance(models.Model):
    attendance_date = models.DateField(null=False)
    salesperson_salesperson_id = models.ForeignKey(
        Salesperson, on_delete=models.CASCADE, null=True)
    # xyz = models.CharField(max_length=50,null=True)
    class Meta:
        unique_together = (('attendance_date', 'salesperson_salesperson_id'),)

    def str(self):
        return self.attendance_date


class Order(models.Model):
    # order_id = models.IntegerField(primary_key=True)
    order_date = models.DateField(blank=True, null=True)
    delivery_address = models.CharField(max_length=300, blank=True, null=True)
    schedule_order = models.DateTimeField(blank=True, null=True)
    order_status = models.CharField(max_length=10, blank=True, null=True)
    total_amount = models.FloatField(blank=True, null=True)
    cancelled_order_date = models.DateField(blank=True, null=True)
    customer_customer_id = models.ForeignKey(
        Customer, on_delete=models.CASCADE, null=False)
    mobile_number = models.CharField(max_length=15, blank=True, null=True)
    city_city_id = models.ForeignKey(City, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return str(self.order_date)


class OrderDetails(models.Model):
    orderdetails_order_id = models.ForeignKey(
        Order, on_delete=models.CASCADE, null=False)
    qty_ordered = models.IntegerField(blank=True, null=True)
    fixed_charge = models.FloatField(blank=True, null=True)
    customer_delivery_area = models.CharField(
        max_length=20, blank=True, null=True)
    delivery_charges = models.FloatField(blank=True, null=True)
    product_price = models.FloatField(blank=True, null=True)
    try_and_buy = models.IntegerField(blank=True, null=True)
    product_product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, null=False)

    class Meta:
        unique_together = (('orderdetails_order_id', 'product_product_id'),)

    def __str__(self):
        return str(self.try_and_buy)


class ProductReturn(models.Model):
    # product_return_id = models.IntegerField(primary_key=True)
    product_return_date = models.DateField(blank=True, null=True)
    purchase_amount = models.FloatField(blank=True, null=True)
    reason_for_return = models.CharField(max_length=50, blank=True, null=True)
    return_charges = models.FloatField(blank=True, null=True)
    return_option = models.IntegerField(blank=True, null=True)
    order_details_order_order_id = models.ForeignKey(
        OrderDetails, on_delete=models.CASCADE, null=False)
    order_details_product_product_id = models.ForeignKey(
        Product, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.reason_for_return


class ProductReplace(models.Model):
    # product_replace_id = models.IntegerField(primary_key=True)
    product_replace_date = models.DateField(blank=True, null=True)
    product_return_product_return_id = models.ForeignKey(
        ProductReturn, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.product_replace_date


class Delivery(models.Model):
    # delivery_id = models.IntegerField(primary_key=True)
    delivery_date = models.DateField(blank=True, null=True)
    salesperson_salesperson_id = models.ForeignKey(
        Salesperson, on_delete=models.CASCADE, null=True)
    order_order_id = models.ForeignKey(
        Order, on_delete=models.CASCADE, null=True)
    product_replace_product_replace_id = models.ForeignKey(
        ProductReplace, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return str(self.delivery_date)


class Feedback(models.Model):
    # feedback_id = models.IntegerField(primary_key=True)
    feedback_date = models.DateField(blank=True, null=True)
    feedback_description = models.CharField(
        max_length=300, blank=True, null=True)
    delivery_delivery_id = models.ForeignKey(
        Delivery, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.delivery_delivery_id


class PaymentIntention(models.Model):
    # payment_intention_id = models.IntegerField(primary_key=True)
    payment_intention_desc = models.CharField(
        max_length=25, blank=True, null=True)

    def __str__(self):
        return self.payment_intention_desc


class PaymentMethod(models.Model):
    # payment_method_id = models.IntegerField(primary_key=True)
    payment_method_name = models.CharField(
        max_length=15, blank=True, null=True)

    def __str__(self):
        return self.payment_method_name


class PaymentTransaction(models.Model):
    # payment_transaction_id = models.IntegerField(primary_key=True)
    transaction_date = models.DateField(blank=True, null=True)
    amount = models.FloatField(blank=True, null=True)
    credit_debit = models.IntegerField(blank=True, null=True)
    company_company_id = models.ForeignKey(
        Company, on_delete=models.CASCADE, null=True)
    seller_seller_id = models.ForeignKey(
        Seller, on_delete=models.CASCADE, null=True)
    product_return_product_return_id = models.ForeignKey(
        ProductReturn, on_delete=models.CASCADE, null=True)
    payment_method_payment_method_id = models.ForeignKey(
        PaymentMethod, on_delete=models.CASCADE, null=False)
    payment_intention_payment_intention_id = models.ForeignKey(
        PaymentIntention, on_delete=models.CASCADE, null=False)
    salesperson_salesperson_id = models.ForeignKey(
        Salesperson, on_delete=models.CASCADE, null=True)
    # delivery_delivery_id = models.ForeignKey(Delivery,on_delete=models.CASCADE,null=True)
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    payment_status = models.IntegerField(blank=True, null=True)
    
    def __str__(self):
        return str(self.transaction_date)


# # class User(models.Model):
# #     user_id = models.IntegerField(primary_key=True)
# #     date_joined = models.DateField(blank=True, null=True)
# #     email = models.CharField(max_length=20, blank=True, null=True)
# #     is_active = models.IntegerField(blank=True, null=True)
# #     is_staff = models.IntegerField(blank=True, null=True)
# #     is_super_user = models.IntegerField(blank=True, null=True)
# #     last_login = models.DateTimeField(blank=True, null=True)
# #     password = models.CharField(max_length=15, blank=True, null=True)
# #     username = models.CharField(max_length=15, blank=True, null=True)
# #     first_name = models.CharField(max_length=15, blank=True, null=True)
# #     last_name = models.CharField(max_length=15, blank=True, null=True)

# #     class Meta:
# #
# #         db_table = 'user'
