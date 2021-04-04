import { APIGatewayEvent } from "aws-lambda";

export const hello = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello there!', eMethod: event.httpMethod })
  }
}