from django.shortcuts import render

from .models import Contact
from .serializers import ContactSerializer
from rest_framework import generics

class ContactListCreate(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer