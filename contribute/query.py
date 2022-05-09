# search query stuff will go here
from django.db import models


class ProjectManager(models.Manager):
    def projectASC(self):
        return self.all().order_by('project_name')
        #call: PROJECT.projectObjects.projectASC()

    # # the - sorts in reverse order
    def projectNEWEST(self):
        return self.all().order_by('-start_date')
        #call: PROJECT.projectObjects.projectNEWEST()

    def projectOLDEST(self):
        return self.all().order_by('start_date')
        #call: PROJECT.projectObjects.projectOLDEST()

    def projectACTIVE(self):
        return self.filter(is_active=True)
        #call: PROJECT.projectObjects.projectACTIVE()

    def projectCOMPLETED(self):
        return self.filter(is_active=False)
        #call: PROJECT.projectObjects.projectCOMPLETED()

    def projectbyORG(self, user_input):
        return self.filter(fk_organization=user_input)
        #call: PROJECT.projectObjects.projectbyORG()

    def projectbyLOC(self, user_input):
        return self.filter(location_name=user_input)
        #call: PROJECT.projectObjects.projectbyLOC()

    def filterwithPARAM(self, user_input):
      return self.filter(params_default__icontains=user_input)
      #call: PROJECT.projectObjects.filterwithPARAM()



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