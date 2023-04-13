import { v4 } from 'uuid'
import { describe, expect, it } from 'vitest'

describe('uuid', () => {
  it('returns generated-id mock', () => {
    expect(v4()).toEqual('generated-id')
  })
})
