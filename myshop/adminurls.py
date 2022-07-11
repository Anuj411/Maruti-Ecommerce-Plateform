from django.urls import path
from . import adminviews as views

urlpatterns = [
    path('adminlogin/',views.adminlogin,name="adminlogin"),
    path('adminpostlogin/',views.adminpostlogin,name="adminpostlogin"),
    path('adminpanel/',views.adminpanel,name="adminpanel"),
    path('adminlogut/',views.admin_logout,name='adminlogout'),
    path('adminprofile/',views.adminprofile,name="adminprofile"),
    path('postadminprofile/',views.postadminprofile,name="postadminprofile"),
    path('addnewadmin/',views.addnewadmin,name="addnewadmin"),
    path('managecustomer/',views.managecustomer,name="managecustomer"),
    path('manageseller/',views.manageseller,name="manageseller"),
    path('managesalesperson/',views.managesalesperson,name="managesalesperson"),
    path('adminsales/',views.adminsales,name="adminsales"),
    path('removeseller/<str:uid>',views.removeseller,name="removeseller"),
    path('removecustomer/<int:uid>',views.removecustomer,name="removecustomer"),
    path('removesalesperson/<str:uid>',views.removesalesperson,name="removesalesperson"),
    path('removeoffer/<str:oid>',views.removeoffer,name="removeoffer"),
    path('removeproduct/<str:pid>',views.removeproduct,name="removeproduct"),
    path('sortbydate/',views.sortbydate,name="sortbydate"),
    path('admintransaction/',views.admintransaction,name="admintransaction"),
    path('adminproductreturn/',views.adminproductreturn,name="adminproductreturn"),
    path('adminoffers/',views.adminoffers,name="adminoffers"),
    path('postaddnewadmin/',views.postaddnewadmin,name="postaddnewadmin"),
    path('adminchangepass/',views.adminchangepass,name="adminchangepass"),
    path('postaddnewsalesperson/',views.postaddnewsalesperson,name="postaddnewsalesperson"),
    path('addnewsalesperson/',views.addnewsalesperson,name="addnewsalesperson"),
    path('adminpaysalarysp/',views.adminpaysalarysp,name="adminpaysalarysp"),
    path('postspsalarypay/<str:spid>',views.postspsalarypay,name="postspsalarypay"),
    path('salespersondashboard/',views.salespersondashboard,name="salespersondashboard"),
    path('salespersonlogin/',views.salespersonlogin,name="salespersonlogin"),
    path('salespersonpostlogin/',views.salespersonpostlogin,name="salespersonpostlogin"),
    path('salespersonlogout/',views.salespersonlogout,name="salespersonlogout"),
    path('salespersonchngpass/',views.salespersonchngpass,name="salespersonchngpass"),
    path('salespersonprofile/',views.salespersonprofile,name="salespersonprofile"),
    path('salespersondelivery/',views.salespersondelivery,name="salespersondelivery"),
    path('salespersontodaydel/',views.salespersontodaydel,name="salespersontodaydel"),
    path('salespersonsalary/',views.salespersonsalary,name="salespersonsalary"),
    path('salesreport/',views.salesreport,name="salesreport"),
    path('transactionreport/',views.transactionreport,name="transactionreport"),
    path('productreturnreport/',views.productreturnreport,name="productreturnreport"),
    path('manageproduct/',views.manageproduct,name="manageproduct"),
    path('assignduty/<str:spid>',views.assignduty,name="assignduty"),

    path('sphelp',views.sphelp,name="sphelp"),
    path('sphcontactus',views.sphcontactus,name="sphcontactus"),

    path('adminviewseller/<str:sid>',views.adminviewseller,name="adminviewseller"),
    path('adminviewcustomer/<str:cid>',views.adminviewcustomer,name="adminviewcustomer"),
    path('adminviewsp/<str:spid>',views.adminviewsp,name="adminviewsp"),
    path('adminviewprod/<str:pid>',views.adminviewprod,name="adminviewprod"),

    path('spforgetPassword/<str:by>/<str:stat>',views.spforgetPassword,name="spforgetPassword"),
# Report PDF

    path('report/',views.report,name="report"),
    path('spsalaryack/<str:tid>',views.spsalaryack,name="spsalaryack"),
    path('fixchargeack/',views.fixchargeack,name="fixchargeack"),
    path('sellerpayack/<str:tranid>',views.sellerpayack,name="sellerpayack"),
    
    path('customerbill/',views.customerbill,name="customerbill"),
    path('custprodreturnpdf/',views.custprodreturnpdf,name="custprodreturnpdf"),    
    
    path('sellerpaytranpdf/',views.sellerpaytranpdf,name="sellerpaytranpdf"),
    path('productreturnpdf/',views.productreturnpdf,name="productreturnpdf"),

    path('salespdf/',views.salespdf,name="salespdf"),
    path('stockpdf/',views.stockpdf,name="stockpdf"),
    path('transactionpdf/',views.transactionpdf,name="transactionpdf"),
    
    # path('first/',views.firstTimeLogin,name="firstlogin")
]