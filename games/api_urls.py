from rest_framework.routers import DefaultRouter
from .api_views import JogoViewSet, ClienteViewSet, VendaViewSet

router = DefaultRouter()

router.register(r'jogos', JogoViewSet, basename='jogos')
router.register(r'clientes', ClienteViewSet, basename='clientes')
router.register(r'vendas', VendaViewSet, basename='vendas')

urlpatterns = router.urls