import { proxy } from "@/lib/backend"

type Params = Promise<{ id: string; skillId: string }>

export const DELETE = async (req: Request, { params }: { params: Params }) => {
  const { id, skillId } = await params
  return proxy(req, `/projects/${id}/skills/${skillId}`)
}
