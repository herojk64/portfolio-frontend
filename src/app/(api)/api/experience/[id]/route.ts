import { proxy } from "@/lib/backend"

export const GET = (req: Request, { params }: { params: Promise<{ id: string }> }) =>
  params.then(({ id }) => proxy(req, `/experience/${id}`))

export const PUT = (req: Request, { params }: { params: Promise<{ id: string }> }) =>
  params.then(({ id }) => proxy(req, `/experience/${id}`))

export const DELETE = (req: Request, { params }: { params: Promise<{ id: string }> }) =>
  params.then(({ id }) => proxy(req, `/experience/${id}`))
