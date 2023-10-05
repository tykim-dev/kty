import useSWR from 'swr'
import type { SWRConfiguration } from 'swr'

type WordSearchProps = {
  type: string,
  level: number,
}

const useWord = (params: WordSearchProps, config?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR({url: '/api/word/list', params: params}, config);

  return {data, error, isLoading, isValidating, mutate};
}

export default useWord;