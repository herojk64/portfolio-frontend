"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type { ApiResponse, PaginatedData, Skill, SkillInput } from "@/types/api"

interface ListParams {
  category?: string
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

export function useSkills(params?: ListParams) {
  const qs = params ? toSearch(params as Record<string, unknown>) : ""
  return useQuery({
    queryKey: ["skills", params],
    queryFn: () =>
      apiFetch<PaginatedData<Skill>>(`/api/skills${qs ? `?${qs}` : ""}`),
  })
}

export function useSkill(id: string) {
  return useQuery({
    queryKey: ["skills", id],
    queryFn: () => apiFetch<Skill>(`/api/skills/${id}`),
    enabled: !!id,
  })
}

export function useCreateSkill() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: SkillInput) =>
      apiFetch<Skill>("/api/skills", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["skills"] }),
  })
}

export function useUpdateSkill(id: string) {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: SkillInput) =>
      apiFetch<Skill>(`/api/skills/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["skills"] }),
  })
}

export function useDeleteSkill() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      apiFetch(`/api/skills/${id}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["skills"] }),
  })
}
