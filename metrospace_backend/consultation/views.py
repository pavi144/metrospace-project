from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ConsultationSerializer

@api_view(['POST'])
def consultation(request):

    serializer = ConsultationSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=400)