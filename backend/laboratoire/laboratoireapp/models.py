from django.db import models

# Create your models here.
class Laboratoire(models.Model):
    nom = models.CharField(max_length=100)
    telephone = models.CharField(max_length=8)
    email= models.EmailField(max_length=300)
    adresse = models.CharField(max_length=200)
    numero_identification= models.CharField(max_length=20,unique=True)
    longitude = models.FloatField()
    laltitude = models.FloatField()

    def __str__(self):
        return f"{self.nom} {self.adresse}"

class Analyse(models.Model):
    nom_demandeur = models.CharField(max_length=100)
    nom_patient = models.CharField(max_length=100)
    telephone_demandeur = models.CharField(max_length=8)
    genre_patient = models.CharField(max_length=50,choices=[('homme','Homme'), ('femme','Femme')])
    adresse_patient = models.CharField(max_length=100)
    date = models.DateField()
    type_analyse = models.CharField(max_length=200)

    nom = models.CharField(max_length=100,blank=True)
    equipement= models.CharField(max_length=100,blank=True)
    code = models.CharField(max_length=20,blank=True)
    reactif_consommable= models.CharField(max_length=100,blank=True)
    cout = models.DecimalField(max_digits=10,decimal_places=2,blank=True,null=True)
    commentaire = models.TextField(blank=True, null=True)
    duree_type = models.CharField(max_length=5,choices=[('jour', 'Jour'), ('heure', 'Heure')], default='jour',blank=True)
    duree = models.IntegerField(blank=True,null=True)

    def __str__(self):
        return f"{self.nom_demandeur} ({self.nom_patient})"

class Article(models.Model):
    nom = models.CharField(max_length=100)
    code = models.CharField(max_length=20,unique=True)
    quantite = models.IntegerField()
    recommended_quntite = models.IntegerField()
    mesure_unite = models.CharField(max_length=20, choices=[('mg', 'mg'), ('g', 'g'), ('kg', 'kg'), ('ml', 'ml'), ('l', 'l')], default='mg')
    categorie = models.CharField(max_length=100, choices=[('reactif', 'Reactif'), ('consommable', 'Consommable')], default='reactif')
    
    def __str__(self):
        return f"{self.nom} ({self.code}) - {self.quantite} {self.mesure_unite}"


class SpecialiteAnalyse(models.Model):
    nom = models.CharField(max_length=100)

    def __str__(self):
        return self.nom
    
class Specialite(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    analyse_associed = models.ManyToManyField(SpecialiteAnalyse, related_name='specialites', blank=True)

    def __str__(self):
        return self.nom

class Notification(models.Model):
    title = models.CharField(max_length=100)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    recepteur_telephone = models.CharField(max_length=8)

    def __str__(self):
        return f"{self.title} - {self.date.strftime('%Y-%m-%d %H:%M:%S')}"


class Utilisateur(models.Model):
    nni = models.CharField(max_length=10,unique=True)
    nom_complet = models.CharField(max_length=100)
    email = models.EmailField(max_length=300, unique=True)
    telephone = models.CharField(max_length=8, unique=True)
    adresse = models.CharField(max_length=200)
    genre = models.CharField(max_length=10, choices=[('homme', 'Homme'), ('femme', 'Femme')])
    analyses_autorises = models.ManyToManyField(SpecialiteAnalyse, related_name='utilisateurs', blank=True)

    role = models.CharField(max_length=50, choices=[
        ('admin', 'Admin'),
        ('responsable_stock', 'Responsable de Stock'),
        ('specialiste', 'Specialiste')
    ])
    
    def __str__(self):
        return f"{self.nom_complet} - {self.role}"
    
