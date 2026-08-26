"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type {
  ApiResponse,
  PaginatedData,
  Project,
  ProjectWithSkills,
  ProjectInput,
} from "@/types/api"

interface ListParams {
  featured?: boolean
  search?: string
  limit?: number
  offset?: number
}

const toSearch = (p: Record<string, unknown>) =>
  new URLSearchParams(
    Object.entries(p)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => [k, String(v)]),
  ).toString()

const apiFetch = <T>(url: string, init?: RequestInit): Promise<ApiResponse<T>> =>
  fetch(url, init).then((r) => r.json())

export function useProjects(params?: ListParams) {
  const qs = params ? toSearch(params as Record<string, unknown>) : ""
  return useQuery({
    queryKey: ["projects", params],
    queryFn: () =>
      apiFetch<PaginatedData<Project>>(`/api/projects${qs ? `?${qs}` : ""}`),
  })
}

export function useProject(id: string) {
  return useQuery({
    queryKey: ["projects", id],
    queryFn: () => apiFetch<ProjectWithSkills>(`/api/projects/${id}`),
    enabled: !!id,
  })
}

export function useCreateProject() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: ProjectInput) =>
      apiFetch<Project>("/api/projects", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  })
}

export function useUpdateProject(id: string) {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: ProjectInput) =>
      apiFetch<Project>(`/api/projects/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  })
}

export function useDeleteProject() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      apiFetch(`/api/projects/${id}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["projects"] }),
  })
}
