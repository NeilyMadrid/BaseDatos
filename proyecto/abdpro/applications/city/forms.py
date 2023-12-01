# ------------------------------------------------------------------
# ------------------------------------------------------------------

from django import forms

# ------------------------------------------------------------------
# MODELO
# ------------------------------------------------------------------

from .models import City

# ------------------------------------------------------------------
# FORMULARIO
# ------------------------------------------------------------------
class NewCityForm(forms.ModelForm):
    """Form definition for City."""
    class Meta:
        """Meta definition for Empleadoform."""
        # Modelo al que se aplica el formulario
        model = City
        # Campos usados en el formulario
        fields = (
            'Name',
            'District',
            'Population',
            'Monuments',
            'Climate',
        )
        # Labels de los campos del formulario
        labels = {
            'Name': 'Name of city',
            'District': 'District',
            'Population': 'population',
            'Monuments': 'Monuments',
            'Climate': 'Climate',
        }
                # Espacio para agregar características a los campos
        widgets = {
            'Name': forms.TextInput(
                attrs={'class': 'ContainerCityFormSelect'}
            ),
        }