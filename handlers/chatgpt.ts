
import "source-map-support/register";
import { Context, APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
// import { APIGatewayProxyEvent } from 'aws-lambda';
const { Configuration, OpenAIApi } = require("openai");
// import axios from 'axios';
//
//

const GPTKEY = ''
async function generateText(prompt: string): Promise<string> {
  const configuration = new Configuration({
    apiKey: GPTKEY   });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 100,
    temperature: 0,
  });
  
  
  const text = response.data.choices[0].text.trim();
  return text;
}


export const chatHandler = async (event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResult> => {
  try {

    const response = await generateText("Explain what machine learning is?")


    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          message: response,
        }
      ),
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

