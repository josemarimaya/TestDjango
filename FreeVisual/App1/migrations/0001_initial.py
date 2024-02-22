# Generated by Django 5.0.2 on 2024-02-22 12:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ProfesionalModel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("nombre", models.CharField(max_length=100, verbose_name="Nombre")),
                (
                    "apellidos",
                    models.CharField(
                        blank=True, max_length=100, null=True, verbose_name="Apellidos"
                    ),
                ),
                ("correo", models.CharField(max_length=100, verbose_name="Nombre")),
                (
                    "tipo_profesional",
                    models.CharField(
                        max_length=100, verbose_name="Tipo de Profesional"
                    ),
                ),
                ("equipo", models.CharField(max_length=100, verbose_name="Equipo")),
            ],
            options={
                "verbose_name": "Profesional",
                "verbose_name_plural": "Profesionales",
                "db_table": "Profesional",
            },
        ),
        migrations.CreateModel(
            name="EquipoModel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("marca", models.CharField(max_length=100, verbose_name="Marca")),
                (
                    "modelo",
                    models.CharField(
                        blank=True, max_length=100, null=True, verbose_name="Modelo"
                    ),
                ),
                (
                    "duenyo_fk",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="App1.profesionalmodel",
                    ),
                ),
            ],
        ),
    ]
