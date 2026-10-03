
from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

from .models import User

# Create your views here.

class LoginView(View):
    def get(self, request):
        return render(request, "exam_app/login.html")

    def post(self, request):
        username = request.POST.get("username", "")
        password = request.POST.get("password", "")

        user_exists = User.objects.filter(
            username=username,
            password=password,
        ).exists()

        if user_exists:
            response = HttpResponse("Logged in")
            response.set_cookie(
                "logged_in",
                "true",
                max_age=24 * 60 * 60,
            )
        else:
            response = HttpResponse("Login error")
            response.delete_cookie("logged_in")

        return response

class DivideView(View):
    def get(self, request, a, b):
        a = float(a)
        b = float(b)

        if b == 0:
            return HttpResponse("Cannot divide by 0!")

        return HttpResponse(str(a / b))