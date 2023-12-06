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
    CountrySerializer
)

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import Country

# ------------------------------------------------------------------
# CREAR Country
# ------------------------------------------------------------------

class CreateCountry(CreateAPIView):
    serializer_class = CountrySerializer
    
# ------------------------------------------------------------------
# LISTAR PAISES
# ------------------------------------------------------------------
    
class ListCountry(ListAPIView):
    serializer_class = CountrySerializer
    def get_queryset(self):
        return Country.objects.all()
# ------------------------------------------------------------------
# LISTAR CIUDAD
# ------------------------------------------------------------------
    
class CountryDetails(RetrieveAPIView):
    serializer_class = CountrySerializer
    def get_queryset(self):
        return Country.objects.all()
# ------------------------------------------------------------------
# ELIMINO CIUDAD
# ------------------------------------------------------------------
    
class DeleteCountry(DestroyAPIView):
    serializer_class = CountrySerializer
    def get_queryset(self):
        return Country.objects.all()
# ------------------------------------------------------------------
# ACTUALIZAR CIUDAD
# ------------------------------------------------------------------
    
class UpdateCountry(UpdateAPIView):
    serializer_class = CountrySerializer
    def get_queryset(self):
        return Country.objects.all()
