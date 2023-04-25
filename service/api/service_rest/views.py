from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Technician, Appointment
from common.json import ModelEncoder
import json

class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "employee_id",
        "first_name",
        "last_name"
    ]

@require_http_methods(["GET", "POST"])
def technicians_list(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse({"technicians": technicians}, encoder=TechnicianListEncoder)
    else: #IOW, POST
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(technician, encoder=TechnicianListEncoder, safe=False)


@require_http_methods(["DELETE"])
def technician_detail(request, id):
    pass

@require_http_methods(["GET", "POST"])
def appointments_list(request):
    pass

@require_http_methods(["DELETE"])
def appointments_detail(request, id):
    pass


@require_http_methods(["PUT"])
def cancel_appointment(request, id):
    pass

@require_http_methods(["PUT"])
def finished_appointment(request, id):
    pass
