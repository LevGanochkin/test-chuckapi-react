// export interface ServerResponse<T> {   *this was nescessary when worked with chuckApi, with mock data its useless
//   total: number;
//   result: T[];
// }

export interface IJoke {
  created_at: string;
  id: string;
  url: string;
  value: string;
}
