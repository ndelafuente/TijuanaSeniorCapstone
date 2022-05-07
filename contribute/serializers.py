from rest_framework import fields, serializers
from . import models
from contribute.parameters import PARAM_CHOICES


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ORGANIZATION
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PROJECT
        fields = '__all__'
    
    params_default = fields.MultipleChoiceField(choices=PARAM_CHOICES)
