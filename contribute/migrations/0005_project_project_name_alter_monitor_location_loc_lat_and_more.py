# Generated by Django 4.0.3 on 2022-04-21 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contribute', '0004_rename_funding_agencies_funding_agency_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='project_name',
            field=models.CharField(default='sample', max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='monitor_location',
            name='loc_lat',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='monitor_location',
            name='loc_long',
            field=models.FloatField(),
        ),
    ]