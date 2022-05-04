from rest_framework import fields, serializers

from contribute import models
from contribute.parameters import PARAM_CHOICES

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PROJECT
        fields = '__all__'


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ORGANIZATION
        fields = '__all__'

## Old serializers

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CONTACT
        fields = ("id", "first_name", "last_name", "email", "position")

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ORGANIZATION
        fields = (
            "id", "name", "type", "description", "website", "email",
            "address", "city", "state", "zip", "country"
        )

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PROJECT
        fields = '__all__'
    
    params_default = fields.MultipleChoiceField(choices=PARAM_CHOICES)
