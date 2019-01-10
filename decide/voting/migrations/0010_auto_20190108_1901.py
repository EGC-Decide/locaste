# Generated by Django 2.0 on 2019-01-08 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('voting', '0009_voting_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='voting',
            name='type',
        ),
        migrations.AddField(
            model_name='questionoption',
            name='percentage',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=3, null=True),
        ),
        migrations.AddField(
            model_name='questionoption',
            name='type',
            field=models.TextField(blank=True, choices=[('Range', 'Range'), ('Percentage', 'Percentage'), ('Normal', 'Normal')], null=True),
        ),
        migrations.AlterField(
            model_name='questionoption',
            name='option',
            field=models.TextField(blank=True, null=True),
        ),
    ]