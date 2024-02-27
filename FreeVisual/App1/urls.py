from django import path
from .views import IndexView, ProView

urlpatterns = [
    path('', IndexView),
    path('pro/<int:id>', ProView)
]
