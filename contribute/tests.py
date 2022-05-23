from django.test import TestCase
from contribute import models

import contribute.parameters as pm

class OrganizationTestCase(TestCase):
    def setUp(self):
        models.Organization.objects.create(
            name="test_org",
            type="A",
            description="valid description",
            website="https://test.org",
            email="info@test.org",
            address="123 Sesame St",
            city="Anytown",
            state="Nonexistence",
            zip_code=99999,
            country="US"
        )
    
    def test_test(self):
        org = models.Organization.objects.get(name="test_org")
        self.assertEqual(str(org), "test_org")
        
class ProjectTestCase(TestCase):
    def setUp(self):
        # Create test organization model
        models.Organization.objects.create(name="test_org", zip_code=99999)
        org = models.Organization.objects.get(name="test_org")

        models.Project.objects.create(
            fk_organization=org,
            project_name="test_project",
            # funding_agencies="optional",
            contact_name="Nobody",
            contact_email="nobody@test.org",
            params_default=pm.PARAM_CHOICES[0:1], # TODO make optional
            # params_other="optional",
            location_name="San Diego",
            latitude=0.0,
            longitude=0.0,
            start_date='1010-01-01',
            end_date=None,
            purpose="valid purpose"
        )
    
    def test_str(self):
        proj = models.Project.objects.get(project_name="test_project")
        self.assertEqual(str(proj), "test_project")
    
    def test_fk_organization(self):
        pass
        
