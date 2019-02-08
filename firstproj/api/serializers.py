from rest_framework import serializers
from api.models import Articles,Vaccines

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ('id', 'title', 'description', 'author', 'language')

class VaccinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vaccines
        fields = ('id', 'title', 'description','when')
