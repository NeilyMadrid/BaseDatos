from django.contrib import admin
from django.urls import path, include
from .import views

app_name = "city_app"

urlpatterns = [
# ------------------------------------------------------------------
# CREAR CITY
# ------------------------------------------------------------------

path('CreateCity/',
        views.CreateCity.as_view(),
        name='CreateCity'),

# ------------------------------------------------------------------
# LISTAR TODAS LAS CIUDADES
# ------------------------------------------------------------------

path('ListCity/',
        views.ListCity.as_view(),
        name='ListCity'),
# ------------------------------------------------------------------
#VER CITY
# ------------------------------------------------------------------

path('CityDetails/<pk>/',
        views.CityDetails.as_view(),
        name='CityDetails'),
# ------------------------------------------------------------------
# ACTUALIZAR CITY
# ------------------------------------------------------------------

path('UpdateCity/<pk>/',
        views.UpdateCity.as_view(),
        name='UpdateCity'),

# ------------------------------------------------------------------
# ELIMINAR EMPLEADO
# ------------------------------------------------------------------

path('DeleteCity/<pk>/',
        views.DeleteCity.as_view(),
        name='DeleteCity'),
# ------------------------------------------------------------------
]