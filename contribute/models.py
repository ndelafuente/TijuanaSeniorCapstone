from django.db import models

class CONTACT(models.Model):
    """
    Contact information for person who is submitting the form
    """
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    position = models.CharField(max_length=100)
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


class FUNDING_AGENCY(models.Model):
    """
    Information for the funding agencies in the project
    """
    fa_name = models.CharField(max_length=100)
    fa_type = models.CharField(max_length=100)
    fa_mission = models.CharField(max_length=500)
    fa_website = models.CharField(max_length=100)


class MONITOR_LOCATION(models.Model):
    """
    Information about the locations of the research
    """
    loc_name = models.CharField(max_length=100)
    loc_lat = models.IntegerField()
    loc_long = models.IntegerField()


class PROJECT(models.Model):
    """
    Information about the projects/monitoring status of the research
    """
    #not sure if this is how to correctly handle foreign keys
    org = models.ForeignKey(ORGANIZATION, on_delete=models.CASCADE)
    fa = models.ForeignKey(FUNDING_AGENCY, on_delete=models.CASCADE)
    loc = models.ForeignKey(MONITOR_LOCATION, on_delete=models.CASCADE)
    active_status = models.CharField(max_length=100)
    tools_used = models.CharField(max_length=200)
    project_startdate = models.DateField()
    project_enddate = models.DateField()

    # still need to figure out how to declare foreign keys

    

# ID information will be automatically created in the mitigation of the models


    # created_at = models.DateTimeField(auto_now_add=True)