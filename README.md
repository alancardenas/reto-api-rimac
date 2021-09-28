# reto-api-rimac
## Instrucciones de instalacion y despliegue
- Ejecutar comando ´npm install -g serverless´ para instalar serverless framework
- Ejecutar comando ´npm install´ para instalar las dependencias
- Crear un usuario y crear un grupo asociado a las siguientes politicas: AmazonAPIGatewayAdministrator, AWSCloudFormationFullAccess, AWSLambda_FullAccess, IAMFullAccess, CloudWatchFullAccess
- Ejecutar comando ´serverless deploy´ deployar el stack en aws
