const API = `${process.env.API_URL ?? "http://backend:8000"}/api/v1`

export async function proxy(req: Request, path: string): Promise<Response> {
  const target = new URL(`${API}${path}`)

  // forward query params
  new URL(req.url).searchParams.forEach((v, k) => target.searchParams.set(k, v))

  // forward cookies (session, csrf)
  const headers: Record<string, string> = { "content-type": "application/json" }
  const cookie = req.headers.get("cookie")
  if (cookie) headers["cookie"] = cookie

  const body =
    req.method !== "GET" && req.method !== "HEAD" ? await req.text() : undefined

  const upstream = await fetch(target, {
    method: req.method,
    headers,
    body,
    cache: "no-store",
  })

  const data = await upstream.json()

  const resHeaders: Record<string, string> = {}
  const setCookie = upstream.headers.get("set-cookie")
  if (setCookie) resHeaders["set-cookie"] = setCookie

  return Response.json(data, { status: upstream.status, headers: resHeaders })
}
