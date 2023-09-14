'use client';
import { SWRConfig } from 'swr'

type Props = ({
  children: React.ReactNode;
});

export const SWRProvider = ({ children }:Props) => {
  return (
    <SWRConfig value={{
        fetcher: (resource, init) => {
          const { url, params, method = 'GET' } = resource;
          return fetch(url + '?' + new URLSearchParams(params), init).then(res => res.json())
        }
    }}>
      {children}
    </SWRConfig>
  )
};