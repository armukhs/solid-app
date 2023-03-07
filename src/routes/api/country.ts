import { APIEvent, json } from "solid-start"

export async function GET({ env }: APIEvent) {
  const start = new Date().getTime()
  const url = 'https://dbs.arms.workers.dev/countries/ps/rand/10'
  const init = {
    headers: {
      'content-type': 'application/json'
    }
  }
  const rs = await fetch(url, init)
  const json = await rs.json()
  return json(json)
}