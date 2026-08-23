import { useEffect, useState } from "react";


import { getDashboard } from "../services/dashboard.service";

export function useDashboard() {
  const [data, setData] = useState<
    Awaited<ReturnType<typeof getDashboard>> | null
  >(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    getDashboard().then((result) => {
      setData(result);

      setLoading(false);
    });
  }, []);

  return {
    data,

    loading,
  };
}