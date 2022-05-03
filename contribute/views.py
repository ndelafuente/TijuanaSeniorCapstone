from ast import Or
from pickle import FALSE, TRUE
from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import generics
from contribute.models import ORGANIZATION, CONTACT, PROJECT, LOCATION
from django.db.models.functions import Length, Upper


class ContactListCreate(generics.ListCreateAPIView):
    queryset = models.CONTACT.objects.all()
    serializer_class = serializers.ContactSerializer

class OrganizationListCreate(generics.ListCreateAPIView):
    queryset = models.ORGANIZATION.objects.all()
    serializer_class = serializers.OrganizationSerializer

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = models.PROJECT.objects.all()
    serializer_class = serializers.ProjectSerializer



# # search query stuff will go here

# #order projects by ascending order with name (alphabetically)
# PROJECT.objects.all().order_by(Length('project_name').asc())

# #order organizations by ascending order with name (alphabetically)
# ORGANIZATION.objects.order_by(Length('name').asc())


# #order projects by most recent start date
# # the - sorts in reverse order
# PROJECT.objects.order_by('-start_date')
# PROJECT.objects.order_by('start_date')


# #is the project active
# PROJECT.objects.filter(is_active = TRUE)
# #is the project completed
# PROJECT.objects.filter(is_active = FALSE)


# #search for projects from a certain organization
# #lookup_organization = input from frontend (organization name)
# PROJECT.objects.filter(fk_organization = lookup_organization) #organization needs to be passed in by front end


# #search for projects from a certain location
# #lookup_location = input from frontend (location name)
# PROJECT.objects.filter(location = lookup_location) #organization needs to be passed in by front end



# #sort projects by if they user certain parameters
# #front end needs to pass in a variable for me to filter projects by
# #front end needs to give me the number of parameters to filter by as well
# PROJECT.objects.exists(parameter = 'params_default')  #obvio this is not logistically correct yet








