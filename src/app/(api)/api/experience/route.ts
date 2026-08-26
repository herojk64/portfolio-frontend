import { proxy } from "@/lib/backend"

export const GET = (req: Request) => proxy(req, "/experience")
export const POST = (req: Request) => proxy(req, "/experience")
