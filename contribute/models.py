from django.db import models

class Contact(models.Model):
    """
    Contact information for person who is submitting the form
    """
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    position = models.CharField(max_length=100)
    # created_at = models.DateTimeField(auto_now_add=True)