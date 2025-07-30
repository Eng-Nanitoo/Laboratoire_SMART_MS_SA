from django.contrib import admin
from .models import Laboratoire, Analyse, Article, Specialite,SpecialiteAnalyse,Utilisateur

# Register your models here.
admin.site.register(Analyse)
admin.site.register(Laboratoire)
admin.site.register(Article)
admin.site.register(Specialite)
admin.site.register(SpecialiteAnalyse)
admin.site.register(Utilisateur)