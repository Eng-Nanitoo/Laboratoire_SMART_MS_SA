from .models import Analyse,Article,Laboratoire,Specialite,Notification,Utilisateur,SpecialiteAnalyse
from .serializers import AnalyseSerializer,ArticleSerializer,SpecialiteSerializer,LaboratoireSerializer,NotificationSerializer,UtilisateurSerializer,SpecialiteAnalyseSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.decorators import permission_classes
from .pagination import AnalysePageNumberPagination,AnalyseLimitOffsetPagination,ArticlePageNumberPagination,ArticleLimitOffsetPagination
from django.contrib.auth import get_user_model


User = get_user_model()

@api_view(['GET'])
@permission_classes([AllowAny])
def specialite_analyse_list(request):
    if request.method == 'GET':
        specialites_analyses = SpecialiteAnalyse.objects.all()
        paginator = AnalysePageNumberPagination()
        result_page = paginator.paginate_queryset(specialites_analyses, request)
        serializers = SpecialiteAnalyseSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializers.data)
    
    return Response({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET'])
@permission_classes([AllowAny])
def overview(request):
    analyses = Analyse.objects.all().count()
    specialites = Specialite.objects.all().count()
    laboratoires = Laboratoire.objects.all().count()
    articles = Article.objects.all().count()
    # utilisateurs = Utilisateur.objects.all().count()

    data = {
        'analyses':analyses,
        'specialites':specialites,
        'laboratoires':laboratoires,
        'articles':articles,
        # 'utilisateurs':utilisateurs
    }

    return Response(data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    try:
        if User.objects.filter(username=username).exists():
            return Response({'message': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, password=password)
        user.save()
        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


### Analyse Views
@api_view(['GET','POST'])
@permission_classes([AllowAny])
def analyse_list(request):
    if request.method == 'GET':
        analyses = Analyse.objects.all()
        paginator = AnalysePageNumberPagination()
        result_page = paginator.paginate_queryset(analyses, request)
        serializers = AnalyseSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializers.data)

    elif request.method == 'POST':
        data = request.data
        serializer = AnalyseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def gerer_analyse(request,pk):
    try:
        Analyse.objects.get(pk=pk)

        if request.method == 'DELETE':
            Analyse.objects.filter(pk=pk).delete()
            return Response({'message': 'Analyse deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        if request.method == 'PUT':
            data = request.data
            analyse = Analyse.objects.get(pk=pk)
            serializer = AnalyseSerializer(analyse, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        if request.method == 'GET':
            analyse = Analyse.objects.get(pk=pk)
            serializer = AnalyseSerializer(analyse)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    except Analyse.DoesNotExist:
        return Response({'message': 'Analyse not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def articles_list(request):
    if request.method == 'GET':
        articles = Article.objects.all()
        paginator = ArticlePageNumberPagination()
        result_page = paginator.paginate_queryset(articles, request)
        serializers = ArticleSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializers.data)

    elif request.method == 'POST':
        data = request.data
        serializer = ArticleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def gerer_article(request, pk):
    try:
        Article.objects.get(pk=pk)

        if request.method == 'DELETE':
            Article.objects.filter(pk=pk).delete()
            return Response({'message': 'Article deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        if request.method == 'PUT':
            data = request.data
            article = Article.objects.get(pk=pk)
            serializer = ArticleSerializer(article, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        if request.method == 'GET':
            article = Article.objects.get(pk=pk)
            serializer = ArticleSerializer(article)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    except Article.DoesNotExist:
        return Response({'message': 'Article not found'}, status=status.HTTP_404_NOT_FOUND)
    

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def laboratoire_list(request):
    if request.method == 'GET':
        laboratoires = Laboratoire.objects.all()
        paginator = AnalysePageNumberPagination()
        result_page = paginator.paginate_queryset(laboratoires, request)
        serializers = LaboratoireSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializers.data)

    elif request.method == 'POST':
        data = request.data
        serializer = LaboratoireSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def gerer_laboratoire(request, pk):
    try:
        Laboratoire.objects.get(pk=pk)

        if request.method == 'DELETE':
            Laboratoire.objects.filter(pk=pk).delete()
            return Response({'message': 'Laboratoire deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        if request.method == 'PUT':
            data = request.data
            laboratoire = Laboratoire.objects.get(pk=pk)
            serializer = LaboratoireSerializer(laboratoire, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        if request.method == 'GET':
            laboratoire = Laboratoire.objects.get(pk=pk)
            serializer = LaboratoireSerializer(laboratoire)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    except Laboratoire.DoesNotExist:
        return Response({'message': 'Laboratoire not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET','POST'])
@permission_classes([AllowAny])
def specialites_list(request):
    if request.method == 'GET':
        specialites = Specialite.objects.all()
        paginator = AnalysePageNumberPagination()
        result_page = paginator.paginate_queryset(specialites, request)
        serializers = SpecialiteSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializers.data)

    elif request.method == 'POST':
        data = request.data
        serializer = SpecialiteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT','DELETE'])
@permission_classes([AllowAny])
def gerer_specialite(request, pk):
    try:
        Specialite.objects.get(pk=pk)

        if request.method == 'DELETE':
            Specialite.objects.filter(pk=pk).delete()
            return Response({'message': 'Specialite deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        if request.method == 'PUT':
            data = request.data
            specialite = Specialite.objects.get(pk=pk)
            serializer = SpecialiteSerializer(specialite, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        if request.method == 'GET':
            specialite = Specialite.objects.get(pk=pk)
            serializer = SpecialiteSerializer(specialite)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    except Specialite.DoesNotExist:
        return Response({'message': 'Specialite not found'}, status=status.HTTP_404_NOT_FOUND)
    

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def utilisateurs_list(request):
    if request.method == 'GET':
        utilisateurs = Utilisateur.objects.all()
        paginator = AnalysePageNumberPagination()
        result_page = paginator.paginate_queryset(utilisateurs, request)
        serializers = UtilisateurSerializer(result_page, many=True)
        return paginator.get_paginated_response(serializers.data)

    elif request.method == 'POST':
        data = request.data
        serializer = UtilisateurSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def gerer_utilisateur(request, pk):
    try:
        Utilisateur.objects.get(pk=pk)

        if request.method == 'DELETE':
            Utilisateur.objects.filter(pk=pk).delete()
            return Response({'message': 'Utilisateur deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        if request.method == 'PUT':
            data = request.data
            utilisateur = Utilisateur.objects.get(pk=pk)
            serializer = UtilisateurSerializer(utilisateur, data=data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        if request.method == 'GET':
            utilisateur = Utilisateur.objects.get(pk=pk)
            serializer = UtilisateurSerializer(utilisateur)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({'message': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    except Utilisateur.DoesNotExist:
        return Response({'message': 'Utilisateur not found'}, status=status.HTTP_404_NOT_FOUND)