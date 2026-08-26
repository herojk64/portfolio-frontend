import { proxy } from "@/lib/backend"

export const GET = (req: Request) => proxy(req, "/settings")
export const POST = (req: Request) => proxy(req, "/settings")
