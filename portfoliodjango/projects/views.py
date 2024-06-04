from django.shortcuts import render
from rest_framework import generics
from .models import Projects as Project_item
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import ProjectSerializer

# Create your views here.clear
class Projects(generics.ListCreateAPIView):
    queryset = Project_item.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class SingleProjectView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project_item.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    