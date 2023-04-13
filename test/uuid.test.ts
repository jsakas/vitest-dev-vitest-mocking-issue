import { v4 } from 'uuid';
import { describe, expect, it, vi } from 'vitest';

vi.mock('uuid');

describe('uuid', () => {
  it('returns generated-id mock', () => {
    expect(v4()).toEqual('generated-id');
  });
});
