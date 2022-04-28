# Generated by Django 4.0.4 on 2022-04-28 23:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contribute', '0009_rename_zip_organization_zip_code_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='fk_location',
        ),
        migrations.RemoveField(
            model_name='project',
            name='parameters_monitored',
        ),
        migrations.AddField(
            model_name='project',
            name='latitude',
            field=models.FloatField(default=0.0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='project',
            name='longitude',
            field=models.FloatField(default=9.9),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='project',
            name='params_default',
            field=models.CharField(choices=[('101', 'Air Temperature'), ('102', 'Battery'), ('103', 'Cadmium Level'), ('104', 'MOCD'), ('105', 'Chemical Oxygen Demand'), ('106', 'Cyanide Levels'), ('107', 'Chromium Levels'), ('108', 'Copper Levels'), ('109', 'BOD'), ('110', 'Depth of water'), ('111', 'Dissolved Oxygen'), ('112', 'Dissolved Oxygen Saturation'), ('113', 'E. coli'), ('114', 'Enterococci'), ('115', 'Fats'), ('116', 'Fecal Coliforms'), ('117', 'Fluorescence Analysis'), ('118', 'Fluorescein'), ('119', 'Heavy Metals'), ('120', 'Helminth Eggs'), ('121', 'Levels of Mercury'), ('122', 'Microbiological Analysis'), ('123', 'Nickel Levels'), ('124', 'Oils'), ('125', 'BY'), ('126', 'Lead Levels'), ('127', 'pH Levels'), ('128', 'Physicochemical and Bacteriological Analysis as Biochemical Oxygen Demand'), ('129', 'Salinity'), ('130', 'Sediment Load Reduction'), ('131', 'Specific Conductivity'), ('132', 'Stormwater'), ('133', 'Suspended Solids'), ('134', 'Temperature'), ('135', 'Total Nitrogens'), ('136', 'Total Organic Carbon'), ('137', 'Total Phosphorus'), ('138', 'Total Dissolved Solids'), ('139', 'Tryphone'), ('140', 'Turbidity'), ('141', 'UV-Vis Absorbance'), ('142', 'Water Temperature'), ('143', 'Wind Speed'), ('144', 'Zinc Levels')], default='1', max_length=150),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='project',
            name='params_other',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AlterField(
            model_name='project',
            name='fk_organization',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='contribute.organization'),
        ),
    ]
