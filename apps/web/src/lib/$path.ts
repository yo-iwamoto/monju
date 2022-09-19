export const pagesPath = {
  "callback": {
    "github": {
      $url: (url?: { hash?: string }) => ({ pathname: '/callback/github' as const, hash: url?.hash })
    }
  },
  "events": {
    _id: (id: string | number) => ({
      "settings": {
        $url: (url?: { hash?: string }) => ({ pathname: '/events/[id]/settings' as const, query: { id }, hash: url?.hash })
      },
      $url: (url?: { hash?: string }) => ({ pathname: '/events/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  _gitkeep: '/.gitkeep',
  img: {
    info_svg: '/img/info.svg',
    no_img_png: '/img/no-img.png'
  }
} as const

export type StaticPath = typeof staticPath
