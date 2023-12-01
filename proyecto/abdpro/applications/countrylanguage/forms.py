from django import forms

# ------------------------------------------------------------------
# MODELO
# ------------------------------------------------------------------

from .models import CountryLanguage

# ------------------------------------------------------------------
# FORMULARIO
# ------------------------------------------------------------------
class NewCountryLanguageForm(forms.ModelForm):
    
    class Meta:
        """Meta definition for Empleadoform."""
        # Modelo al que se aplica el formulario
        model = CountryLanguage
        # Campos usados en el formulario
        fields = (
            'name',
            'idcountry',
            'district',
            'population',
        )
        # Labels de los campos del formulario
        labels = {
            'name': 'Name of city',
            'idcountry': 'id Country',
            'district': 'District',
            'population': 'population',
        }
                # Espacio para agregar características a los campos
        widgets = {
            'name': forms.TextInput(
                attrs={'class': 'ContainerCountryLanguageFormSelect'}
            ),
        }