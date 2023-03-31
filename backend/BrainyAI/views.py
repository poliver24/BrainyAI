import subprocess
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CodeExecutionSerializer

class CodeExecutionView(APIView):

    def post(self, request, format=None):
        print('in post')
        serializer = CodeExecutionSerializer(data=request.data)
        if serializer.is_valid():
            code = serializer.validated_data['code']

            try:
                process = subprocess.run(
                    ["python", "-c", code],
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                    text=True,
                    timeout=10
                )
                output = process.stdout
                error = process.stderr
                return Response({"output": output, "error": error}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
