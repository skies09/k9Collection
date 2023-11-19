from django.db import models
from django.urls import reverse
from django.core.validators import MaxValueValidator, MinValueValidator

SIZES = (
    ('XS', 'x-small'), ('S', 'small'), ('M', 'medium'), ('L', 'large'), ('XL', 'x-large')
)

GROUPS = (
    ('Gundog', 'Gundog'), ('Hound', 'Hound'), ('Pastoral', 'Pastoral'), ('Terrier', 'Terrier'), ('Toy', 'Toy'), ('Utility', 'Utility'), ('Working', 'Working')
)

class Dog(models.Model):
    group = models.CharField(max_length=16, choices=GROUPS)
    breed = models.CharField(max_length=32)
    size = models.CharField(max_length=5, choices=SIZES)
    lifespan = models.IntegerField()
    exercise_needs = models.IntegerField(validators=[MaxValueValidator(5), MinValueValidator(1)])
    grooming_needs = models.IntegerField(validators=[MaxValueValidator(5), MinValueValidator(1)])
    intelligence = models.IntegerField(validators=[MaxValueValidator(5), MinValueValidator(1)])

class Meta:
    ordering = ('-group',)
    verbose_name_plural = "dogs"

def __str__(self):
    return self.breed
