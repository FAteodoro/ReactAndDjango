from rest_framework import viewsets
from itens.api import serializers
from itens import models

class ItensViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ItensSerializer
    queryset = models.Itens.objects.all()