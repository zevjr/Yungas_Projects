from rest_framework import viewsets

from .models import Task
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('completed_at')
    serializer_class = TaskSerializer


class TasksNotCompletedViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.filter(completed_at=None)
    serializer_class = TaskSerializer
