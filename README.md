# Vue-Blog

## Description

This project was created for study purposes. It is a blog made with Vue.js, Pinia and tailwindcss.

## Project setup

```sh
yarn || npm install
yarn run dev || npm run dev # Compiles and hot-reloads for development
yarn run build || npm run build # Compiles and minifies for production
yarn run serve || npm run serve # Run production build
yarn run test:unit || npm run test:unit # Run unit tests
```

## Folder Structure

```sh
├── src
│   ├── assets
│   ├── components
│   ├── router
│   ├── store
│   ├── utils # Misc functions, data, etc
│   ├── views
│   ├── App.vue
│   └── main.ts
```

> components tests are in components/**tests** folder

> store tests are inside store/\*.test.ts

## highlights

The main concepts applied here were test driven development of components, where it applied, and store, and the use of pinia to manage the state of the application. Also the use of auth base routing

### Tests

To test pinia stores the basic setup would be:

```ts
import { expect, describe, it, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useStore } from '../store'

describe('the store', () => {
  // create a new pinia instance for each test
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  // each case can be checked using it and expect
  it('should have a default value', () => {
    const store = useStore()
    expect(store.value).toBe('default value')
  })
  it('should fetch data', async () => {
    const store = useStore()
    await store.fetchData()
    expect(store.fetchedData).not.toBe([])
  })
})
```

To test components the basic setup would be:

```ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Component from '../Component.vue'

describe('Component', () => {
  it('should render', () => {
    const wrapper = mount(Component)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
```

### Pinia

To create a basic store with pinia:

```ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useStore = defineStore('store', () => {
  const value = ref('default value')
  const fetchedData = ref([])
  const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    fetchedData.value = await data.json()
  }
  return {
    value,
    fetchData,
    fetchedData
  }
})
```

### Auth base routing

```ts
import { createRouter } from 'vue-router'
const router = createRouter(...)

const protectedRoutes = {
  names: ['dashboard', 'profile']
  routes: [...]
}
/*
* validates if the name of the route is in the
* protectedRoutes.names array and if the token is present
*/
router.beforeEach((to, from, next) => {
  if (protectedRoutes.names.includes((to.name as string) || '') && !localStorage.getItem('token')) {
    next({ name: from.name || 'login' })
    return
  }
  next()
})
```
