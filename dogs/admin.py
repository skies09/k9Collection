from django.contrib import admin
from .models import Dog

# Register your models here.
@admin.register(Dog)
class DogAdmin(admin.ModelAdmin):
    list_display = ('breed', 'group', 'size')
    list_filter = ('breed', 'group', 'size')
    search_fields = ('breed', 'group')

