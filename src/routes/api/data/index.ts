import { D1Database } from "@cloudflare/workers-types"
import { APIEvent, json } from "solid-start"
import { items } from "~/data"
import { getConnection } from "~/utils"

export async function GET({ env }: APIEvent) {
  const start = new Date().getTime()
  const { COUNTRIES } = (env as { COUNTRIES: D1Database })
  const rs = await COUNTRIES.prepare('SELECT * FROM countrycode').first()
  // console.log(rs)
  return json(rs)
}