import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

export const db = factory({
  searchResults: {
    id: primaryKey(faker.number.int),
    author: faker.person.bio,
    title: faker.animal.dog,
    subreddit: faker.internet.domainWord,
  },
  subreddits: {
    id: primaryKey(faker.number.int),
    author: faker.person.bio,
    title: faker.animal.dog,
    subreddit: faker.animal.dog
  }
})