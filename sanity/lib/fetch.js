import { client } from "./client"

const REVALIDATE_SECONDS = 60

export async function sanityFetch(query, params = {}, fallback = []) {
  try {
    return await client.fetch(query, params, {
      next: { revalidate: REVALIDATE_SECONDS },
    })
  } catch {
    return fallback
  }
}
