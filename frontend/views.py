from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def contribute(request):
    return render(request, 'frontend/contribute.html')

def map(request):
    return render(request, 'frontend/map.html')

def about(request):
    return render(request, 'frontend/about.html')