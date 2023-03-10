import "source-map-support/register";
import { Context, APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";

import { testHandler } from "./handlers/test"
import { serveHandler } from "./handlers/serve"


export const test = testHandler
export const serve = serveHandler
