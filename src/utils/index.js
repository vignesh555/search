export function singularPluralChk (length = 0, singular, plural, literal = '') {
  if (length > 1) {
    return ` ${literal} ${length}  ${plural}`
  } else if (length === 1) {
    return ` ${literal} ${length}  ${singular}`
  }
  return ''
}
export function timeSince (date) {
  let seconds = Math.floor((new Date() - date) / 1000)

  let interval = Math.floor(seconds / 31536000)

  if (interval > 1) {
    return interval + ' years'
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return interval + ' months'
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return interval + ' days'
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return interval + ' hours'
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return interval + ' minutes'
  }
  return Math.floor(seconds) + ' seconds'
}

export function baseURL (url) {
  const urlArray = url.split('/')
  return urlArray[2] ? urlArray[2].replace('www.', '') : ''
}
