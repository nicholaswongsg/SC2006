from django.urls import path,include
from . import views

from django.conf import settings
from django.conf.urls.static import static

app_name = 'house'

urlpatterns = [  
    path('all_house_price/', views.all_house_price, name='all_house_price'),
]
