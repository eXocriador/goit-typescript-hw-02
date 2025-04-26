export interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

export interface FetchImagesResponse {
  hits: Image[];
  totalHits: number;
}

export type Status = 'idle' | 'pending' | 'resolved' | 'rejected';
