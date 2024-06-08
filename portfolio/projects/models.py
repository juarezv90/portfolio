from django.db import models

# Create your models here.
class Tags(models.Model):
    tag_name = models.CharField(max_length=25)

    def __str__(self) -> str:
        return self.tag_name

class Projects(models.Model):
    """Model definition for MODELNAME."""
    name = models.CharField(max_length=255)
    created_date = models.DateField()
    image = models.CharField(max_length=255)
    about_project = models.TextField()
    project_tags = models.ManyToManyField(Tags, related_name="project_tags")
    git_url=models.URLField(max_length=200)
    active_url=models.URLField(max_length=200, null=True)


    class Meta:
        """Meta definition for MODELNAME."""

        verbose_name = 'Project'
        verbose_name_plural = 'Projects'

    def __str__(self):
        """Unicode representation of MODELNAME."""
        return self.name


