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
    def get_queryset(self):
        return City.objects.all()
    serializer_class = CitySerializer
# ------------------------------------------------------------------
# LISTAR CIUDAD
# ------------------------------------------------------------------
    
class CityDetails(RetrieveAPIView):
    def get_queryset(self):
        return City.objects.all()
    serializer_class = CitySerializer
    
# ------------------------------------------------------------------
# ELIMINO CIUDAD
# ------------------------------------------------------------------
    
class DeleteCity(DestroyAPIView):
    def get_queryset(self):
        return City.objects.all()
    serializer_class = CitySerializer
# ------------------------------------------------------------------
# ACTUALIZAR CIUDAD
# ------------------------------------------------------------------
    
class UpdateCity(UpdateAPIView):
    def get_queryset(self):
        return City.objects.all()
    serializer_class = CitySerializer
