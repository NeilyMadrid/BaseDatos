# Generated by Django 4.2.6 on 2023-12-04 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('codigoPais', models.CharField(default='', max_length=3, verbose_name='Code')),
                ('nombrePais', models.CharField(default='', max_length=52, verbose_name='Name')),
                ('continente', models.CharField(default='Asia', verbose_name='Continent')),
                ('region', models.CharField(default='', verbose_name='Region')),
                ('superficieArea', models.DecimalField(decimal_places=2, default='0.00', max_digits=10, verbose_name='SurfaceArea')),
                ('independencia', models.SmallIntegerField(null=True, verbose_name='IndepYear')),
                ('poblacion', models.IntegerField(default=0, verbose_name='Population')),
                ('expectativaVida', models.DecimalField(decimal_places=1, max_digits=3, null=True, verbose_name='LifeExpectancy')),
                ('productointernobruto', models.DecimalField(decimal_places=2, max_digits=10, null=True, verbose_name='PIB')),
                ('productonacionalbruto', models.DecimalField(decimal_places=2, max_digits=10, null=True, verbose_name='PNB')),
                ('nombreLocal', models.CharField(default='', max_length=45, verbose_name='LocalName')),
                ('formaGobierno', models.CharField(default='', max_length=45, verbose_name='GovernmentForm')),
                ('jefeEstado', models.CharField(default='', max_length=45, verbose_name='HeadOfState')),
                ('capital', models.CharField(max_length=45, null=True, verbose_name='Capital')),
                ('segundoCodigo', models.CharField(default='', max_length=2, verbose_name='Code2')),
                ('monedaOficial', models.CharField(default='', max_length=45, verbose_name='OfficialCoin')),
                ('fronteras', models.CharField(default='', max_length=45, verbose_name='Borders')),
            ],
            options={
                'verbose_name': 'Pais',
                'verbose_name_plural': 'Paises',
                'ordering': ['nombrePais'],
                'unique_together': {('nombrePais', 'codigoPais')},
            },
        ),
    ]
