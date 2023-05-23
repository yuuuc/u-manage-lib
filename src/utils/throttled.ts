export function throttled(fn: Function, delay = 500) {
  let oldTime = Date.now()
  return function (...args: any) {
    let newTime = Date.now()
    if (newTime - oldTime >= delay) {
      fn.apply(null, args)
      oldTime = Date.now()
    }
  }
}
