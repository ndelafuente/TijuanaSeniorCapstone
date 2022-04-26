from rest_framework import serializers
from . import models


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CONTACT
        fields = ('id', 'first_name', 'last_name', 'email', 'position')

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ORGANIZATION
        fields = ('id', 'org_name', 'org_class', 'org_description', 'org_website', 'org_email',
            'org_address', 'org_city', 'org_state', 'org_zip', 'org_country', 'org_title')

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PROJECT
        fields = ('id', 'project_name', 'project_org', 'project_fa', 'project_loc', 'loc_lat', 'loc_long', 'active_status', 'tools_used', 'project_startdate', 'project_enddate')
