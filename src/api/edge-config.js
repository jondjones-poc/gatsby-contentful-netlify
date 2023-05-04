import { createClient } from '@vercel/edge-config';

export default async function handler(request, response) {

  const config = createClient("https://edge-config.vercel.com/ecfg_5csg9pf5wmndbrkbt5brctdv9ceb?token=cc15e302-d558-4116-8bd7-5f1bce9586db");
  const example = await config.get('jontest');

  return response.status(200).json({ example });
}