from django.shortcuts import render
from rest_framework import generics, viewsets

from contribute import models
from contribute import serializers

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = models.PROJECT.objects.all()
    serializer_class = serializers.ProjectSerializer

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = models.ORGANIZATION.objects.all()
    serializer_class = serializers.OrganizationSerializer

## OLD VIEWS

class OrganizationListCreate(generics.ListCreateAPIView):
    queryset = models.ORGANIZATION.objects.all()
    serializer_class = serializers.OrganizationSerializer

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = models.PROJECT.objects.all()
    serializer_class = serializers.ProjectSerializer
