from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'main.html')


def facebook(request):
    return render(request, 'facebook.html')


def instagram(request):
    return render(request, 'instagram.html')


def copilot(request):
    return render(request, 'copilot.html')
