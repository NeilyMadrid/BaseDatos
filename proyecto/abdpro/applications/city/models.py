from django.db import models
from applications.country.models import Country
# Create your models here.
class City(models.Model):
    
    nombreCity = models.CharField(
         'Name', 
          null= False,
          max_length=35,
          default=''
          )
    
    countryCode= models.ForeignKey(
         Country, 
         on_delete=models.CASCADE
          )
    
    district= models.CharField(
        'District',
         null= False,
         max_length=20,
         default='' 
        )
    
    population= models.IntegerField(
         'Population',
         null= False,
         max_length=2,
         default='0' 
         )
    
    monuments= models.CharField(
         'Monuments',
         null= False,
         max_length=45,
         default='' 
    )
    
    climate= models.CharField(
         'Climate',
         null= False,
         max_length=45,
         default='' 
    )

    search_fields = ('Name', 'countryCode',)
    list_filter = ('Name',)
    class Meta:
            verbose_name = 'Nombre City'
            verbose_name_plural = 'Nombres City'
            ordering = ['Name']
            unique_together = ('Name', 'countryCode')
    def __str__(self):
        return self.name + ' - ' + self.siglaDepartamento + str(self.id)

