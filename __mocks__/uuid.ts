import { vi } from 'vitest'

// this is how it was done with jest
//
// export const v4 = () => 'generated-id'

vi.mock('uuid', async (importOriginal) => {
  const original : any = await importOriginal()
  return {
    ...original,
    v4: () => 'generated-id',
  }
})
