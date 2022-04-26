from rest_framework import serializers
from . import models


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CONTACT
        fields = ("id", "first_name", "last_name", "email", "position")

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ORGANIZATION
        fields = (
            "id", "name", "type", "description", "website", "email",
            "address", "city", "state", "zip_code", "country"
        )

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PROJECT
        fields = (
            "id", "created_at", "project_name", "fk_organization",
            "fk_contact", "funding_agencies", "parameters_monitored",
            "fk_location", "is_active", "start_date", "end_date", "purpose"
        )
