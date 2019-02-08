from rest_framework import serializers
from api.models import Articles

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ('id', 'title', 'description', 'author', 'language')
