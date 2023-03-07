import { json } from "solid-start"
import { items } from "~/data"
import { getConnection } from "~/utils"

export async function GET() {
  const start = new Date().getTime()
  const conn = getConnection()
  const sql = `SELECT * FROM countrycode`
  console.log(conn)
  // const rs = await conn.execute(sql)
  // return json({
  //   db: Math.ceil(rs.time),
  //   worker: new Date().getTime() - start,
  //   rows: rs.size,
  //   data: rs.rows,
  // })
  return json(items)
}