from django.shortcuts import render

# Create your views here.

def help(request):
    helpdict = {'help_insert':''}
    return render(request
