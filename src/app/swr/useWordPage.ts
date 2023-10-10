import useSWR from 'swr'
import type { SWRConfiguration } from 'swr'

type WordPageProps = {
  type: string,
  level: number,
}

const useWordPage = (params: WordPageProps, config?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<Paginate>({url: '/api/word/page', params: params}, config);

  return {data, error, isLoading, isValidating, mutate};
}

export default useWordPage;