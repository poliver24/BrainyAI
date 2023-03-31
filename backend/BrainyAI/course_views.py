from rest_framework import generics
from rest_framework.response import Response
from .course import course

class CourseListView(generics.ListAPIView):
    def get(self, request, *args, **kwargs):
        return Response(course)
