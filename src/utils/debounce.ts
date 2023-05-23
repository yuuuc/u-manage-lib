export function debounce(fn: Function, delay: number, immediate = false) {
  let timer: number | null
  return (...args: any) => {
    if (timer) clearInterval(timer)
    if (immediate) {
      if (!timer) fn.apply(null, args)
      timer = window.setTimeout(() => {
        timer = null
      }, delay)
    } else {
      timer = setTimeout(() => {
        fn.apply(null, args)
      }, delay)
    }
  }
}
