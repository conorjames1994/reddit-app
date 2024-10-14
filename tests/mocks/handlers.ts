import { http, HttpResponse } from 'msw';
import { db } from './database';


export const handlers = [
  http.get('/results', () => {
    return HttpResponse.json([
      {id: 12334,
    author: "conor james",
    title: "hello world",
    subreddit: "r/testing",
    link: "https://redux.js.org/usage/writing-tests#writing-integration-tests-with-components",
    comments: "https://redux.js.org/usage/writing-tests#writing-integration-tests-with-components",
      }
    ])
  }),
  http.get('/homefeed', () => {
    return HttpResponse.json(
      {
        kind: 'listing',
        data: {
          children: [
            {
              0: {data: 
                {id: 12334,
                  author: "conor james",
                  title: "hello world",
                  subreddit: "r/testing",
                  link: "http/:www.testing.com",
                  comments: "http/:www.testing/comments.com",
                  image: "http/:www.testing.com",
                    }
              }
            }
          ]
        }
      }
    )
  })
];