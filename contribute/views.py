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

class FundingAgencyListCreate(generics.ListCreateAPIView):
    queryset = models.FUNDING_AGENCY.objects.all()
    serializer_class = serializers.FundingAgencySerializer

class MonitorLocationListCreate(generics.ListCreateAPIView):
    queryset = models.MONITOR_LOCATION.objects.all()
    serializer_class = serializers.MonitorLocationSerializer
