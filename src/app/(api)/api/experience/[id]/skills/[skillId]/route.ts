import { proxy } from "@/lib/backend"

export const DELETE = (
  req: Request,
  { params }: { params: Promise<{ id: string; skillId: string }> },
) => params.then(({ id, skillId }) => proxy(req, `/experience/${id}/skills/${skillId}`))
