from rest_framework import serializers
from . import models
from django.contrib.auth.models import User

class TagSerializer( serializers.ModelSerializer):
    class Meta:
        model = models.Tags
        fields="__all__"

class ProjectSerializer(serializers.ModelSerializer):
    project_tags = serializers.SlugRelatedField(many=True, queryset=models.Tags.objects.all(), slug_field='tag_name')


    class Meta:
        model = models.Projects
        fields = "__all__"