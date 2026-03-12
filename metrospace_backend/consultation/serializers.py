from rest_framework import serializers
from .models import Consultation

class ConsultationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Consultation
        fields = '__all__'

    def validate_phone(self, value):

        if Consultation.objects.filter(phone=value).exists():
            raise serializers.ValidationError(
                "This phone number already submitted a consultation request."
            )

        return value
