;(async () => {
  const { document: doc } = this

  console.clear()

  for (const el of doc.querySelectorAll('*')) {
    el.style = `${el.style.cssText} user-select: text !important`
  }

  const imgStyle = `position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 100px; aspectRadio: 1; opacity: 10;`
  const imgB64 = `UklGRuQCAABXRUJQVlA4WAoAAAAQAAAAYwAAYwAAQUxQSMsBAAABBijS9r9R0ujo3GBzAXrOQPWRqBwgen3Tq1Yy0w8QyQVaBgunqH8m+3OQ/6842hcRjhxJcqJMYA3mNKan+MH/NzajNC+qwWT6j0FV5Gmk8FxWnj46+lSH0zJTdQr9pqVOtg0yJSS79Qd5iHo3kSc+uiFvbxALs3FNLGJDktWxIyYdVsVYeyBGsSZDePxMrD4jlGjGoxkxO0PCzsIJCYgF7v2KRLzi3ZITEhKcJ8MxiYmQj+OZHDPw9cdnEvQZXKPKA4mKVR7GJCx4hl8njeMYmONrEhexP0ekQPj3+hsN3MCXXVIhfKl1AE96HzpAz48+KRF+JWKjhcarqMxaLbTwoSQ1lj6c6uHU58yTHuBxInV6cOhOTorMu1NoouhOpQl0Z6CJQXcmmkB3ppqY2sDGDxuX2HiQjb5vYwyzMRbbmFNMzI025ngbtYqNmstE7WijBjZRy9tYk9hYW5lYI9pY65pYs5vIHmxkKCayIBOZlo1szkTGaCIrNZH5msiuTWTwFt4l2HgnIugG0+iPjUDW+IhhsrxBHIib7NZeBQzq3STQYdZvOhaVbYMsUGSE8vTxi4bncFpmUaDOKM2LajCZ/mNQFXkaBd/X/AcAVlA4IPIAAABwCwCdASpkAGQAP83g6m6/tT+qo1ZsA/A5iWYIcrGSZ+5y2DkYPyldZjqRL9NBSAFcgKheHbz3gOLBbMdQIIejQcHbWHMacB0a1OvwviIeXfYGrMnH7SLb0o7OKpzjmEk1hHGAAP4zvVhJ/+ynnuJdYRVBvEop5+GHEMfv/BEBecphfjreMW8/WQEmQ8/ekuZ9/bKZ7A7Nx/D1OFcDWhldGiJdd8F9tZmYFQ6ycKEY73Fim2CGZ/NahfhepcOwNTdywHyPBGNMAHrVxZYZHUf610ETwg0I7mIDGIxKniIMbzxwwmUyp6eK7tMWYAAAAAAAAA==`

  const img = doc.createElement('img')
  Object.assign(img, {
    style: imgStyle,
    src: `data:image/webp;base64,${imgB64}`,
  })

  doc.body.append(img)
  await new Promise((res) => setTimeout(res, 1000))
  img.remove()
})()
