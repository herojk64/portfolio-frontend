import { proxy } from "@/lib/backend"

type Params = Promise<{ id: string }>

export const GET = async (req: Request, { params }: { params: Params }) => {
  const { id } = await params
  return proxy(req, `/skills/${id}`)
}
export const PUT = async (req: Request, { params }: { params: Params }) => {
  const { id } = await params
  return proxy(req, `/skills/${id}`)
}
export const DELETE = async (req: Request, { params }: { params: Params }) => {
  const { id } = await params
  return proxy(req, `/skills/${id}`)
}
