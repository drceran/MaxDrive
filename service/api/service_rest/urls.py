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
    path("technicians/<int:id>", technician_detail, name="technician_detail"),
    path("appointments/", appointments_list, name="appointments_list"),
    path("appointments/<int:id>", appointments_detail, name="appointments_detail"),
    path("appointments/<int:id>/cancel/", cancel_appointment, name="cancel_appointment"),
    path("appointments/<int:id>/finish/", finished_appointment, name="finished_appointment"),

]
