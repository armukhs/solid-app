import { APIEvent } from "solid-start";
import { items } from "~/data";

export async function POST({ request }: APIEvent) {
  console.log(request.method)
  const json = await request.json()
  return new Response(JSON.stringify({ info: 'HALO', ts: new Date().toISOString()}))
}