import { createClient } from '@vercel/kv';

export default async function handler(request, response) {
  const client = createClient({
    url: "https://amazed-doberman-35138.kv.vercel-storage.com",
    token: "AYlCASQgMDQxMDAzYzktZjQzNC00OGJhLWEyYzctNTJjZTgwZmMwOGYzYThmNDViOTllMThhNDVkZmEyMDQzMmYwMGQxMDQyYzI=",
  });

  const user = await client.hgetall('user:me');
  return response.status(200).json({ user });
}