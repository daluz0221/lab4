// hooks/useAlerts.ts
import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../api/graphqlClient";
import { GET_ALL_ALERTS } from "@/graphql/queries";

import type { Alert } from "../types/Alert";

interface GetAllAlertsResponse {
  getAllAlerts: Alert[];
}

export const useAlerts = () =>
  useQuery({
    queryKey: ["alerts"],
    queryFn: async () =>
      graphqlClient.request<GetAllAlertsResponse>(GET_ALL_ALERTS),
  });
