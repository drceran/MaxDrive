import django
import os
import sys
import time
import json
import requests


sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()


# Import models from sales_rest, here.
# from sales_rest.models import Something
from sales_rest.models import AutomobileVO


def get_automobiles():
    print("AUTOMOBILES ARE BEING  POLLED")
    response = requests.get("http://project-beta-inventory-api-1:8000/api/automobiles/")
    content = json.loads(response.content)
    print(" Number of automobiles:"+ str(len(content["autos"])))
    for auto in content["autos"]:
        AutomobileVO.objects.update_or_create(
            vin=auto["vin"],
            sold=auto["sold"]
        )


def poll():
    while True:
        print('Sales poller polling for data')
        try:
            # Write your polling logic, here
            get_automobiles()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(10)


if __name__ == "__main__":
    poll()
