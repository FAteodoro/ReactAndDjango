from rest_framework import serializers
from itens import models

class ItensSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Itens
        fields = '__all__'
