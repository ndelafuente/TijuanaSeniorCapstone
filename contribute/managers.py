# search query stuff will go here
from django.db import models
from contribute.parameters import PARAM_CHOICES

"""Searching for multiple criteria"""
# def filter_by_user_input(self, user_input):
#     return self.filter(
#         models.Q(title__icontains=user_input) |
#         models.Q(genre__icontains=user_input) |
#         models.Q(author__name__icontains=user_input)
#     )

class OrganizationManager(models.Manager):
    def organizationASC(self):
        return self.all().order_by('name')
        #call: Organization.organizationObjects.organizationASC()

class ProjectManager(models.Manager):
    def projectASC(self):
        return self.all().order_by('project_name')
        #call: Project.objects.projectASC()

    """Deprecated: """
    # The minus sign (-) sorts in reverse order
    # def projectNEWEST(self):
    #     return self.all().order_by('-start_date')
    #     #call: Project.objects.projectNEWEST()

    # def projectOLDEST(self):
    #     return self.all().order_by('start_date')
    #     #call: Project.objects.projectOLDEST()

    # def projectACTIVE(self):
    #     return self.filter(is_active=True)
    #     #call: Project.objects.projectACTIVE()

    # def projectCOMPLETED(self):
    #     return self.filter(is_active=False)
    #     #call: Project.objects.projectCOMPLETED()

    # def projectbyORG(self, user_input):
    #     return self.filter(fk_organization=user_input)
    #     #call: Project.objects.projectbyORG()

    # def projectbyLOC(self, user_input):
    #     return self.filter(location_name=user_input)
    #     #call: Project.objects.projectbyLOC()

    # def filterwithPARAM(self, user_input):
    #     return self.filter(params_default__icontains=user_input)
    #     #call: Project.objects.filterwithPARAM()


    """Deprecated: replaced by GeoSerializer in serializers.py"""
    # def projectasGeoJSON(objects):
    #     query = objects.all()
    #     data = list(query.values())
    #     print(data)
        
    #     geojson = {
    #         "type": "FeatureCollection",
    #         "features": [
    #         {
    #             "type": "Feature",
    #             "geometry" : {
    #                 "type": "Point",
    #                 "coordinates": [d['longitude'], d['latitude']]
    #                 },
    #             "properties": {

    #                 # "params_default" : list(d["params_default"]),
    #                 "is_approved" : str(d["is_approved"]),
    #                 "contact_name" : str(d["contact_name"]),
    #                 "contact_email" : str(d["contact_email"] ),
    #                 "project_name" : str(d["project_name"] ),
    #                 "funding_agencies" : str(d["funding_agencies"] ),
    #                 "location_name" : str(d["location_name"] ),
    #                 "latitude": d['latitude'],
    #                 "longitude": d['longitude'],
    #                 "is_active": str(d["is_active"]),
    #                 "start_date": str(d["start_date"]),
    #                 "end_date": str(d["end_date"]),
    #                 "purpose": str(d["purpose"]),
    #             }

    #                 # "Fk_organization": str(d["Fk_organization"])
    #         } for d in data]

    #     }
    #     print("\ngeojson\n")
    #     print(geojson)
    #     return geojson
    #     #call: Project.objects.projectsasGeoJSON()
