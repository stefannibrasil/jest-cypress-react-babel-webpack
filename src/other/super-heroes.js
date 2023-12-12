const superHeroes = [
  { name: 'Elastic Girl', powers: ['physical stretch']},
  { name: 'Violet', powers: ['force fields', 'invisibility'] },
  { name: 'Jack-Jack', powers: ['spaceshifting', 'flying'] },
  { name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
  { name: 'Apogee', powers: ['gravity control', 'fly']}
]

function getFlyingSuperHeroes(){
  return superHeroes.filter(hero => {
    return hero.powers.includes('fly')
  })
}

export {getFlyingSuperHeroes}