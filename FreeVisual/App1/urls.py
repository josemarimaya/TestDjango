from django.urls import path
from .views import IndexView, ProView, IndexVue

urlpatterns = [
    #path('', IndexView, name='index'), # Index antiguo que sigue funcionando
    path('', IndexVue, name='index'),
    path('pro/<int:id>/', ProView, name='pro-detail')
]
