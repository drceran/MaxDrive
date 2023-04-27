from django.urls import path
from .views import list_salesperson, delete_salesperson, list_customer, delete_customer, list_sale, delete_sale


urlpatterns = [
    path("salespeople/", list_salesperson, name="list_salesperson"),
    path("salespeople/<int:id>/", delete_salesperson, name="delete_salesperson"),
    path("customers/", list_customer, name="list_customer"),
    path("customers/<int:id>/", delete_customer, name="delete_customer"),
    path("sales/", list_sale, name="list_sale"),
    path("sales/<int:id>", delete_sale, name="delete_sale")
]
