from django.db import models

# Create your models here.

class ProfesionalModel(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre")