import "source-map-support/register";
import { Context, APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";

import { testHandler } from "./handlers/test"
import { serveHandler } from "./handlers/serve"
import { chatHandler } from "handlers/chatgpt";
import { articleHandler } from "handlers/article"
import { testDataHandler } from "handlers/test_data"


export const chat = chatHandler
export const article = articleHandler
export const test = testHandler
export const serve = serveHandler
export const testData = testDataHandler
