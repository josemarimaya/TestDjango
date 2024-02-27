from django import path
from .views import IndexView

urlpatterns = [
    path('', IndexView),
   # path('autor/<int:id>')
]
