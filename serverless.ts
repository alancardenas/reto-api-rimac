import type { AWS } from '@serverless/typescript';

import obtenerFilms from '@functions/obtenerFilms';
import agregarFilm from '@functions/agregarFilm';

const DYNAMO_TABLE = 'FilmTable';
const serverlessConfiguration: AWS = {
  service: 'reto-api-rimac',
  frameworkVersion: '2',
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
    },
  },
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:Scan',
          'dynamodb:PutItem',
        ],
        Resource: '*'
      }
    ],
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: {
    obtenerFilms,
    agregarFilm
  },
  resources: {
    Resources: {
      Film: {
        Type: 'AWS::DynamoDB::Table',
        DeletionPolicy: 'Retain',
        Properties: {
          AttributeDefinitions: [
            {
              AttributeName: 'id',
              AttributeType: 'S',
            },
          ],
          KeySchema: [
            {
              AttributeName: 'id',
              KeyType: 'HASH',
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
          TableName: DYNAMO_TABLE,
        },
      }
    }
  }
};

module.exports = serverlessConfiguration;
