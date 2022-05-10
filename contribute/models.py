from django.db import models
from multiselectfield import MultiSelectField
from contribute.query import *

import contribute.parameters as pm

class ORGANIZATION(models.Model):
    """
    Information for the organization submitting the form
    """
    objects = OrganizationManager()
    
    name = models.CharField(max_length=100)
    ORG_TYPES = (
        ("A", "Academic"),
        ("F", "Federal"),
        ("I", "International"),
        ("N", "Non-Profit"),
        ("S", "State"),
        ("O", "Other"),
    )
    type = models.CharField(max_length=10, choices=ORG_TYPES)
    description = models.CharField(max_length=500)

    # Contact info
    website = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)

    # Location
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=20)
    zip_code = models.IntegerField()
    COUNTRY_CHOICES = (
        ("US", "United States"),
        ("MX", "Mexico"),
        ("CAN", "Canada")
    )
    country = models.CharField(max_length=20, choices=COUNTRY_CHOICES)


    def __str__(self):
        return self.name

class PROJECT(models.Model):
    """
    Information about the projects/monitoring status of the research

    TODO:
    @All: How should foreign keys be handled?
    @GingerMcKelvey: How should we handle parameters monitored?
        - There should be a predetermined list for the user to choose from.
        - And the user should be able to select multiple at once
    """
    objects = ProjectManager()

    # Auto-generated data
    created_at = models.DateTimeField(auto_now_add=True)
    is_approved = models.BooleanField(default=False)

    # Contact Info
    contact_name = models.CharField(max_length=100)
    contact_email = models.EmailField()

    # 'Who'
    fk_organization = models.ForeignKey(ORGANIZATION, on_delete=models.PROTECT)
    project_name = models.CharField(max_length=200)
    funding_agencies = models.CharField(max_length=200)

    # 'What'
    params_default = MultiSelectField(
        choices=pm.PARAM_CHOICES,
        max_choices=len(pm.PARAM_CHOICES)
    )
    params_other = models.CharField(max_length=200, default=None)

    # 'Where'
    location_name = models.CharField(max_length=200)
    latitude = models.FloatField()
    longitude = models.FloatField()

    # 'When'
    is_active = models.BooleanField(unique=True)
    start_date = models.DateField()
    end_date = models.DateField(default=None)

    # 'Why'
    purpose = models.TextField(max_length=400)

    def __str__(self):
        return self.project_name
