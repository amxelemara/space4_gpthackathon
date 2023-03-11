import "source-map-support/register";
import { Context, APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";
// import axios from 'axios';
import {myArticles} from './test_data/articles';

export const testHandler = async (event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResultV2> => {
  try {
    // Make API call
    // const response = await axios.get('https://example.com/api/data');

    // Return response as APIGatewayProxyResult
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myArticles),
    };
  } catch (error) {
    console.error(error);
    // Return error as APIGatewayProxyResult
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};

