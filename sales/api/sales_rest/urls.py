from django.urls import path
from .views import list_salesperson


urlpatterns = [
    path("salespeople/", list_salesperson, name="list_salesperson"),
]
