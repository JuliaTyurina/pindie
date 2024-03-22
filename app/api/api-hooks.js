import { useEffect, useState } from 'react'
import { getNormalizedGameDataByCategory } from '@/app/api/api-utils'

export const useGetDataByCategory = (endpoint, category) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData () {
            const data = await getNormalizedGameDataByCategory(endpoint, category)
            setData(data)
        }
        fetchData()
  }, []);
  return data
};