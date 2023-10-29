from django.shortcuts import render
# Create your views here.
def contact(request):
    return render(request,'siteapp/contact.html')

def about(request):
    return render(request,'siteapp/about.html')

def services(request):
    return render(request,'siteapp/services.html')


def experience(request):
    return render(request,'siteapp/experience.html')


def education(request):
    return render(request,'siteapp/education.html')


def skills(request):
    return render(request,'siteapp/skills.html')


def portfolio(request):
    return render(request,'siteapp/portfolio.html')

def testimonials(request):
    return render(request,'siteapp/testimonials.html')


