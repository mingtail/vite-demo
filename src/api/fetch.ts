interface Options {
  url: string
  data?: any
}

export function fetch(_options: Options): any {
  // const { url, data = {} } = options
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rate = Math.random()
      if (rate > 0.1) {
        const res = { code: 200 }
        resolve(res)
      } else {
        console.warn('Failed to obtain data!')
        reject(new Error('Failed to obtain data!'))
      }
    }, 1000)
  })
    .then(res => {
      return res
    })
    .catch(err => {
      throw err
    })
}
