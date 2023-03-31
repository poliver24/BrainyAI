from django.urls import path
from . import views, course_views

urlpatterns = [
    path('run-code/', views.CodeExecutionView.as_view(), name='run-code'),
    path('course/', course_views.CourseListView.as_view(), name='course'),
]
