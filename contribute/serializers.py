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

class FundingAgencySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FUNDING_AGENCY
        fields = ('id', 'fa_name', 'fa_type', 'fa_mission', 'fa_website')

class MonitorLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MONITOR_LOCATION
        fields = ('id', 'loc_name', 'loc_lat', 'loc_long')
