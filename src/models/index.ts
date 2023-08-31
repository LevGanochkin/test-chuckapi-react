export interface ServerResponse<T> {
  total: number;
  result: T[];
}

export interface IJoke {
  created_at: string;
  icon_url: string;
  id: string;
  url: string;
  value: string;
}
