

import './App.css'
import { AlertsTable } from './components/custom/AlertsTable'
import { CardGrid } from './components/custom/CardGrid'
import { Card } from './components/ui/card'

function App() {


  return (
    <>
      <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Alerts Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage system alerts in real-time</p>
        </div>

       <CardGrid />

        <Card className="p-6">
          <AlertsTable  />
        </Card>
      </div>
    </div>
      
      
    </>
  )
}

export default App
