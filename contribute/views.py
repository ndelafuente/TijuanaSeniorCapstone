from rest_framework import generics, viewsets
from contribute import models, serializers

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = models.PROJECT.objects.all()
    serializer_class = serializers.ProjectSerializer

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = models.ORGANIZATION.objects.all()
    serializer_class = serializers.OrganizationSerializer

class geoJSONViewSet(generics.ListCreateAPIView):
    queryset = models.PROJECT.objects.projectasGeoJSON()
    serializer_class = serializers.ProjectSerializer
    



## OLD VIEWS

class OrganizationListCreate(generics.ListCreateAPIView):
    queryset = models.ORGANIZATION.objects.all()
    serializer_class = serializers.OrganizationSerializer

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = models.PROJECT.objects.all()
    serializer_class = serializers.ProjectSerializer

# class GeoJsonProjectList(generics.ListAPIView):
#     queryset = models.PROJECT.objects.all()
#     serializer_class = serializers.ProjectGeoJsonSerializer
