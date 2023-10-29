from django.contrib import admin
from django.urls import path , include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.about,name='about'),
    path('contact/',views.contact,name='contact'),
    path('services/',views.services,name='services'),
    path('experience/',views.experience,name='experience'),
    path('education/',views.education,name='education'),
    path('skills/',views.skills,name='skills'),
    path('portfolio/',views.portfolio,name='portfolio'),
    path('testimonials/',views.testimonials,name='testimonials'),
    
]