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
            'nombreCity',
            'district',
            'population',
            'monuments',
            'climate',
        )
        # Labels de los campos del formulario
        labels = {
            'nombreCity': 'Name of city',
            'district': 'District',
            'population': 'population',
            'monuments': 'Monuments',
            'climate': 'Climate',
        }
                # Espacio para agregar características a los campos
        widgets = {
            'nombreCity': forms.TextInput(
                attrs={'class': 'ContainerCityFormSelect'}
            ),
        }