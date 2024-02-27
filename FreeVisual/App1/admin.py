from django.contrib import admin
from .models import ProfesionalModel, EquipoModel, TrabajoModel
# Register your models here.

admin.site.site_header = "Buenas"

class ProAdmin(admin.ModelAdmin):
    fields = ("nombre", "apellidos", "correo", "tipo_profesional")
    list_display = ("nombre", "apellidos")

admin.site.register(ProfesionalModel, ProAdmin)

@admin.register(EquipoModel)
class EquipoAdmin(admin.ModelAdmin): # Hay que corregir que realmente el equipo le pertenece a un profesional por ende el fk debe de estar en profesional y no aquí
    fields = ("marca", "modelo", "duenyo_fk")
    list_display = ("marca", "modelo")

@admin.register(TrabajoModel)
class TrabajoAdmin(admin.ModelAdmin):
    fields = ("evento", "dia_comienzo", "dia_finalizacion", "pro_fk")
    list_display = ("evento", "dia_comienzo", "dia_finalizacion")