
import { Card } from "../ui/card"
import type React from "react";


interface Props {
    alertTitle: string;
    alertCount: number;
    icon:  React.ReactElement
}

export const CardItem = ({ alertTitle, alertCount, icon }:Props) => {

    const color = () => {
      if(alertTitle === 'Alertas Activas'){
        return 'red'
      }else if(alertTitle === 'Alertas Pendientes'){
        return 'yellow'
      } else if(alertTitle === 'Resueltas'){
        return 'green'
      } else{
        return 'red'
      }
    }

  return (
   <Card className="p-6">
        <div className="flex items-center justify-between">
        <div>
            <p className="text-sm font-medium text-muted-foreground">{ alertTitle }</p>
            <p className="text-3xl font-bold">{ alertCount }</p>
        </div>
        <div className={`h-12 w-12 rounded-full bg-${color()}-300/10 flex items-center justify-center`}>
            { icon }
        </div>
        </div>
    </Card>
  )
}