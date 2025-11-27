import { Filter, Search } from "lucide-react"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Badge } from "../ui/badge"
import { useState } from "react"
import { mockAlerts } from "@/data/mockData"


const alerts = mockAlerts

export const AlertsTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [stateFilter, setStateFilter] = useState<string>('all');

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = 
      alert.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.alertType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.responsible.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.generatingUnit.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPriority = priorityFilter === 'all' || alert.priority === priorityFilter;
    const matchesState = stateFilter === 'all' || alert.state === stateFilter;

    return matchesSearch && matchesPriority && matchesState;
  });

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'secondary';
    }
  };

  const getStateVariant = (state: string) => {
    switch (state) {
      case 'active': return 'destructive';
      case 'pending': return 'warning';
      case 'resolved': return 'success';
      default: return 'secondary';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search alerts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Select value={priorityFilter} onValueChange={setPriorityFilter} >
            <SelectTrigger className="w-[140px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Select value={stateFilter} onValueChange={setStateFilter}>
            <SelectTrigger className="w-[140px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Alert Type</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Responsible</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Generating Unit</TableHead>
              <TableHead>Generation Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAlerts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-muted-foreground">
                  No alerts found
                </TableCell>
              </TableRow>
            ) : (
              filteredAlerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell className="font-medium">{alert.id}</TableCell>
                  <TableCell>{alert.alertType}</TableCell>
                  <TableCell>
                    <Badge variant={ getPriorityVariant(alert.priority) }>
                      {alert.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStateVariant(alert.state)}>
                      {alert.state}
                    </Badge>
                  </TableCell>
                  <TableCell>{alert.responsible}</TableCell>
                  <TableCell>{alert.driver}</TableCell>
                  <TableCell>{alert.generatingUnit}</TableCell>
                  <TableCell className="text-muted-foreground">
                 {formatDate(alert.generationDate)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}