from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from .models import Dog
from rest_framework.views import APIView
from rest_framework.response import Response
from . serializer import *

@api_view(['GET'])
def dogs_list(request):
    dogs = Dog.objects.all()
    serializer = DogSerializer(dogs, many=True)
    return Response(serializer.data)

# Get the groups available
@api_view(['GET'])
def dog_groups(request):
    groups =  Dog.objects.values_list('group', flat=True).distinct()
    return Response(groups)