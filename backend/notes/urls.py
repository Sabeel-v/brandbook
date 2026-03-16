from django.urls import path
from . import views

urlpatterns = [

    path('notes/', views.get_notes),
    path('create/', views.create_note),
    path('update/<int:id>/', views.update_note),
    path('delete/<int:id>/', views.delete_note),

]