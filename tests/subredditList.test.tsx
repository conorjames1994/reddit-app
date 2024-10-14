import { render, screen } from '@testing-library/react'
import { it, expect, describe, vi } from 'vitest'
import { SubredditList } from '../src/features/subreddit/subredditList'
import React from 'react'
import { store } from '../src/app/store'
import { DisplaySearchResults } from '../src/components/displaySearchResults'
import { MemoryRouter, RouterProvider, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'


describe('SubredditList', () => {
  const functions = {
    reset: vi.fn(),
 
    getMoreHandler:  vi.fn(),
   
   handleBadDogsSub:  vi.fn(),
   handleCatsSub: vi.fn(),
   
   handleDogTrainingSub: vi.fn(),

  }
 
 
  const renderEverything = (functions) => {
   
     render(
       <Provider store={store}>
       <MemoryRouter>
       
          <SubredditList functions={functions}/>
       </MemoryRouter>
             </Provider>
     )
  };

  it('should render everything', () => {
    renderEverything(functions)

    const link1 = screen.getByRole('link', {name: /search reddit/i})
    const link2 = screen.getByRole('link', {name: /reddit feed/i})
    const heading = screen.getByRole('heading', {name: /subreddits/i})
    const buttons = screen.getAllByRole("button");

    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()
    expect(heading).toBeInTheDocument()

    expect(buttons.length).toEqual(4)
  })
// testing functions is silly, should test that the buttons render what theyre asked!

  it('should call appropriate functions when buttons clicked', async() => {
  renderEverything(functions)

    const badDogButton = screen.getByRole('button', {name: /BadDog/i})
    const catButton = screen.getByRole('button', {name: /catswithjobs/i})
    const dogTrainingButton = screen.getByRole('button', {name: /dogtraining/i})
    const exploreButton = screen.getByRole('button', {name: /Explore subreddits/i});


    const spy = vi.spyOn(functions, "handleBadDogsSub")
    const user = userEvent.setup()
    
    await user.click(badDogButton)


  })
})