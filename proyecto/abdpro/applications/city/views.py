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
    CitySerializer
)

# ------------------------------------------------------------------
# MODELOS
# ------------------------------------------------------------------
from .models import City

# ------------------------------------------------------------------
# CREAR City
# ------------------------------------------------------------------

class CreateCity(CreateAPIView):
    serializer_class = CitySerializer
    
# ------------------------------------------------------------------
# LISTAR CIUDADES
# ------------------------------------------------------------------
    
class ListCity(ListAPIView):
    serializer_class = CitySerializer
    def get_queryset(self):
        return City.objects.all()
# ------------------------------------------------------------------
# LISTAR CIUDAD
# ------------------------------------------------------------------
    
class CityDetails(RetrieveAPIView):
    serializer_class = CitySerializer
    def get_queryset(self):
        return City.objects.all()
# ------------------------------------------------------------------
# ELIMINO CIUDAD
# ------------------------------------------------------------------
    
class DeleteCity(DestroyAPIView):
    serializer_class = CitySerializer
    def get_queryset(self):
        return City.objects.all()
# ------------------------------------------------------------------
# ACTUALIZAR CIUDAD
# ------------------------------------------------------------------
    
class UpdateCity(UpdateAPIView):
    serializer_class = CitySerializer
    def get_queryset(self):
        return City.objects.all()
