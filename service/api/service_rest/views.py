from django.shortcuts import render
from django.views.decorators.http import require_http_methods

@require_http_methods(["GET", "POST"])
def technicians_list(request):
    pass

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
