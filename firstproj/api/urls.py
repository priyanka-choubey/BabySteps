from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    path('articles/', views.ArticlesList.as_view()),
    path('articles/<int:pk>/', views.ArticleDetail.as_view()),
    path('vaccines/<int:pk>/', views.VaccineDetail.as_view()),
    path('vaccines/before', views.BeforeVaccinesList.as_view()),
    path('vaccines/during', views.DuringVaccinesList.as_view()),
    path('vaccines/after', views.AfterVaccinesList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
