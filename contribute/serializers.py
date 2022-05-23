from django.forms import ValidationError
from rest_framework import serializers
from rest_framework.fields import MultipleChoiceField
from contribute import models
from contribute.parameters import PARAM_CHOICES
from django.contrib.gis.geos import Point
from rest_framework_gis.serializers import GeoFeatureModelSerializer, GeometrySerializerMethodField


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = serializers.ALL_FIELDS
        # use `exlude` instead of `fields` to igrore specific fields
        # exclude = ['example_field_name'] 

    # @NOTE: ModelSerializer (currently) does not have a default for
    # MultipleChoiceField so we must manually link it
    # FIXME???
    params_default = MultipleChoiceField(choices=PARAM_CHOICES)
    
    def to_internal_value(self, data):
        # NOTE: DateField doesn't currently support the allow_blank keyword argument
        # So we must convert the empty string to None before the field is validated
        
        # Clean the date fields
        # TODO convert to function
        # TODO parse through all date fields using field type
        date_fields_to_clean = ['start_date', 'end_date'] 
        for field_name in date_fields_to_clean:
            if data[field_name] == '':
                data[field_name] = None
        
        # Finish processing the data
        return super(ProjectSerializer, self).to_internal_value(data)
    
    def validate_end_date(self, value):
        """
        Validation for the end_date field
        """
        print("validate_end_date")
        print("value", value)
        is_active = self.fields.get('is_active')
        print("is_active", is_active)
        # Allow project end_date to be blank only if is_active is True
        if not(is_active or value):
            raise ValidationError("Project must either be active or have an end_date")
        return value
    


class GeoSerializer(GeoFeatureModelSerializer):
    other_point = GeometrySerializerMethodField()
    fk_organization = serializers.CharField(source='fk_organization.name')

    def get_other_point(self, obj):
        return Point(obj.longitude, obj.latitude)

    class Meta:
        model = models.Project
        geo_field = 'other_point'
        fields = serializers.ALL_FIELDS


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Organization
        fields = serializers.ALL_FIELDS
