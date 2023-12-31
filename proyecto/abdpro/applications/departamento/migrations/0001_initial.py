# Generated by Django 4.2.6 on 2023-11-24 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Trabajo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombreTrabajo', models.CharField(max_length=50, verbose_name='nombreTrabajo')),
                ('siglaTrabajo', models.CharField(max_length=2, unique=True, verbose_name='siglaTrabajo')),
                ('activoTrabajo', models.BooleanField(default=False, verbose_name='active')),
            ],
            options={
                'verbose_name': 'Trabajo',
                'verbose_name_plural': 'Trabajos',
                'ordering': ['nombreTrabajo'],
                'unique_together': {('nombreTrabajo', 'siglaTrabajo')},
            },
        ),
        migrations.CreateModel(
            name='Departamento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombreDepartamento', models.CharField(max_length=50, verbose_name='nombreDepartamento')),
                ('siglaDepartamento', models.CharField(max_length=2, unique=True, verbose_name='siglaDepartamento')),
                ('activoDepartamento', models.BooleanField(default=False, verbose_name='active')),
            ],
            options={
                'verbose_name': 'Nombre Departamento',
                'verbose_name_plural': 'Nombres Departamentos',
                'ordering': ['nombreDepartamento'],
                'unique_together': {('nombreDepartamento', 'siglaDepartamento')},
            },
        ),
    ]
