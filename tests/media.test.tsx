import { getAllByRole, getAllByTestId, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import { Media } from '../src/features/link/media/media'
import { delay, http, HttpResponse } from 'msw'
import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../src/app/store'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'
import { fetchRedditPopular } from '../src/features/link/media/mediaSlice'
import App from '../src/App'

describe('Media', () => {
 


  const renderEverything = () => {


render(
  <Provider store={store}>
    <MemoryRouter>
      <Media />
    </MemoryRouter>
    
  </Provider>
  )
  }
  
  it('should render loading message if loading', () => {
    http.get('/results', async() => {
     await delay();
      return HttpResponse.json([])})


      renderEverything()

      expect(screen.getByText(/loading .../i)).toBeInTheDocument()
  })

  it('should render error message if error in fetch', async() => {
    http.get('/results', async() => HttpResponse.error())


      renderEverything()

      await waitForElementToBeRemoved(() => screen.getByText(/loading .../i))

      expect(screen.getByRole('alert')).toBeInTheDocument()
  })

 it('should run api fetch if normal', async() => {
 const response = await fetch('/homefeed')
  
 expect(response.status).toBe(200)

 expect(response.statusText).toBe('OK')

 const jsonResponse = await response.json()

 expect(jsonResponse).toEqual({
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
})

 })

 it('should render mock data', async() => {
  http.get('/results', () => {
    return HttpResponse.json([
      {id: 12334,
    author: "conor james",
    title: "hello world",
    subreddit: "r/testing",
    link: "http/:www.testing.com",
    comments: "http/:www.testing/comments.com",
      }
    ])
  })

  renderEverything()
  await waitForElementToBeRemoved(() => screen.getByText(/loading.../i))
  screen.debug()
  
 })
// cant be done untill i know how to render fake api data
it('should render comments page when clicked', async () => {
  
  render(
    <Provider store={store}>
      <App />  
    </Provider>
)
await waitForElementToBeRemoved(() => screen.getByText(/loading.../i))



})


})