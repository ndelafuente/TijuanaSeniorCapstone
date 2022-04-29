from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import generics

class ContactListCreate(generics.ListCreateAPIView):
    queryset = models.CONTACT.objects.all()
    serializer_class = serializers.ContactSerializer

class OrganizationListCreate(generics.ListCreateAPIView):
    queryset = models.ORGANIZATION.objects.all()
    serializer_class = serializers.OrganizationSerializer

class ParameterListCreate(generics.ListCreateAPIView):
    queryset = models.PARAMETERS.objects.all()
    serializer_class = serializers.ParameterSerializer

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = models.PROJECT.objects.all()
    serializer_class = serializers.ProjectSerializer
