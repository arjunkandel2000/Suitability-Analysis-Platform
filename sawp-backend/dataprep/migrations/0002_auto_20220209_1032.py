# Generated by Django 3.2.5 on 2022-02-09 04:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dataprep', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BufferVector',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('file_name', models.CharField(max_length=200)),
                ('file', models.FileField(blank=True, max_length=255, null=True, upload_to='dataprep/buffervector/')),
            ],
        ),
        migrations.CreateModel(
            name='ClipRaster',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('file_name', models.CharField(max_length=200)),
                ('file', models.FileField(blank=True, max_length=255, null=True, upload_to='dataprep/clipraster/')),
            ],
        ),
        migrations.CreateModel(
            name='ClipVector',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('file_name', models.CharField(max_length=200)),
                ('file', models.FileField(blank=True, max_length=255, null=True, upload_to='dataprep/clipvector/')),
            ],
        ),
        migrations.CreateModel(
            name='MergeVectors',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('file_name', models.CharField(max_length=200)),
                ('file', models.FileField(blank=True, max_length=255, null=True, upload_to='dataprep/mergevectors/')),
            ],
        ),
        migrations.CreateModel(
            name='PolygonToPoints',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('file_name', models.CharField(max_length=200)),
                ('file', models.FileField(blank=True, max_length=255, null=True, upload_to='dataprep/polygontopoints/')),
            ],
        ),
        migrations.CreateModel(
            name='RasterToVector',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('file_name', models.CharField(max_length=200)),
                ('file', models.FileField(blank=True, max_length=255, null=True, upload_to='dataprep/rastertovector/')),
            ],
        ),
        migrations.CreateModel(
            name='ShapefileToGeojson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('file_name', models.CharField(max_length=200)),
                ('file', models.FileField(blank=True, max_length=255, null=True, upload_to='dataprep/shapefiletogeojson/')),
            ],
        ),
        migrations.CreateModel(
            name='VectorToRaster',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('file_name', models.CharField(max_length=200)),
                ('file', models.FileField(blank=True, max_length=255, null=True, upload_to='dataprep/vectortoraster/')),
            ],
        ),
        migrations.CreateModel(
            name='VectorToShapefile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('file_name', models.CharField(max_length=200)),
                ('file', models.FileField(blank=True, max_length=255, null=True, upload_to='dataprep/vectortoshapefile/')),
            ],
        ),
        migrations.DeleteModel(
            name='DataPrep',
        ),
    ]
