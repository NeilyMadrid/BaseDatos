from django.db import models

# Create your models here.
class Country(models.Model):
    codigoPais= models.CharField(
         'code', 
         max_length=3,
         null=False,
         default=''
         )
   
    nombrePais= models.CharField(
        'Name', 
        max_length=52, 
        null=False,
        default=''
        )
    
    continente = models.CharField(
         'Continent', 
         null=False,
         default='Asia'
         )
    
    region = models.CharField(
         'Region', 
         null=False,
         default='' 
    )

    superficieArea = models.DecimalField(
         'SurfaceArea', 
         max_digits=10,
         decimal_places=2,
         null=False,
         default='0.00' 
    )

    independencia = models.SmallIntegerField(
         'IndepYear', 
         max_length=2,
         null=True 
    )

    poblacion= models.IntegerField(
         'Population',
         max_length=2,
         null=False,
         default='0'
    )

    expectativaVida= models.DecimalField(
         'LifeExpectancy',
         max_digits=3,
         decimal_places=1,
         default='NULL'
    )
    
    productointernobruto= models.DecimalField(
        'PIB',
         max_digits=10,
         decimal_places=2,
         default='NULL'
    )

    productonacionalbruto= models.DecimalField(
        'PNB',
         max_digits=10,
         decimal_places=2,
         default='NULL'
    )

    nombreLocal=models.CharField(
         'LocalName',
         max_length=45,
         null=False,
         default=''
    )

    formaGobierno = models.CharField(
         'GovernmentForm',
         max_length=45,
         null=False,
         default=''
    )

    jefeEstado = models.CharField(
         'HeadOfState',
         max_length=45,
         null=False,
         default=''
    )

    capital = models.CharField(
         'Capital',
         max_length=45,
         default='NULL'
    )

    segundoCodigo = models.CharField(
         'Code2',
         max_length=2,
         null=False,
         default=''
    )

    monedaOficial = models.CharField(
         'OfficialCoin',
         max_length=45,
         null=False,
         default=''
    )

    fronteras = models.CharField(
         'Borders',
         max_length=45,
         null=False,
         default=''
    )



    search_fields = ('Name', 'Code',)
    list_filter = ('Name',)
    class Meta:
            verbose_name = 'Pais'
            verbose_name_plural = 'Paises'
            ordering = ['Name']
            unique_together = ('Name', 'Code')
    def __str__(self):
        return self.Name + ' - ' + self.Code + str(self.id)

