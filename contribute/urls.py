from django.urls import path
from . import views

urlpatterns = [
    path('api/contribute/organization', views.OrganizationListCreate.as_view() ),
    path('api/contribute/project', views.ProjectListCreate.as_view() ),
]