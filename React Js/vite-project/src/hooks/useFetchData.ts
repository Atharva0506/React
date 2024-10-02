import { useState, useEffect, useCallback } from "react";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useFetchData = <T,>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData((prevData) => (prevData !== result ? result : prevData)); 
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [url]); 

  useEffect(() => {
    fetchData(); 
  }, [fetchData]);

  return { data, loading, error };
};
