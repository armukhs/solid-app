import { connect } from "@planetscale/database"

export function itemNotFound() {
  return new Response('Item Not Found', {
    status: 404
  })
}

export function getConnection() {
  return connect({
    host: process.env.PSCALE_HOST,
    username: process.env.PSCALE_USERNAME_DEV,
    password: process.env.PSCALE_PASSWORD_DEV,
  })
}