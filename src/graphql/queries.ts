import { gql } from "graphql-request";

export const GET_ALL_ALERTS = gql`
  query {
  getAllAlerts {
      id
      alertType
      responsible
      priority
      driver
      generatingUnit
      state
      generationDate
    }
  }
`;


export const GET_ALERT_BY_ID = gql`
  query GetAlertById($id: ID!) {
    alert(id: $id) {
      id
      alertType
      responsible
      priority
      driver
      generatingUnit
      state
      generationDate
    }
  }
`;