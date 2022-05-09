# search query stuff will go here
from django.db import models
import json
from django.core import serializers

class ProjectManager(models.Manager):
    def projectASC(self):
        return self.all().order_by('project_name')
        #call: PROJECT.objects.projectASC()

    # # the - sorts in reverse order
    def projectNEWEST(self):
        return self.all().order_by('-start_date')
        #call: PROJECT.objects.projectNEWEST()

    def projectOLDEST(self):
        return self.all().order_by('start_date')
        #call: PROJECT.objects.projectOLDEST()

    def projectACTIVE(self):
        return self.filter(is_active=True)
        #call: PROJECT.objects.projectACTIVE()

    def projectCOMPLETED(self):
        return self.filter(is_active=False)
        #call: PROJECT.objects.projectCOMPLETED()

    def projectbyORG(self, user_input):
        return self.filter(fk_organization=user_input)
        #call: PROJECT.objects.projectbyORG()

    def projectbyLOC(self, user_input):
        return self.filter(location_name=user_input)
        #call: PROJECT.objects.projectbyLOC()

    def filterwithPARAM(self, user_input):
      return self.filter(params_default__icontains=user_input)
      #call: PROJECT.objects.filterwithPARAM()

    def projectasGeoJSON(self):
        data = serializers.serialize('json', self.all())
        data= json.loads(data)
        print(data)

        geojson = {
            "type": "FeatureCollection",
            "features": [
            {
                "type": "Feature",
                "geometry" : {
                    "type": "Point",
                    "coordinates": [project["fields"]["longitude"], project["fields"]["latitude"]],
                    },
                "properties" : project,
            } for project in data]
        }
        print(geojson)
        output = json.dumps(geojson)
        return output
        # return data
        #call: PROJECT.objects.projectsasGeoJSON()

class OrganizationManager(models.Manager):
    def organizationASC(self):
        return self.all().order_by('name')
        #call: ORGANIZATION.organizationObjects.organizationASC()
            

class LocationManager(models.Manager):
    def locationASC(self):
        return self.all().order_by('location_name')
        #call: LOCATION.locationObjects.locationASC()



#Search for multiple criteria
# def filter_by_user_input(self, user_input):
#       return self.filter(models.Q(title__icontains=user_input) |
#                          models.Q(genre__icontains=user_input) |
#                          models.Q(author__name__icontains=user_input))