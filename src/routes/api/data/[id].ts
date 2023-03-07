import { APIEvent, json } from "solid-start"
import { items } from "~/data"
import { itemNotFound } from "~/utils"

export function GET({ params }: APIEvent) {
  const item = items.find(x => x.id == parseInt(params.id))
  if (!item) return itemNotFound()
  return json(item)
}