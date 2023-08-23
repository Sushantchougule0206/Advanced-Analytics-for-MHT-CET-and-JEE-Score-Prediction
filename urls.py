from django.urls import path
from .views import cetscoreprediction, jeescoreprediction
urlpatterns = [
    path('cetprediction', cetscoreprediction),
    path('jeescoreprediction', jeescoreprediction)
]
