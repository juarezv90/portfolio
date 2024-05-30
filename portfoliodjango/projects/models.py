from django.db import models

# Create your models here.
class Projects(models.Model):
    """Model definition for MODELNAME."""
    name = models.CharField(max_length=255)
    created_date = models.DateField()
    image = models.CharField(max_length=255)
    about_project = models.TextField()


    class Meta:
        """Meta definition for MODELNAME."""

        verbose_name = 'Project'
        verbose_name_plural = 'Projects'

    def __str__(self):
        """Unicode representation of MODELNAME."""
