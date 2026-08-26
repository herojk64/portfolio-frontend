"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type { ApiResponse, Setting, SettingInput } from "@/types/api"

const apiFetch = <T>(url: string, init?: RequestInit): Promise<ApiResponse<T>> =>
  fetch(url, init).then((r) => r.json())

export function useSettings() {
  return useQuery({
    queryKey: ["settings"],
    queryFn: () => apiFetch<Setting[]>("/api/settings"),
  })
}

export function useSetting(key: string) {
  return useQuery({
    queryKey: ["settings", key],
    queryFn: () => apiFetch<Setting>(`/api/settings/${key}`),
    enabled: !!key,
  })
}

export function useUpsertSetting() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (data: SettingInput) =>
      apiFetch<Setting>("/api/settings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["settings"] }),
  })
}

export function useDeleteSetting() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (key: string) =>
      apiFetch(`/api/settings/${key}`, { method: "DELETE" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["settings"] }),
  })
}
