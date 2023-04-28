from django.db import models

class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name= models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100, unique=True)


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=20)

    def __str__(self):
        return self.vin


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.TextField()
    status = models.CharField(max_length=20)
    vin = models.CharField(max_length=20)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.PROTECT
    )
