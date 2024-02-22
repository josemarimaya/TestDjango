from django.contrib import admin
from .models import ProfesionalModel, EquipoModel
# Register your models here.

class ProAdmin(admin.ModelAdmin):
    fields = ("nombre", "apellidos", "correo", "tipo de profesional")
    list_display = ("nombre", "apellidos")

admin.site.register(ProfesionalModel, ProAdmin)
