# Generated by Django 5.0.4 on 2024-09-30 11:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('leave_management', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='department',
        ),
    ]
