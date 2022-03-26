from django.urls import path
from . import views

urlpatterns = [
    path('api/contribute/contact', views.ContactListCreate.as_view() ),
]