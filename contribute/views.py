from rest_framework import generics, viewsets
from contribute import models, serializers

"""Views for the Admin API"""
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = models.Organization.objects.all()
    serializer_class = serializers.OrganizationSerializer

"""View to place projects on map"""
class ProjectListAsGeoJson(generics.ListAPIView):
    # queryset = models.Project.objects.projectasGeoJSON()
    queryset = models.Project.objects.all()
    serializer_class = serializers.GeoSerializer

"""Old but Gold views"""
class OrganizationListCreate(generics.ListCreateAPIView):
    queryset = models.Organization.objects.all()
    serializer_class = serializers.OrganizationSerializer
    # search_fields = ()
    ordering_fields = ()
    # filterset_fields = ()

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer

"""Deprecated: replaced by GeoSerializer in serializers.py"""
# class GeoJsonProjectList(generics.ListAPIView):
#     queryset = models.Project.objects.all()
#     serializer_class = serializers.ProjectGeoJsonSerializer
