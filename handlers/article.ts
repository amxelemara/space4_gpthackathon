import "source-map-support/register";
import { Context, APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
const dynamoDb = new DocumentClient();

const tablename = "researchTable" // TODO: get tablename dynamically
const params = {
  TableName: tablename
  }

export const articleHandler = async (_event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResultV2> => {
  try {
    const result = await dynamoDb.scan(params).promise();
    let articles = JSON.stringify(result.Items)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: articles,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};


