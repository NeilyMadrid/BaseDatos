from django.shortcuts import render
from django.urls import reverse_lazy

# Create your views here.

# ------------------------------------------------------------------
# APIS
# ------------------------------------------------------------------
from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
    # DetailView
    RetrieveAPIView,
    # Delete
    DestroyAPIView,
    # Actualizar
    UpdateAPIView,
    # Recupera y actualiza
    RetrieveUpdateAPIView,
    # Recupera y elimina
    RetrieveDestroyAPIView,
)

from .serializer import (
    CountryLanguageSerializer
)

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import CountryLanguage

# ------------------------------------------------------------------
# CREAR ContryLanguage
# ------------------------------------------------------------------

class CreateCountryLanguage(CreateAPIView):
    serializer_class = CountryLanguageSerializer
    
# ------------------------------------------------------------------
# LISTAR CountryLanguage
# ------------------------------------------------------------------
    
class ListCountryLanguage(ListAPIView):
    serializer_class = CountryLanguageSerializer
    def get_queryset(self):
        return CountryLanguage.objects.all()
# ------------------------------------------------------------------
# LISTAR Un lenguaje
# ------------------------------------------------------------------
    
class CountryLanguageDetails(RetrieveAPIView):
    serializer_class = CountryLanguageSerializer
    def get_queryset(self):
        return CountryLanguage.objects.all()
# ------------------------------------------------------------------
# ELIMINO CountryLanguage
# ------------------------------------------------------------------
    
class DeleteCountryLanguage(DestroyAPIView):
    serializer_class = CountryLanguageSerializer
    def get_queryset(self):
        return CountryLanguage.objects.all()
# ------------------------------------------------------------------
# ACTUALIZAR Countrylanguage
# ------------------------------------------------------------------
    
class UpdateCountryLanguage(UpdateAPIView):
    serializer_class = CountryLanguageSerializer
    def get_queryset(self):
        return CountryLanguage.objects.all()
