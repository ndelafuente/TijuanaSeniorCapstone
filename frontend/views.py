from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')

def contribute(request):
    return render(request, 'frontend/contribute.html')

def map(request):
    return render(request, 'frontend/map.html')