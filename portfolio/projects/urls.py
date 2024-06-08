from django.urls import path
from . import views

urlpatterns = [
    path("project-list/", views.Projects.as_view()),
    path("project-list/<int:pk>", views.SingleProjectView.as_view()),
]