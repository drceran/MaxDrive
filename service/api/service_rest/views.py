from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Technician, Appointment, AutomobileVO
from common.json import ModelEncoder
import json

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "employee_id",
        "first_name",
        "last_name",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician"
    ]

    encoders={
        "technician":TechnicianEncoder()
    }

@require_http_methods(["GET", "POST"])
def technicians_list(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse({"technicians": technicians}, encoder=TechnicianEncoder)
    else: #IOW, POST
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(technician, encoder=TechnicianEncoder, safe=False)


@require_http_methods(["DELETE"])
def technician_detail(request, id):
    count, _ = Technician.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})

@require_http_methods(["GET", "POST"])
def appointments_list(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse({"appointments": appointments}, encoder=AppointmentEncoder)
    else: #IOW POST
        content = json.loads(request.body)
        try:
            technician_id = content["technician"]
            technician = Technician.objects.get(id=technician_id)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse({"message": "technician does not exist"})
        appointment = Appointment.objects.create(**content)
        return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)

@require_http_methods(["DELETE"])
def appointments_detail(request, id):
    count, _ = Appointment.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count>0})


@require_http_methods(["PUT"])
def cancel_appointment(request, id):
    Appointment.objects.filter(id=id).update(status="cancel")
    appointment = Appointment.objects.filter(id=id)
    return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)

@require_http_methods(["PUT"])
def finished_appointment(request, id):
    Appointment.objects.filter(id=id).update(status="finish")
    appointment = Appointment.objects.filter(id=id)
    return JsonResponse(appointment, encoder=AppointmentEncoder, safe=False)
