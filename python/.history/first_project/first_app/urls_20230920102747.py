from django.urls import path
from first_app import views

urlpatterns = [
    url('',views.index,name='index'),
]


