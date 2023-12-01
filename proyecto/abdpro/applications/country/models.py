from django.db import models

class Country(models.Model):
    codigoPais = models.CharField(
        'Code',
        max_length=3,
        null=False,
        default=''
    )

    nombrePais = models.CharField(
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
        null=True 
    )

    poblacion = models.IntegerField(
        'Population',
        null=False,
        default=0
    )

    expectativaVida = models.DecimalField(
        'LifeExpectancy',
        max_digits=3,
        decimal_places=1,
        null=True
    )
    
    productointernobruto = models.DecimalField(
        'PIB',
        max_digits=10,
        decimal_places=2,
        null=True
    )

    productonacionalbruto = models.DecimalField(
        'PNB',
        max_digits=10,
        decimal_places=2,
        null=True
    )

    nombreLocal = models.CharField(
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
        null=True
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
        ordering = ['nombrePais']  
        unique_together = ('nombrePais', 'codigoPais')  

    def __str__(self):
        return f"{self.nombrePais} - {self.codigoPais} - {str(self.id)}"
