import useSWR from 'swr'
import useSWRImmutable from 'swr'
import type { SWRConfiguration } from 'swr'

type ClassTypeProps = {
  params: any,
}

const useClassTypeList = (params: ClassTypeProps, config?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR({url: '/api/levelUp/class', params: params}, config);

  return {data, error, isLoading, isValidating, mutate};
}

const useLevelUpList = (params: ClassTypeProps, config?: SWRConfiguration) => {
  // 자동갱신 비활성화
  const { data, error, isLoading, isValidating, mutate } = useSWRImmutable({url: '/api/levelUp/list', params: params, method: 'POST'}, config);

  return {data, error, isLoading, isValidating, mutate};
}

export {
  useClassTypeList,
  useLevelUpList
};