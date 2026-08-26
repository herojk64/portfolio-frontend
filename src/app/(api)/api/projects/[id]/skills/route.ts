import { proxy } from "@/lib/backend"

type Params = Promise<{ id: string }>

export const POST = async (req: Request, { params }: { params: Params }) => {
  const { id } = await params
  return proxy(req, `/projects/${id}/skills`)
}
