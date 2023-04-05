# Generated by Django 4.1.7 on 2023-03-18 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('pricePrediction', '0002_delete_houseprices'),
    ]

    operations = [
        migrations.CreateModel(
            name='HousePrices',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, verbose_name='id')),
                ('month', models.CharField(max_length=10, verbose_name='month')),
                ('town', models.CharField(max_length=255, verbose_name='town')),
                ('flat_type', models.CharField(max_length=50, verbose_name='flat_type')),
                ('block', models.IntegerField(blank=True, verbose_name='block')),
                ('street_name', models.CharField(max_length=255, verbose_name='street_name')),
                ('storey_range', models.CharField(max_length=8, verbose_name='storey_range')),
                ('floor_area_sqm', models.IntegerField(verbose_name='floor_area_sqm')),
                ('flat_model', models.CharField(max_length=255, verbose_name='flat_model')),
                ('lease_commence_date', models.IntegerField(blank=True, verbose_name='lease_commence_date')),
                ('remaining_lease', models.CharField(max_length=255, verbose_name='remaining_lease')),
                ('resale_price', models.IntegerField(blank=True, verbose_name='resale_price')),
            ],
        ),
    ]
