from pickle import NONE, TRUE
from ssl import Options
from django.db import models

class CONTACT(models.Model):
    """
    Contact information for person who is submitting the form
    """
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    position = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name

    # created_at = models.DateTimeField(auto_now_add=True)


class ORGANIZATION(models.Model):
    """
    Information for the organization submitting the form
    """
    org_name = models.CharField(max_length=100)
    org_class = models.CharField(max_length=100)
    org_description = models.CharField(max_length=500)
    org_website = models.CharField(max_length=100)
    org_email = models.EmailField(max_length=100)
    org_address = models.CharField(max_length=100)
    org_city = models.CharField(max_length=50)
    org_state = models.CharField(max_length=10)
    org_zip = models.IntegerField()
    org_country = models.CharField(max_length=10)
    org_title = models.CharField(max_length=10)

    def __str__(self):
        return self.org_name


class PROJECT(models.Model):
    """
    Information about the projects/monitoring status of the research
    """
    #not sure if this is how to correctly handle foreign keys
    project_name = models.CharField(max_length=200)
    project_org = models.ForeignKey(ORGANIZATION, on_delete=models.CASCADE)
    project_fa = models.CharField(max_length=200)
    project_loc = models.CharField(max_length=200)
    loc_lat = models.FloatField()
    loc_long = models.FloatField()
    active_status = models.BooleanField(unique=TRUE) # true is still going false is completed
    tools_used = models.CharField(max_length=200)
    project_startdate = models.DateField()
    project_enddate = models.DateField(default=NONE)
    
    def __str__(self):
        return self.project_name
