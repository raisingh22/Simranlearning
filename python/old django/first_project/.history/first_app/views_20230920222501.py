from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    my_dict = {'insert_me':"Hello, I am from views.py!",}
    return render(request,'first_appindex.html',context=my_dict)