from rest_framework import fields, serializers
from contribute import models
from contribute.parameters import PARAM_CHOICES
from django.contrib.gis.geos import Point
from rest_framework_gis.serializers import GeoFeatureModelSerializer, GeometrySerializerMethodField


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PROJECT
        fields = '__all__'

    params_default = fields.MultipleChoiceField(choices=PARAM_CHOICES)


class GeoSerializer(GeoFeatureModelSerializer):
    other_point = GeometrySerializerMethodField()
    # fk_organization = models.ORGANIZATION.objects.get(pk=1).name
    fk_organization = serializers.CharField(source='fk_organization.name')

    def get_other_point(self, obj):
        return Point(obj.longitude, obj.latitude)

    class Meta:
        model = models.PROJECT
        geo_field = 'other_point'
        fields = '__all__'


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ORGANIZATION
        fields = '__all__'
