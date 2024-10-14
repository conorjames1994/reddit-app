import { findByRole, render, screen } from '@testing-library/react'
import { DisplaySearchResults } from '../src/components/displaySearchResults'
import { it, expect, describe } from 'vitest'
import React from 'react'
import { MemoryRouter, RouterProvider, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../src/app/store'
import userEvent from '@testing-library/user-event'


describe('DisplaySearchresults', () => {
  it('should render header with links', () => {


    render(
      <Provider store={store}>
<MemoryRouter>

   <DisplaySearchResults />
</MemoryRouter>
      </Provider>

   )

    const button = screen.getByRole("button", {name: /search/i})
    const button2 = screen.getByRole("button", {name: /clear results/i})
    const link1 = screen.getByRole('link', {name: /subreddit list/i})
    const link2 = screen.getByRole('link', {name: /reddit feed/i})
    const textBox = screen.getByPlaceholderText(/search reddit.../i)
    
    
    
    
    expect(button).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()
    expect(textBox).toBeInTheDocument()

  })

  it('should render the input text in the searchbox', async() => {
    render(
      <Provider store={store}>
<MemoryRouter>

   <DisplaySearchResults />
</MemoryRouter>
      </Provider>

   )

   const textBox = screen.getByPlaceholderText(/search reddit.../i)
   const button = screen.getByRole("button", {name: /search/i})

   const user = userEvent.setup();
   const text = "text";
  
   await user.type(textBox, text);
 
   expect(textBox).toHaveValue(text)




  })
})