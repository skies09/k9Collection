from rest_framework import serializers
from .models import *

class DogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dog
        # fields = ['group', 'breed', 'size']
        fields = '__all__'