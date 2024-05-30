from django.shortcuts import render
from rest_framework import generics
from .models import Projects
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import ProjectSerializer

# Create your views here.clear
class Projects(generics.ListCreateAPIView):
    queryset = Projects.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    