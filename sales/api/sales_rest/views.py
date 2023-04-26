from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import Salesperson
import json


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id"]


# Create your views here.
@require_http_methods(["GET", "POST"])
def list_salesperson(request):
    if request.method == "GET":
        salespersons = Salesperson.objects.all()
        return JsonResponse(
            {"salespersons": salespersons},
            encoder=SalespersonEncoder
        )
    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False,
        )
