import { render, screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import { CommentsPage } from '../src/components/commentsPage'
import React from 'react'
import { store } from '../src/app/store'
import { DisplaySearchResults } from '../src/components/displaySearchResults'
import { MemoryRouter, RouterProvider, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

describe('CommentsPage', () => {
  const renderEverything = () => {


    render(
      <Provider store={store}>
<MemoryRouter>

   <CommentsPage/>
</MemoryRouter>
      </Provider>

   )

  }
it('should render all components', () => {
  renderEverything()

  const link1 = screen.getByRole('link', {name: /search page/i})
  const link2 = screen.getByRole('link', {name: /reddit feed/i})
  const heading = screen.getByRole('heading', {name: /comments/i})
  
  expect(link1).toBeInTheDocument()
  expect(link2).toBeInTheDocument()
  expect(heading).toBeInTheDocument()
})

})