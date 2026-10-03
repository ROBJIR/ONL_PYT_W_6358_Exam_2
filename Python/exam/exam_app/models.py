from django.db import models

class User(models.Model):
    username = models.CharField(max_length=64, unique=True)
    password = models.CharField(max_length=64)
    last_update = models.DateField(auto_now=True)
