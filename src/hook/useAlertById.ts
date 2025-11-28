// hooks/useAlertById.ts
import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../api/graphqlClient";
import { GET_ALERT_BY_ID } from "../graphql/queries";
import type { Alert } from "../types/Alert";

interface GetAlertByIdResponse {
  alert: Alert;
}

export const useAlertById = (id: string) =>
  useQuery({
    queryKey: ["alert", id],
    queryFn: async () =>
      graphqlClient.request<GetAlertByIdResponse>(GET_ALERT_BY_ID, { id }),
    enabled: !!id, // se ejecuta solo cuando ID existe
  });
