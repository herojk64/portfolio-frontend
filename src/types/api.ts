export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

export interface PaginatedData<T> {
  data: T[]
  total: number
}

export interface Project {
  id: string
  title: string
  description: string | null
  repo_url: string | null
  live_url: string | null
  image_url: string | null
  is_featured: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface Skill {
  id: string
  name: string
  category: string | null
  proficiency: string | null
  icon: string | null
  display_order: number
  created_at: string
  updated_at: string
}

export interface Setting {
  key: string
  value: unknown
  created_at: string
  updated_at: string
}

export interface Experience {
  id: string
  company: string
  role: string
  description: string | null
  start_date: string
  end_date: string | null
  location: string | null
  created_at: string
  updated_at: string
}

export interface ExperienceWithSkills {
  experience: Experience
  skills: Skill[]
}

export interface ExperienceInput {
  company: string
  role: string
  description?: string
  start_date: string
  end_date?: string
  location?: string
}

export interface ProjectWithSkills {
  project: Project
  skills: Skill[]
}

// Request shapes
export interface ProjectInput {
  title: string
  description?: string
  repo_url?: string
  live_url?: string
  image_url?: string
  is_featured?: boolean
  display_order?: number
}

export interface SkillInput {
  name: string
  category?: string
  proficiency?: string
  icon?: string
  display_order?: number
}

export interface SettingInput {
  key: string
  value: unknown
}
