import useSWR from 'swr'
import type { SWRConfiguration } from 'swr'

type OpenAIProps = {
  word: string,
}

const useOpenAI = (params: OpenAIProps, config?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR({url: '/api/openai', params: params, method: 'POST'}, config);

  return {data, error, isLoading, isValidating, mutate};
}

export default useOpenAI;