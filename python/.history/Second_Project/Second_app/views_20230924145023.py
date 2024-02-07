from django.shortcuts import render
from django.http import

# Create your views here.

def help(request):
    helpdict = {'help_insert':'HELP PAGE'}
    return render(request,'Second_app/help.html',context=helpdict)
