from pickle import NONE, TRUE
from django.db import models
from multiselectfield import MultiSelectField

import contribute.parameters as pm

class CONTACT(models.Model):
    """
    Contact information for person who is submitting the form
    """
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    position = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

    # created_at = models.DateTimeField(auto_now_add=True)

class ORGANIZATION(models.Model):
    """
    Information for the organization submitting the form
    """
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    description = models.CharField(max_length=500)

    # Contact info
    website = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)

    # Location
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=20)
    zip_code = models.IntegerField()
    country = models.CharField(max_length=20)

    # title = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class LOCATION(models.Model):
    """
    Location model
    """
    location_name = models.CharField(max_length=200)
    latitude = models.FloatField()
    longitude = models.FloatField()

class PROJECT(models.Model):
    """
    Information about the projects/monitoring status of the research
    
    TODO:
    @All: How should foreign keys be handled?
    @GingerMcKelvey: How should we handle parameters monitored?
        - There should be a predetermined list for the user to choose from.
        - And the user should be able to select multiple at once
    """
    # Auto-generated data
    created_at = models.DateTimeField(auto_now_add=True)

    # 'Who'
    project_name = models.CharField(max_length=200)
    fk_organization = models.ForeignKey(ORGANIZATION, on_delete=models.PROTECT)
    fk_contact = models.ForeignKey(CONTACT, on_delete=models.CASCADE)
    funding_agencies = models.CharField(max_length=200)
    
    # 'What'
    # parameters_monitored = models.ForeignKey(PARAMETERS, on_delete=models.CASCADE)
    params_default = MultiSelectField(
        choices=pm.PARAM_CHOICES,
        max_choices=len(pm.PARAM_CHOICES)
    )
    params_other = models.CharField(max_length=200, default=None)

    # 'Where'
    longitude = models.FloatField()
    latitude = models.FloatField()

    # 'When'
    is_active = models.BooleanField(unique=TRUE)
    start_date = models.DateField()
    end_date = models.DateField(default=NONE)

    # 'Why'
    purpose = models.TextField(max_length=400)
    
    def __str__(self):
        return self.project_name
