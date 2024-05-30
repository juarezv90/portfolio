from rest_framework import serializers
from . import models
from django.contrib.auth.models import User

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Projects
        fields = "__all__"