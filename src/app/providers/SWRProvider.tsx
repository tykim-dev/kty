'use client';
import { SWRConfig } from 'swr'

type Props = ({
  children: React.ReactNode;
});

export const SWRProvider = ({ children }:Props) => {
  return (
    <SWRConfig value={{
        fetcher: (resource, init) => {
          const { url, params } = resource;
          console.log(url, params);
          fetch(url, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params,
          }).then(res => res.json())
        }
    }}>
      {children}
    </SWRConfig>
  )
};