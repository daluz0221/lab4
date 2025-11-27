import type { Alert } from '@/types/Alert';

export const mockAlerts: Alert[] = [
  {
    id: 'ALT-001',
    alertType: 'System Overload',
    responsible: 'John Smith',
    priority: 'high',
    driver: 'Temperature Sensor',
    generatingUnit: 'Unit A-01',
    state: 'active',
    generationDate: '2025-11-27T08:30:00Z'
  },
  {
    id: 'ALT-002',
    alertType: 'Maintenance Required',
    responsible: 'Sarah Johnson',
    priority: 'medium',
    driver: 'Pressure Monitor',
    generatingUnit: 'Unit B-03',
    state: 'pending',
    generationDate: '2025-11-27T09:15:00Z'
  },
  {
    id: 'ALT-003',
    alertType: 'Low Performance',
    responsible: 'Mike Davis',
    priority: 'low',
    driver: 'Output Monitor',
    generatingUnit: 'Unit C-05',
    state: 'resolved',
    generationDate: '2025-11-26T14:20:00Z'
  },
  {
    id: 'ALT-004',
    alertType: 'Critical Failure',
    responsible: 'Emma Wilson',
    priority: 'high',
    driver: 'Safety System',
    generatingUnit: 'Unit A-02',
    state: 'active',
    generationDate: '2025-11-27T10:45:00Z'
  },
  {
    id: 'ALT-005',
    alertType: 'Routine Check',
    responsible: 'David Brown',
    priority: 'low',
    driver: 'Schedule Monitor',
    generatingUnit: 'Unit D-07',
    state: 'resolved',
    generationDate: '2025-11-25T11:00:00Z'
  },
  {
    id: 'ALT-006',
    alertType: 'Warning Threshold',
    responsible: 'Lisa Anderson',
    priority: 'medium',
    driver: 'Flow Sensor',
    generatingUnit: 'Unit B-04',
    state: 'pending',
    generationDate: '2025-11-27T07:30:00Z'
  },
  {
    id: 'ALT-007',
    alertType: 'System Overload',
    responsible: 'Tom Martinez',
    priority: 'high',
    driver: 'Power Monitor',
    generatingUnit: 'Unit A-03',
    state: 'active',
    generationDate: '2025-11-27T11:20:00Z'
  },
  {
    id: 'ALT-008',
    alertType: 'Calibration Needed',
    responsible: 'Rachel Green',
    priority: 'medium',
    driver: 'Measurement System',
    generatingUnit: 'Unit C-06',
    state: 'pending',
    generationDate: '2025-11-26T16:40:00Z'
  }
];
