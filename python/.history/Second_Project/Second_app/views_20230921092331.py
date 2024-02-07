from django.shortcuts import render

# Create your views here.

def help(request):
    helpdict = {'help_insert':'HELP PAGE'}
    return render(request,'Second_app/help.html',conte
