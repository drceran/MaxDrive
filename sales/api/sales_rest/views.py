from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import Salesperson, Customer, Sale, AutomobileVO
import json


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", ]


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id", "id"]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["first_name", "last_name", "address", "phone_number", "id"]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = ["automobile", "salesperson", "customer", "price", "id"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder(),
    }


@require_http_methods(["GET", "POST", "DELETE"])
def list_salesperson(request):
    if request.method == "GET":
        salespersons = Salesperson.objects.all()
        return JsonResponse(
            {"salespersons": salespersons},
            encoder=SalespersonEncoder,
            safe=False,
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def details_salesperson(request, id=None):
    if request.method == "DELETE":
        try:
            count, _ = Salesperson.objects.filter(id=id).delete()
            if count == 0:
                return JsonResponse({"message": "No salesperson found"}, status=404)
            return JsonResponse({"deleted": count > 0})
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Salesperson does not exist."})


@require_http_methods(["GET", "POST"])
def list_customer(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            safe=False,
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                {"customer": customer},
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Invalid customer information"}, status=422)

@require_http_methods(["DELETE"])
def details_customer(request, id=None):
    if request.method == "DELETE":
        count, _ = Customer.objects.filter(id=id).delete()
        if count == 0:
            return JsonResponse({"message": "Customer not found"})
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def list_sale(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
            safe=False,
        )
    elif request.method == "POST":
        content = json.loads(request.body)

        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse({"message": "VIN number can not be found"})

        try:
            salesperson = Salesperson.objects.get(id=content["salesperson"])
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Salesperson can not be found"})

        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Customer can not be found"})
        try:
            sale = Sale.objects.create(**content)
            return JsonResponse(
                {"sale": sale},
                encoder=SaleEncoder,
                safe=False,
            )
        except Sale.DoesNotExist:
            return JsonResponse({"message": "Invalid sale information"}, status=422)

@require_http_methods(["DELETE"])
def details_sale(request, id=None):
    if request.method == "DELETE":
        try:
            sale = Sale.objects.get(id=id)
            sale.delete()
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,
            )
        except Sale.DoesNotExist:
            return JsonResponse({"message": "Sale does not exist."})


@require_http_methods(["GET"])
def list_automobileVO(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.filter(sold=False)
        return JsonResponse(
            {"automobiles": automobiles},
            encoder=AutomobileVOEncoder,
        )



# Hangisi dogru metodlarin- sadullah a sor.
# @require_http_methods(["DELETE"])
# def delete_salesperson(request, id):
#     if request.method == "DELETE":
#         try:
#             salesperson = Salesperson.objects.get(id=id)
#             salesperson.delete()
#             return JsonResponse(
#                 salesperson,
#                 encoder=SalespersonEncoder,
#                 safe=False,
#             )
#         except Salesperson.DoesNotExist:
#             return JsonResponse({"message": "Salesperson does not exist."})
