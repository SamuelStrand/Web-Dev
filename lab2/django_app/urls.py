from django.contrib import admin
from django.urls import path, include

from django_app import views

app_name = 'django_app'

urlpatterns = [
    path('', views.home, name='home'),
    path('facebook/', views.facebook, name='facebook'),
    path('instagram/', views.instagram, name='instagram'),

]
