import { expect, describe, it, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useAuthStore } from './auth'

describe('useAuthStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should have an empty token', () => {
    const store = useAuthStore()
    expect(store.token).toBe(null)
  })
  it('should login', async () => {
    const store = useAuthStore()
    await store.login('octavioasapchi@gmail.com', 'laraasapchi')
    expect(store.token).not.toBe(null)
  })
  it('should register', async () => {
    const store = useAuthStore()
    await store.register('test@test.com', 'testpassword')
  })
})
