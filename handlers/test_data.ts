import "source-map-support/register";
import { Context, APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import { DocumentClient } from 'aws-sdk/clients/dynamodb';


const dynamoDb = new DocumentClient();
const tablename = "researchTable" // TODO: get tablename dynamically

export const testDataHandler = async (_event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResultV2> => {
  try {
    const articles = data.map((article: any) => {
        return {
        TableName: tablename,
        Item: article,
        }
      }
    )
    for (const item of articles) {
      await dynamoDb.put(item).promise();
    }
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: 'success',
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


const data = [
  {
    id: '1',
    url: "www.arxiv.com/1",
    title: "From Automation to Emancipation: A Study of Communist Ideology in Artificial Intelligence Systems"
  },
  {
    id: '2',
    url: "www.arxiv.com/2",
    title: "Artificial Intimacy: Exploring the Sexual Revolution of Humans and AI Models in the 21st Century"
  },
  {
    id: '3',
    url: "www.arxiv.com/3",
    title: "When Robots Attack: An Ethnographic Study on the Relationship between Humans and AI, and the Potential for a Robot Apocalypse."
  }
]
