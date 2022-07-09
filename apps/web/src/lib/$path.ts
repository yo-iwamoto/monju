export const pagesPath = {
  "events": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/events/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  _gitkeep: '/.gitkeep',
  img: {
    info_svg: '/img/info.svg'
  }
} as const

export type StaticPath = typeof staticPath
