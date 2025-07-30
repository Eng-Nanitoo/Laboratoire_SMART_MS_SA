from re import match
from .models import Analyse,Laboratoire,Article,Specialite,Notification,Utilisateur,SpecialiteAnalyse
from rest_framework import serializers


class SpecialiteAnalyseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialiteAnalyse
        fields = '__all__'

class AnalyseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analyse
        fields = '__all__'

class ArticleSerializer(serializers.ModelSerializer):
    def validate_quantite(self,value):
        if value <= 0:
            raise serializers.ValidationError("Quantite doit etre positive")
        return value
    
    def validate_recommended_quntite(self,value):
        if value <= 0:
            raise serializers.ValidationError("Quantite recommende doit etre positive")
        return value
    

    def validate(self,attrbs):
        if attrbs['quantite'] >= attrbs['recommended_quntite']:
            raise serializers.ValidationError("Quantite en stock doit etre inferieur a Quantite Recommende")
        
        return attrbs

    class Meta:
        model = Article
        fields = '__all__'

    

class LaboratoireSerializer(serializers.ModelSerializer):
    def validate_telephone(self,value):
        
        if not value.isdigit():
            raise serializers.ValidationError("Le numéro de téléphone doit contenir uniquement des chiffres.")
        if len(value) != 8:
            raise serializers.ValidationError("Le numéro de téléphone doit contenir 8 chiffres.")
        if not match(r'[2-4]',value[0]):
            raise serializers.ValidationError("Le numéro de téléphone doit commencer par 2, 3 ou 4.")
        return value
    class Meta:
        model = Laboratoire
        fields = '__all__'

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

class SpecialiteSerializer(serializers.ModelSerializer):

    def validate_telephone(self,value):
        
        if not value.isdigit():
            raise serializers.ValidationError("Le numéro de téléphone doit contenir uniquement des chiffres.")
        if len(value) != 8:
            raise serializers.ValidationError("Le numéro de téléphone doit contenir 8 chiffres.")
        if not match(r'[2-4]',value[0]):
            raise serializers.ValidationError("Le numéro de téléphone doit commencer par 2, 3 ou 4.")
        return value
    class Meta:
        model = Specialite
        fields = '__all__'

    analyse_associed = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=SpecialiteAnalyse.objects.all()
    )

class UtilisateurSerializer(serializers.ModelSerializer):
    analyses_autorises = SpecialiteAnalyseSerializer(many=True, read_only=True,required=False)

    def validate_nni(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("Le NNI doit contenir uniquement des chiffres.")
        if len(value) != 10:
            raise serializers.ValidationError("Le NNI doit contenir 10 chiffres.")
        return value
    
    def validate_telephone(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("Le numéro de téléphone doit contenir uniquement des chiffres.")
        if len(value) != 8:
            raise serializers.ValidationError("Le numéro de téléphone doit contenir 8 chiffres.")
        if not match(r'[2-4]', value[0]):
            raise serializers.ValidationError("Le numéro de téléphone doit commencer par 2, 3 ou 4.")
        return value

    class Meta:
        model = Utilisateur
        fields = '__all__'
