import { it, expect, describe } from 'vitest';
import { db } from './mocks/database';
describe('i', () => {
  it('should', () => {
    expect(1).toBeTruthy()
  })

it('should', async() => {
  const response = await fetch('/results')
  const data = await response.json()
  
})
})