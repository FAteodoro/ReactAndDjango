from django.db import models
from uuid import uuid4

class Itens(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    item = models.CharField(max_length=100)
    status = models.CharField(max_length=100)    