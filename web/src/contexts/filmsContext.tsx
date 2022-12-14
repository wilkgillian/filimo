import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { api } from '../services/api';

interface FilmsProviderProps {
  children: ReactNode;
}

interface FilmsContextProps {
  dados: FilmsProps[];
  loading: boolean;
}

interface FilmsProps {
  id: string;
  title: string;
  description: string;
  producer: string;
  director: string;
  duration: number;
  rt_score: number;
  genre: string;
  movie_banner: string;
  image: string;
  running_time: string;
  release_date: string;
}

export const FilmsContext = createContext({} as FilmsContextProps);

export function FilmsProvider({ children }: FilmsProviderProps) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('/films');
      setDados(data);
    }
    loadData();
    setLoading(false);
  }, [dados]);
  return (
    <FilmsContext.Provider value={{ dados, loading }}>
      {children}
    </FilmsContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(FilmsContext);
