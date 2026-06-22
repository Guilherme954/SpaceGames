from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Jogo, Cliente, Venda
from .serializers import (
    JogoSerializer,
    ClienteSerializer,
    VendaSerializer
)

from rest_framework.permissions import IsAuthenticated
from .permissions import (
    IsAdmin,
    IsFuncionarioOuAdmin
)

from rest_framework.permissions import AllowAny

class JogoViewSet(viewsets.ModelViewSet):
    queryset = Jogo.objects.all()
    serializer_class = JogoSerializer
    permission_classes = [AllowAny]


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [IsFuncionarioOuAdmin]


class VendaViewSet(viewsets.ModelViewSet):
    queryset = Venda.objects.all()
    serializer_class = VendaSerializer
    permission_classes = [IsAdmin]

    