from django.db import models

# Create your models here.

class ProfesionalModel(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre", null = False, blank= False) # null = False, blank= False Indica campo obligatorio, debe rellenarse
    apellidos = models.CharField(max_length=100, verbose_name="Apellidos", null = True, blank = True) # null = True, blank = True Indica campo opcional, no tiene porqué rellenarse
    correo = models.CharField(max_length=100, verbose_name="Nombre", null = False, blank= False)
    tipo_profesional = models.CharField(max_length=100, verbose_name="Tipo de Profesional")

    class Meta: # Para indicar como se va a presentar en la base de datos la información
        db_table = "Profesional"
        verbose_name = "Profesional"
        verbose_name_plural = "Profesionales"
    
    def __str__(self) -> str:
        return self.nombre
    


class EquipoModel(models.Model):
    marca = models.CharField(max_length=100, verbose_name="Marca", null = False, blank= False)
    modelo = models.CharField(max_length=100, verbose_name="Modelo", null = True, blank = True)
    duenyo_fk = models.ForeignKey(ProfesionalModel, on_delete = models.CASCADE)

    class Meta: # Para indicar como se va a presentar en la base de datos la información
        db_table = "Equipo"
        verbose_name = "Equipo"
        verbose_name_plural = "Equipos"