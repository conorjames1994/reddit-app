import '@testing-library/jest-dom/vitest'
import { server } from './mocks/server';
import { afterAll, beforeAll } from 'vitest';
import { fetch } from 'cross-fetch';

global.fetch = fetch;

beforeAll(() => server.listen());

afterAll(() => server.resetHandlers())
afterAll(() => server.close())
