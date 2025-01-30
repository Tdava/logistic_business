export interface CallbackRequest {
  name: string;
  phone: string;
}

export interface CalculationRequest {
  name: string;
  phone: string;
  fromCity: string;
  toCity: string;
  weight: number;
  volume: number;
  goodsType: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
} 