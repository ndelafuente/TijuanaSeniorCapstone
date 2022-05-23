from django.contrib import admin
from contribute import models

admin.site.register(models.Organization)
admin.site.register(models.Project)
# Register your models here.
