import { proxy } from "@/lib/backend"

export const POST = (req: Request, { params }: { params: Promise<{ id: string }> }) =>
  params.then(({ id }) => proxy(req, `/experience/${id}/skills`))
