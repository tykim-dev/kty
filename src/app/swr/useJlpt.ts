import useSWR from 'swr'
import type { SWRConfiguration } from 'swr'

type ClassTypeProps = {
  params: any,
}

const useClassTypeList = (params: ClassTypeProps, config?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR({url: '/api/jlpt/class', params: params}, config);

  return {data, error, isLoading, isValidating, mutate};
}

const useJlptList = (params: ClassTypeProps, config?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR({url: '/api/jlpt/list', params: params, method: 'POST'}, config);

  return {data, error, isLoading, isValidating, mutate};
}

export {
  useClassTypeList,
  useJlptList
};