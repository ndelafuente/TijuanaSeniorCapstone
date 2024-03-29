# Generated by Django 4.0.4 on 2022-05-03 01:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contribute', '0013_alter_organization_country_alter_organization_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='latitude',
        ),
        migrations.RemoveField(
            model_name='project',
            name='longitude',
        ),
        migrations.AddField(
            model_name='project',
            name='fk_location',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='contribute.location'),
            preserve_default=False,
        ),
    ]
