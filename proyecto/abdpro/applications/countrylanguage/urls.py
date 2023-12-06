from django.contrib import admin
from django.urls import path, include
from . import views

app_name = "countrylanguage_app"

urlpatterns = [
# ------------------------------------------------------------------
# CREAR CountryLanguage
# ------------------------------------------------------------------

path('CreateCountryLanguage/',
        views.CreateCountryLanguage.as_view(),
        name='CreateCountryLanguage'),

# ------------------------------------------------------------------
# LISTAR TODAS LOS IDIOMAS
# ------------------------------------------------------------------

path('ListCountryLanguage/',
        views.ListCountryLanguage.as_view(),
        name='ListCountryLanguage'),
# ------------------------------------------------------------------
#VER CountryLanguage
# ------------------------------------------------------------------

path('CountryLanguageDetails/<pk>',
        views.CountryLanguageDetails.as_view(),
        name='CountryLanguageDetails'),
# ------------------------------------------------------------------
# ACTUALIZAR CountryLanguage
# ------------------------------------------------------------------

path('UpdateCountryLanguage/<pk>',
        views.UpdateCountryLanguage.as_view(),
        name='UpdateCountryLanguage'),

# ------------------------------------------------------------------
# ELIMINAR COUNTRYLANGUAGE
# ------------------------------------------------------------------

path('DeleteCountryLanguage/<pk>',
        views.DeleteCountryLanguage.as_view(),
        name='DeleteCountryLanguage'),
# ------------------------------------------------------------------
]