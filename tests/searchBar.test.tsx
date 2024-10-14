import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { it, expect, describe, vi, beforeAll, afterAll } from 'vitest'
import { SearchBar } from '../src/features/searchBar/searchBar'
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../src/app/store';
import { delay, http, HttpResponse } from 'msw';
import { db } from './mocks/database';
import userEvent from '@testing-library/user-event';
import { server } from './mocks/server';



describe('SearchBar', () => {

const renderEverything = () => {

  const searchTerm = "example"
  const setSearchTerm = vi.fn();
  const clicked = vi.fn()
  const moreClick = vi.fn();
  const clear = false;
  const clearResults = vi.fn();
  const setClear = vi.fn()

render(

<Provider store={store}>
<MemoryRouter>

  <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} clicked={clicked} moreClick={moreClick} clear={clear} clearResults={clearResults} setClear={setClear}/>
</MemoryRouter>
      </Provider>
)
}

  it('should render loading message when loading', async() => {
   
  server.use(http.get('/results', async() => {
    await delay();
    return HttpResponse.json([])
  }))
   
 
  renderEverything()

  expect(screen.getByText(/loading.../i)).toBeInTheDocument()

  })

  it('should render error message if error in fetch', async() => {
    http.get('/results', async() => HttpResponse.error())


      renderEverything()

      await waitForElementToBeRemoved(() => screen.getByText(/loading.../i))

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

//again doesnt seem to work without fake data
    it('should render clear message if clear prop set to true', async() => {

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

      const searchTerm = "example"
  const setSearchTerm = vi.fn();
  const clicked = vi.fn()
  const moreClick = vi.fn();
  const clear = true;
  const clearResults = vi.fn();
  const setClear = vi.fn()

render(

<Provider store={store}>
<MemoryRouter>

  <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} clicked={clicked} moreClick={moreClick} clear={clear} clearResults={clearResults} setClear={setClear}/>
</MemoryRouter>
      </Provider>
)
await waitForElementToBeRemoved(() => screen.getByText(/loading.../i))
screen.debug()

    })
//again cannot figure out how to render the fake data

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


})