# Generated by Django 4.0.4 on 2022-05-10 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contribute', '0020_alter_organization_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='is_active',
            field=models.BooleanField(),
        ),
    ]
