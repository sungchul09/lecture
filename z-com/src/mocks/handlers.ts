import { http, HttpResponse } from "msw";

export const handlers = [
  http.post('/api/login', () => {
    return HttpResponse.json({
      userId: 1,
      nickname: 'sc',
      id: 'seongcheol',
      image: '/asdf.jpg'
    }, {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;httpOnly;Path=/'
      }
    })
  }),
  http.post('/api/logout', () => {
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
      }
    })
  })
]