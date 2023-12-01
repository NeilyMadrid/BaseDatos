from django.db import models
from applications.country.models import Country

class City(models.Model):
    nombreCity = models.CharField(
        'Name',
        null=False,
        max_length=35,
        default=''
    )

    countryCode = models.ForeignKey(
        Country,
        on_delete=models.CASCADE
    )

    district = models.CharField(
        'District',
        null=False,
        max_length=20,
        default=''
    )

    population = models.IntegerField(
        'Population',
        null=False,
        default=0  # Se cambió max_length a default
    )

    monuments = models.CharField(
        'Monuments',
        null=False,
        max_length=45,
        default=''
    )

    climate = models.CharField(
        'Climate',
        null=False,
        max_length=45,
        default=''
    )

    class Meta:
        verbose_name = 'Nombre City'
        verbose_name_plural = 'Nombres City'
        ordering = ['nombreCity']  
        unique_together = ('nombreCity', 'countryCode')

    def __str__(self):
        return self.nombreCity + ' - ' + self.district + ' - ' + str(self.id)