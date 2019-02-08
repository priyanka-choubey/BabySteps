from django.db import models

# Create your models here.
from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])


class Articles(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    description = models.TextField()
    author = models.CharField(max_length=100, blank=True, default='')
    language = models.CharField(choices=LANGUAGE_CHOICES, default='python', max_length=100)

    class Meta:
        ordering = ('created',)

class Vaccines(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    description = models.TextField()
    when = models.CharField(max_length=100, blank=True, default='During')
