# Generated by Django 4.0.3 on 2023-04-27 18:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='automobilevo',
            name='vin',
            field=models.CharField(max_length=17, unique=True),
        ),
        migrations.AlterField(
            model_name='sale',
            name='automobile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='automobiles', to='sales_rest.automobilevo'),
        ),
        migrations.AlterField(
            model_name='sale',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customers', to='sales_rest.customer'),
        ),
        migrations.AlterField(
            model_name='sale',
            name='salesperson',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='salespersom', to='sales_rest.salesperson'),
        ),
    ]
