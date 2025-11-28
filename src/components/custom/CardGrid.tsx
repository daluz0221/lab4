import { useAlerts } from "@/hook/useAlerts";
import { CardItem } from "./CardItem"
import { AlertCircle, Activity, CheckCircle, Clock } from 'lucide-react';


export const CardGrid = () => {

    const { data, isLoading, error } = useAlerts();

    if (isLoading) return <div>Loading alerts...</div>
    if (error) return <div>Error loading alerts: {(error as Error).message}</div>
    if(!data) return <div>No data available</div>;

    const alerts = data?.getAllAlerts || [];

    const pendingAlerts = alerts.filter(alert => alert.state === 'En Espera').length;
    const inProcessAlerts = alerts.filter(alert => alert.state === 'En Proceso').length;
    const resolvedAlerts = alerts.filter(alert => alert.state === 'Resuelto').length;

  return (
     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          
        <CardItem alertTitle="Alertas en espera" alertCount={pendingAlerts} icon={<AlertCircle className="h-6 w-6 text-red-400" />} />
        <CardItem alertTitle="Alertas En proceso" alertCount={inProcessAlerts} icon={ <Clock className="h-6 w-6 text-yellow-400" />} />
        <CardItem alertTitle="Alertas Resueltas" alertCount={resolvedAlerts} icon={ <CheckCircle className="h-6 w-6 text-green-400" />} />
         
        </div>
  )
}