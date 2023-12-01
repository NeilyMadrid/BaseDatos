from django.contrib import admin
from django.urls import path, include
from . import views

app_name = "CountryLanguage_app"

urlpatterns = [
        path('NewCountryLanguage/',
                views.CountryLanguageAPISerializer.as_view(),
                name='NewCountryLanguage'),

]