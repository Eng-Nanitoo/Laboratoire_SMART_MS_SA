from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView # type: ignore

urlpatterns = [
    path('register/', register, name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('analyses/', analyse_list, name='analyse-list'),
    path('analyses/<int:pk>/', gerer_analyse, name='gerer-analyse'),
    path('articles/', articles_list, name='articles-list'),
    path('articles/<int:pk>/', articles_list, name='gerer-article'),
    path('laboratoires/', laboratoire_list, name='laboratoire-list'),
    path('laboratoires/<int:pk>/', gerer_laboratoire, name='gerer-laboratoire'),
    path('specialites/', specialites_list, name='specialites-list'),
    path('specialites/<int:pk>/', gerer_specialite, name='gerer-specialite'),
    path('utilisateurs/', utilisateurs_list, name='utilisateurs-list'),
    path('utilisateurs/<int:pk>/', gerer_utilisateur, name='gerer-utilisateur'),
    path('overview/', overview,name='overview_system'),
    path('specialites_analyses/', specialite_analyse_list,name='specialite-analyse-list'),
]