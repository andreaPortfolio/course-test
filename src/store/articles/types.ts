export interface ArticlesState {
  data: Article[];
  loading: boolean;
  error: any;
}

export interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}
