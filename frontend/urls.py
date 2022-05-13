from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ),
    path('home', views.index),
    path('contribute', views.contribute),
    path('map', views.map),
    path('about', views.about)
]