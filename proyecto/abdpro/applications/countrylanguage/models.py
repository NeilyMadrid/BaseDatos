from django.db import models
from applications.country.models import Country
# Create your models here.

class CountryLanguage(models.Model):
    idiomas= models.CharField(
         'Language', 
         max_length=30,
         null=False,
         )
   
    IsOfficial= models.BooleanField(
        'IsOfficial',  
        null=False,
        default=False
        )
    
    porcentaje = models.DecimalField(
         'Percentage', 
         max_digits=4,
         decimal_places=1,
         null=False,
         default='0.0'
         )
    
    alfabeto = models.CharField(
         'Alphabet', 
         null=False,
         default='' 
    )

    numeroHablantes = models.IntegerField(
         'NumSpeakers', 
         max_length=2,
         null=False,
         default='' 
    )

    pais = models.ManyToManyField(Country)


    class Meta:
            verbose_name = 'CountryLanguage'
            verbose_name_plural = 'CountryLanguage'
    def __str__(self):
        return self.CountryLanguage + ' - ' + self.CountryLanguage + str(self.id)


