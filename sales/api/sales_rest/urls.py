from django.urls import path
from .views import list_salesperson, details_salesperson, list_customer, details_customer, list_sale, details_sale, list_automobileVO, salesperson_sale_history


urlpatterns = [
    path("salespeople/", list_salesperson, name="list_salesperson"),
    path("salespeople/<int:id>/", details_salesperson, name="details_salesperson"),
    path("salespeople/<int:id>/sales", salesperson_sale_history, name="salesperson_sale_history"),
    path("customers/", list_customer, name="list_customer"),
    path("customers/<int:id>/", details_customer, name="details_customer"),
    path("sales/", list_sale, name="list_sale"),
    path("sale/<int:id>", details_sale, name="details_sale"),
    path("automobiles/", list_automobileVO, name="list_automobileVO"),
]
