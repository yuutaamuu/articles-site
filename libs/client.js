import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'paua0ygbav',
  apiKey: process.env.API_KEY,
})
