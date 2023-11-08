import useSWRImmutable from 'swr'
import type { SWRConfiguration } from 'swr'

type OpenAIProps = {
  word: string,
}

const useOpenAI = (params: OpenAIProps, config?: SWRConfiguration) => {
  // 자동갱신 비활성화
  const { data, error, isLoading, isValidating, mutate } = useSWRImmutable({url: '/api/openai', params: params, method: 'POST'}, config);

  return {data, error, isLoading, isValidating, mutate};
}

export default useOpenAI;