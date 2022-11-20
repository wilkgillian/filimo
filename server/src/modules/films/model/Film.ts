import { v4 as uuidV4 } from 'uuid';

class Film {
  id?: string;
  title: string;
  created_at: Date;
  url_file: string;
  // original_title?: string;
  // original_title_romanised?: string;
  // image: string;
  // movie_banner: string;
  description: string;
  // director: string;
  // producer: string;
  // release_date: number;
  // running_time: number;
  // rt_score?: number;
  // people?: number;
  // species?: number;
  // locations?: number;
  // vehicles?: number;
  // url?: number;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Film };