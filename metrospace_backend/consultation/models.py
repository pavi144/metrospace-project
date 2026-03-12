from django.db import models

class Consultation(models.Model):

    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15,unique=True)
    email = models.EmailField()
    location = models.CharField(max_length=150, blank=True, null=True)
    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name