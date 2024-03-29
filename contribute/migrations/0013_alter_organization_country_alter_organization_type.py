# Generated by Django 4.0.4 on 2022-04-29 00:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contribute', '0012_delete_parameters'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organization',
            name='country',
            field=models.CharField(choices=[('US', 'United States'), ('MX', 'Mexico')], max_length=20),
        ),
        migrations.AlterField(
            model_name='organization',
            name='type',
            field=models.CharField(choices=[('A', 'Academic'), ('F', 'Federal'), ('I', 'International'), ('N', 'Non-Profit'), ('S', 'State'), ('O', 'Other')], max_length=10),
        ),
    ]
