import {getFlyingSuperHeroes} from '../super-heroes'

test('returns returns super heros that can fly', () => {
  const flyingHeroes = getFlyingSuperHeroes()
  expect(flyingHeroes).toMatchInlineSnapshot(`
    [
      {
        "name": "Dynaguy",
        "powers": [
          "disintegration ray",
          "fly",
        ],
      },
      {
        "name": "Apogee",
        "powers": [
          "gravity control",
          "fly",
        ],
      },
    ]
  `)
})
