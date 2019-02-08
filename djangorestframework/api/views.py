from api.models import Articles,Vaccines
from api.serializers import ArticlesSerializer,VaccinesSerializer
from rest_framework import generics


class ArticlesList(generics.ListCreateAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializer


class ArticleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializer

class BeforeVaccinesList(generics.ListCreateAPIView):
    queryset = Vaccines.objects.filter(when="Before")
    serializer_class = VaccinesSerializer


class VaccineDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vaccines.objects.all()
    serializer_class = VaccinesSerializer

class DuringVaccinesList(generics.ListCreateAPIView):
    queryset = Vaccines.objects.filter(when="During")
    serializer_class = VaccinesSerializer



class AfterVaccinesList(generics.ListCreateAPIView):
    queryset = Vaccines.objects.filter(when="After")
    serializer_class = VaccinesSerializer
