from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    deadline = models.DateField()
    completed_at = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.title
