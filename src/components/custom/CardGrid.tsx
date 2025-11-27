import { CardItem } from "./CardItem"
import { AlertCircle, Activity, CheckCircle, Clock } from 'lucide-react';


export const CardGrid = () => {
  return (
     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          
        <CardItem alertTitle="Alertas Activas" alertCount={3} icon={<AlertCircle className="h-6 w-6 text-red-400" />} />
        <CardItem alertTitle="Alertas Pendientes" alertCount={5} icon={ <Clock className="h-6 w-6 text-yellow-400" />} />
        <CardItem alertTitle="Resueltas" alertCount={25} icon={ <CheckCircle className="h-6 w-6 text-green-400" />} />
        <CardItem alertTitle="Alta prioridad" alertCount={2} icon={ <Activity className="h-6 w-6 text-red-400" />} />
         
        </div>
  )
}