from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

class SetCSRFCookie(APIView):
    """
    This view ensures that a CSRF cookie is set in the client's browser.
    It can be triggered via a GET request from the React frontend.
    """
    @method_decorator(ensure_csrf_cookie)
    def get(self, request):
        return Response({"detail": "CSRF cookie set."})
