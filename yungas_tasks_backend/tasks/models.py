from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    deadline = models.DateTimeField()
    completed_at = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.title
