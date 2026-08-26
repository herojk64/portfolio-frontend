const BACKEND = `${process.env.API_URL ?? "http://backend:8000"}/api/v1`

async function get<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${BACKEND}${path}`, { cache: "no-store" })
    if (!res.ok) return null
    const body = await res.json()
    return (body.data as T) ?? null
  } catch {
    return null
  }
}

export type Profile = {
  name: string
  description: string
  role: string
  location: string
  available_for_work: boolean
  email: string
  phone_no: string
  icon: string
}

export type SocialLink = {
  title: string
  url: string
  icon: string
}

export type Project = {
  ID: string
  Title: string
  Description: string | null
  RepoUrl: string | null
  LiveUrl: string | null
  ImageUrl: string | null
  IsFeatured: boolean
  DisplayOrder: number
}

export type Skill = {
  ID: string
  Name: string
  Category: string | null
  Proficiency: string | null
  Icon: string | null
  DisplayOrder: number
}

export type Experience = {
  ID: string
  Company: string
  Role: string
  Description: string | null
  StartDate: string
  EndDate: string | null
  Location: string | null
}

export async function getProfile(): Promise<Profile | null> {
  const res = await get<{ key: string; value: Profile }>("/settings/profile")
  return res?.value ?? null
}

export async function getSocial(): Promise<SocialLink[]> {
  const res = await get<{ key: string; value: SocialLink[] }>("/settings/social")
  return res?.value ?? []
}

export async function getProjects(featured?: boolean): Promise<Project[]> {
  const qs = new URLSearchParams({ limit: "100" })
  if (featured !== undefined) qs.set("featured", String(featured))
  const res = await get<{ data: Project[]; total: number }>(`/projects?${qs}`)
  return res?.data ?? []
}

export async function getSkillsGrouped(): Promise<Map<string, Skill[]>> {
  const res = await get<{ data: Skill[]; total: number }>("/skills?limit=100")
  const skills = res?.data ?? []
  const order = ["Backend", "Frontend", "Database", "DevOps", "Scripting"]
  const groups = new Map<string, Skill[]>()
  for (const skill of skills) {
    const cat = skill.Category ?? "Other"
    if (!groups.has(cat)) groups.set(cat, [])
    groups.get(cat)!.push(skill)
  }
  const sorted = new Map<string, Skill[]>()
  for (const cat of order) if (groups.has(cat)) sorted.set(cat, groups.get(cat)!)
  for (const [cat, list] of groups) if (!sorted.has(cat)) sorted.set(cat, list)
  return sorted
}

export async function getExperiences(): Promise<Experience[]> {
  const res = await get<{ data: Experience[]; total: number }>("/experience?limit=100")
  const data = res?.data ?? []
  return data.sort((a, b) => b.StartDate.localeCompare(a.StartDate))
}

export function formatDate(ym: string): string {
  const [year, month] = ym.split("-")
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  return `${months[parseInt(month) - 1]} ${year}`
}
