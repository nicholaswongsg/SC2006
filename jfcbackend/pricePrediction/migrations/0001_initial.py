# Generated by Django 4.1.7 on 2023-04-05 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HousePrice',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, verbose_name='id')),
                ('month', models.CharField(max_length=10, verbose_name='month')),
                ('town', models.CharField(max_length=255, verbose_name='town')),
                ('flat_type', models.CharField(max_length=50, verbose_name='flat_type')),
                ('block', models.CharField(max_length=8, verbose_name='block')),
                ('street_name', models.CharField(max_length=255, verbose_name='street_name')),
                ('storey_range', models.CharField(max_length=8, verbose_name='storey_range')),
                ('floor_area_sqm', models.FloatField(blank=True, verbose_name='floor_area_sqm')),
                ('flat_model', models.CharField(max_length=255, verbose_name='flat_model')),
                ('lease_commence_date', models.FloatField(blank=True, verbose_name='lease_commence_date')),
                ('remaining_lease', models.CharField(max_length=255, verbose_name='remaining_lease')),
                ('resale_price', models.FloatField(blank=True, verbose_name='resale_price')),
                ('resale_price_aft1year', models.FloatField(blank=True, null=True, verbose_name='resale_price_aft1year')),
                ('resale_price_aft2year', models.FloatField(blank=True, null=True, verbose_name='resale_price_aft2year')),
                ('resale_price_aft3year', models.FloatField(blank=True, null=True, verbose_name='resale_price_aft3year')),
                ('resale_price_aft4year', models.FloatField(blank=True, null=True, verbose_name='resale_price_aft4year')),
                ('resale_price_aft5year', models.FloatField(blank=True, null=True, verbose_name='resale_price_aft5year')),
            ],
        ),
    ]
