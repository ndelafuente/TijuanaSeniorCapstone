from rest_framework import fields, serializers
from . import models
from contribute.parameters import PARAM_CHOICES


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
        fields = '__all__'
    
    params_default = fields.MultipleChoiceField(choices=PARAM_CHOICES)
