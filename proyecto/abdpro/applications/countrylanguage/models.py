from django.db import models
from applications.country.models import Country

class CountryLanguage(models.Model):
    language = models.CharField(
        'Language',
        max_length=30,
        null=False
    )

    is_official = models.BooleanField(
        'IsOfficial',
        null=False,
        default=False
    )

    percentage = models.DecimalField(
        'Percentage',
        max_digits=4,
        decimal_places=1,
        null=False,
        default=0.0
    )

    alphabet = models.CharField(
        'Alphabet',
        null=False,
        default=''
    )

    num_speakers = models.IntegerField(
        'NumSpeakers',
        null=False,
        default=0
    )

    countries = models.ManyToManyField(Country)

    class Meta:
        verbose_name = 'CountryLanguage'
        verbose_name_plural = 'CountryLanguages'

    def __str__(self):
        return f'{self.language} - {self.id}'
