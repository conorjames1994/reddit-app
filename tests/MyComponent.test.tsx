import MyComponent from '../src/components/myComponent';
import { render, screen } from '@testing-library/react'
import React from "react";
import { it, expect, describe } from 'vitest'

describe('group', () => {
  it('should', () => {
    render(<myComponent />)
  })
})