import "source-map-support/register";
import { Context, APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";

import { testHandler } from "./handlers/test"
import { serveHandler } from "./handlers/serve"
import { chatHandler } from "handlers/chatgpt";
import { articleHandler } from "handlers/article"


export const chat = chatHandler
export const article = articleHandler
export const test = testHandler
export const serve = serveHandler
