import { proxy } from "@/lib/backend"

type Params = Promise<{ key: string }>

export const GET = async (req: Request, { params }: { params: Params }) => {
  const { key } = await params
  return proxy(req, `/settings/${key}`)
}
export const PUT = async (req: Request, { params }: { params: Params }) => {
  const { key } = await params
  return proxy(req, `/settings/${key}`)
}
export const DELETE = async (req: Request, { params }: { params: Params }) => {
  const { key } = await params
  return proxy(req, `/settings/${key}`)
}
