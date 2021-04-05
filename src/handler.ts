import { APIGatewayEvent } from "aws-lambda";

export const hello = async (event: APIGatewayEvent) => {
  console.log('should go to CloudWatch')
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello there, handsome!!!', eMethod: event.httpMethod })
  }
}