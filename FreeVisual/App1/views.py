from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import ProfesionalModel, EquipoModel
# Create your views here.

def IndexView(request):
    "Esto es la main page"

    objeto = ProfesionalModel.objects.all().order_by("-id")
    return render(request, "index.html", {"objeto": objeto})


def AutorView(request, id):

    autor = get_object_or_404(ProfesionalModel, id=id)
    return render(request, "profesional.html", {"objeto": autor})