export interface Alert {
  id: string;
  alertType: string;
  responsible: string;
  priority: 'Baja' | 'Media' | 'Alta';
  driver: string;
  generatingUnit: string;
  state: 'Resuelto' | 'En Proceso' | 'En Espera';
  generationDate: string;
}
