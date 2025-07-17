import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);      // 받아온 데이터
  const [loading, setLoading] = useState(true); // 로딩 여부
  const [error, setError] = useState(null);     // 에러 여부

  useEffect(() => {
    let ignore = false; // 언마운트 방지용 플래그

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('데이터 불러오기 실패');
        return res.json();
      })
      .then((data) => {
        if (!ignore) setData(data);
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;