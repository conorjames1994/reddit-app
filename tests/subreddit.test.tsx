import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { it, expect, describe, vi } from 'vitest'
import { Subreddit } from '../src/features/subreddit/subreddit'
import React from 'react'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../src/app/store';
import { server } from './mocks/server';
import { delay, http, HttpResponse } from 'msw';


describe('Subreddit', () => {
  const renderEverything = () => {
    
    const clicked= vi.fn();
    const setClicked= vi.fn()
    const input= vi.fn()
    const setInput= vi.fn()
    const count= vi.fn()
    const setCount= vi.fn()
    const secondCount= vi.fn()
    const setSecondCount= vi.fn()
    const getMoreHandler= vi.fn()

    render(
      <Provider store={store} >
        <MemoryRouter>
          <Subreddit clicked={clicked} setClicked={setClicked} input={input} setInput={setInput} count={count} setCount={setCount} secondCount={secondCount} setSecondCount={setSecondCount} getMoreHandler={getMoreHandler}/>
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
        expect(screen.getByText(/Only absolute URLs are supported/i)).toBeInTheDocument()
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
})