import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './auth/github'
import type { Methods as Methods2 } from './auth/github/callback'
import type { Methods as Methods3 } from './auth/github/code'
import type { Methods as Methods4 } from './user/example'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/auth/github'
  const PATH1 = '/auth/github/callback'
  const PATH2 = '/auth/github/code'
  const PATH3 = '/user/example'
  const GET = 'GET'
  const POST = 'POST'

  return {
    auth: {
      github: {
        callback: {
          get: (option: { query: Methods2['get']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).send(),
          $get: (option: { query: Methods2['get']['query'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).send().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
            `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        code: {
          post: (option: { query: Methods3['post']['query'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option).json(),
          $post: (option: { query: Methods3['post']['query'], config?: T | undefined }) =>
            fetch<Methods3['post']['resBody'], BasicHeaders, Methods3['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
          $path: (option?: { method: 'post'; query: Methods3['post']['query'] } | undefined) =>
            `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).send(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods1['get']['status']>(prefix, PATH0, GET, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      }
    },
    user: {
      example: {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).send(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, PATH3, GET, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH3}`
      }
    },
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, '', GET, option).send(),
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, '', GET, option).send().then(r => r.body),
    $path: () => `${prefix}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
