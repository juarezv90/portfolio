# contact/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage, get_connection
from .serializers import ContactFormSerializer
from django.conf import settings

class ContactFormView(APIView):
    def post(self, request):
        serializer = ContactFormSerializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            message = serializer.validated_data['message']
            
            # Send email
            email_message = EmailMessage(
                subject=f'Contact Form Submission from {name}',
                body=message,
                from_email=email,
                to=['admin@victorjuarez.dev'],
            )

            try:
                connection = get_connection(
                    backend=settings.EMAIL_BACKEND,
                )
                email_message.connection = connection
                email_message.send()
                return Response({'success': 'Email delivered successfully'}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
