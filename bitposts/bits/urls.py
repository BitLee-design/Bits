from rest_framework import routers
from .api import BitViewSet

router = routers.DefaultRouter()
router.register('api/bits', BitViewSet, 'bits')

urlpatterns = router.urls