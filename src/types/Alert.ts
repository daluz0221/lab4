export interface Alert {
  id: string;
  alertType: string;
  responsible: string;
  priority: 'low' | 'medium' | 'high';
  driver: string;
  generatingUnit: string;
  state: 'active' | 'pending' | 'resolved';
  generationDate: string;
}
