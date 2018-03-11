import validate from './validators'

const randomize = {
  number: (max) => {
    return Math.floor((Math.random() * max))
  },
  arrayEl: (array) => {
    const idx = randomize.number(array.length)
    return array[idx]
  },
  nestedType: (dataTypes) => {
    const nestedTypes = dataTypes.filter(type => validate.isNested(type))
    return randomize.arrayEl(nestedTypes)
  },
  unnestedType: (dataTypes) => {
    const unnestedTypes = dataTypes.filter(type => !validate.isNested(type))
    return randomize.arrayEl(unnestedTypes)
  }
}

export default randomize
