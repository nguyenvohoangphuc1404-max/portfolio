import { useEffect, useState } from 'react';
import { getRepos } from '../lib/github';

export function useRepos(username) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    let ignore = false;

    getRepos(username)
      .then((repos) => ({ username, repos }))
      .catch((error) => ({ username, error }))
      .then((next) => {
        if (!ignore) setResult(next);
      });

    return () => {
      ignore = true; // Cleanup chống race condition
    };
  }, [username]);

  // Loading được suy ra từ việc kiểm tra username hiện tại đã có dữ liệu tương ứng trong state chưa
  const loading = result?.username !== username;

  return { ...result, loading };
}