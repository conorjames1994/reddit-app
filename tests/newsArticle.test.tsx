import { render, screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import { NewsArticle } from '../src/components/newsArticle'
import React from 'react'
import { BrowserRouter, createMemoryRouter, MemoryRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../src/app/store'
import { DisplaySearchResults } from '../src/components/displaySearchResults'
import userEvent from '@testing-library/user-event'
import App from '../src/App'

describe('NewsArticle', () => {
  const renderEverything = () => {

    render(
      <Provider store={store}>
 <MemoryRouter>
        <NewsArticle />
      </MemoryRouter>
      </Provider>
     
      
    )
  }
  it('should render headers', async() => {
    renderEverything()

    const title = screen.getByRole("heading", {name: /home feed/i})
    const link1 = screen.getByText(/subreddit list/i)
    const link2 = screen.getByText(/search reddit/i)
    const homepage = screen.getByTestId('homepage');
   

    expect(title).toBeInTheDocument()
    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()
    expect(homepage).toBeInTheDocument()
    
  })
  it('should navigate to appropriate domains when 2 links clicked', () => {
    
    
    
    
    render(<NewsArticle />, {
      wrapper: ({children}) => (
        <Provider store={store}>
       <MemoryRouter initialEntries={["/"]}>
          {children}
        </MemoryRouter>

        </Provider>
        
      )
    
    })

    expect(screen.getByRole('heading', {name: /home feed/i})).toBeInTheDocument()

   


  })

  it('should navigate to appropriate domains when subreddit link clicked', async() => {
    
    render(
      <Provider store={store}>
        <App />  
      </Provider>
  
  )
    
    expect(screen.getByRole('heading', {name: /home feed/i})).toBeInTheDocument()
    const user = userEvent.setup();
    await user.click(screen.getByText(/subreddit list/i))

   expect(screen.getByRole('heading', {name: /subreddits/i})).toBeInTheDocument()


  })

  it('should navigate to appropriate domains when search link clicked', async() => {
    
    render(
      <Provider store={store}>
        <App />  
      </Provider>
  
  )
    
    
    const user = userEvent.setup();
    await user.click(screen.getByText(/reddit feed/i))
    expect(screen.getByRole('heading', {name: /home feed/i})).toBeInTheDocument()

    await user.click(screen.getByText(/search reddit/i))

    expect(screen.getByPlaceholderText(/search reddit.../i)).toBeInTheDocument()


    await user.click(screen.getByText(/reddit feed/i))


  })

})