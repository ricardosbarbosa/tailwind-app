import axios from "axios";
import { QueryClient, QueryFunction } from "react-query";

const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com${queryKey[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      suspense: true,
    },
  },
})

export default queryClient
