from django.urls import path
from .views import (
    technicians_list,
    technician_detail,
    appointments_list,
    appointments_detail,
    cancel_appointment,
    finished_appointment
)

urlpatterns = [
    path("technicians/", technicians_list, name="technicians_list"),
    path("technicians/<id:id>", technician_detail, name="technician_detail"),
    path("appointments/", appointments_list, name="appointments_list"),
    path("appointments/<id:id>", appointments_detail, name="appointments_detail"),
    path("appointments/<id:id>/cancel/", cancel_appointment, name="cancel_appointment"),
    path("appointments/<id:id>/finish/", finished_appointment, name="finished_appointment"),

]
