from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import generics

from rest_framework.viewsets import ModelViewSet

from contribute.models import PROJECT, ORGANIZATION
from contribute.serializers import ProjectSerializer, OrganizationSerializer

class ProjectViewSet(ModelViewSet):
    queryset = PROJECT.objects.all()
    serializer_class = ProjectSerializer

class OrganizationViewSet(ModelViewSet):
    queryset = ORGANIZATION.objects.all()
    serializer_class = OrganizationSerializer

## OLD VIEWS

#model stuff
class ContactListCreate(generics.ListCreateAPIView):
    queryset = models.CONTACT.objects.all()
    serializer_class = serializers.ContactSerializer

class OrganizationListCreate(generics.ListCreateAPIView):
    queryset = models.ORGANIZATION.objects.all()
    serializer_class = serializers.OrganizationSerializer

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = models.PROJECT.objects.all()
    serializer_class = serializers.ProjectSerializer

#search stuff
