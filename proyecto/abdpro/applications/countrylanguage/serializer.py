from rest_framework import serializers, pagination

from .models import(
    
    CountryLanguage
)

class CountryLanguage(serializers.ModelSerializer):
    class Meta:
        model = CountryLanguage
        fields = ('__all__')
        