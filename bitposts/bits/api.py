from bits.models import Bit
from rest_framework import viewsets, permissions
from .serializers import BitSerializer


class BitViewSet(viewsets.ModelViewSet):
	queryset = Bit.objects.all()
	permission_classes = [
		permissions.AllowAny
	]
	serializer_class = BitSerializer

