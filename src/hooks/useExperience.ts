"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type {
  ApiResponse,
  PaginatedData,
  Experience,
  ExperienceWithSkills,
  ExperienceInput,
} from "@/types/api"

interface ListParams {
  search?: string
  company?: string
  role?: string
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

export function useExperiences(params?: ListParams) {
  const qs = params ? toSearch(params as Record<string, unknown>) : ""
  return useQuery({
    queryKey: ["experience", params],
    queryFn: () =>
      apiFetch<PaginatedData<Experience>>(`/api/experience${qs ? `?${qs}` : ""}`),
  })
}

export function useExperience(id: string) {
  return useQuery({
    queryKey: ["experience", id],
    queryFn: () => apiFetch<ExperienceWithSkills>(`/api/experience/${id}`),
    enabled: !!id,
  })
}

export function useCreateExperience() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: ExperienceInput) =>
      apiFetch<Experience>("/api/experience", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["experience"] }),
  })
}

export function useUpdateExperience(id: string) {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: ExperienceInput) =>
      apiFetch<Experience>(`/api/experience/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["experience"] }),
  })
}

export function useDeleteExperience() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      apiFetch(`/api/experience/${id}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["experience"] }),
  })
}
