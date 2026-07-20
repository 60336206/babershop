/* Models for barbershop API */

export interface LoginResponse {
  token: string;
  firstName: string;
  surName: string;
  email: string;
  idUser: string;
  role: string;
  photo: string;
  message: string;
}

export interface ApiResponse<T = any> {
  type: 'success' | 'warning' | 'error' | 'exception';
  listMessage: string[];
  data?: T;
}
