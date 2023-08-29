from django.urls import path
from . import views

app_name = 'dogs'
urlpatterns = [
    # dog views
    path('', views.dogs_list, name='dogs-list'),
    path('groups', views.dog_groups, name='dog-groups'),
    path('<str:group>/', views.dog_breeds, name='dog-breeds'),
]