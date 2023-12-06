from django.contrib import admin
from django.urls import path, include
from . import views

app_name = "country_app"

urlpatterns = [
# ------------------------------------------------------------------
# CREAR COUNTRY
# ------------------------------------------------------------------

path('CreateCountry/',
        views.CreateCountry.as_view(),
        name='CreateCountry'),

# ------------------------------------------------------------------
# LISTAR TODAS LAS CIUDADES
# ------------------------------------------------------------------

path('ListCountry/',
        views.ListCountry.as_view(),
        name='ListCountry'),
# ------------------------------------------------------------------
#VER Country
# ------------------------------------------------------------------

path('CountryDetails/<pk>',
        views.CountryDetails.as_view(),
        name='CountryDetails'),
# ------------------------------------------------------------------
# ACTUALIZAR Country
# ------------------------------------------------------------------

path('UpdateCountry/<pk>',
        views.UpdateCountry.as_view(),
        name='UpdateCountry'),

# ------------------------------------------------------------------
# ELIMINAR EMPLEADO
# ------------------------------------------------------------------

path('DeleteCountry/<pk>',
        views.DeleteCountry.as_view(),
        name='DeleteCountry'),
# ------------------------------------------------------------------
]