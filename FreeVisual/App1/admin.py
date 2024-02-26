from django.contrib import admin
from .models import ProfesionalModel, EquipoModel
# Register your models here.

admin.site.site_header = "Buenas"

class ProAdmin(admin.ModelAdmin):
    fields = ("nombre", "apellidos", "correo", "tipo de profesional")
    list_display = ("nombre", "apellidos")

admin.site.register(ProfesionalModel, ProAdmin)

@admin.register(EquipoModel)
class EquipoAdmin(admin.ModelAdmin):
    fields = ("marca", "modelo", "duenyofk")
    list_display = ("marca", "modelo")
