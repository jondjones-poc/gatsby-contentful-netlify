import { createClient } from '@vercel/edge-config';

export default async function handler(request, response) {

  const config = createClient("example");
  const example = await config.get('jontest');

  return response.status(200).json({ example });
}