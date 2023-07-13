# Vue-Blog

## Descripción

Este proyecto fue creado con fines de estudio. Es un blog hecho con Vue.js, Pinia y tailwindcss.

## Configuración del projecto

```sh
yarn || npm install
yarn run dev || npm run dev # Compila y recarga en caliente para desarrollo
yarn run test:unit || npm run test:unit # Run unit tests
```

## Estructura

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

> Los tests de componentes estan en component/**tests**

> Test de los stores store/\*.test.ts

## highlights

Los principales conceptos aplicados aqui fueron el desarrollo guiado por pruebas de componentes, store, y el uso de pinia para gestionar el estado de la aplicación. También el uso de rutas basadas en autenticación

### Tests

Test de pinia base:

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

Test de componente base:

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

Creación de store basico:

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
