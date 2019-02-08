from api.models import Articles
from api.serializers import ArticlesSerializer
from rest_framework import generics


class ArticlesList(generics.ListCreateAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializer


class ArticleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializer
