import knuthMorrisPratt from './knuthMorrisPratt'

describe('knuthMorrisPratt', () => {
  test('pattern exists', () => {
    const text = Math.random().toString(36)
    const word = text.substring(2, Math.random() * text.length)
    const result = knuthMorrisPratt(text, word)

    expect(result).not.toBe(-1)
  })
  test('pattern does not exists', () => {
    const text = 'example'
    const word = 'wyz'
    const result = knuthMorrisPratt(text, word)

    expect(result).toBe(-1)
  })
})
