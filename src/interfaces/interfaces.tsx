export interface State {
  news: News[];
}

export interface News {
  id?: number;
  title:string;
  text: string;
  description?: string;
  created_at?: string;
}