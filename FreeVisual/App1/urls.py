from django.urls import path
from .views import IndexView, ProView

urlpatterns = [
    path('', IndexView, name='index'),
    path('pro/<int:id>/', ProView, name='pro-detail')
]
