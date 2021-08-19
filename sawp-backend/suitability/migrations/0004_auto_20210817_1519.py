# Generated by Django 3.2.5 on 2021-08-17 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('suitability', '0003_boundary'),
    ]

    operations = [
        migrations.AddField(
            model_name='boundary',
            name='file_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='raster',
            name='file_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='vector',
            name='file_name',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
