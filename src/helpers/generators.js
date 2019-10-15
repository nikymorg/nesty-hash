import randomize from './randomizers'

// TODO: find a better way to set this
let words

const array = (depth, dataTypes) => {
  const length = randomize.number(4) + 1
  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push(DataGenerator(depth - 1, dataTypes))
  }
  return arr
}

const hash = (depth, dataTypes) => {
  const length = randomize.number(4) + 1
  let obj = {}
  for (let i = 0; i < length; i++) {
    const key = generate.hashKey(dataTypes)
    const value = DataGenerator(depth - 1, dataTypes)
    obj[key] = value
  }
  return obj
}

const generate = {
  wordList:
    fetch('/words.txt')
      .then(response => response.text())
      .then(text => {
        words = text.split('\n')
      }),
  array,
  collection: array,
  hash,
  object: hash,
  dictionary: hash,
  hashKey: dataTypes => {
    const dataType = randomize.unnestedType(dataTypes)
    return generate[dataType]()
  },
  string: () => {
    return randomize.arrayEl(words)
  },
  number: () => {
    let num = randomize.number(100000)
    return num
  }
}

const DataGenerator = (depth, dataTypes) => {
  if (depth < 0) {
    return
  } else if (depth === 0) {
    const dataType = randomize.unnestedType(dataTypes)
    return generate[dataType](depth, dataTypes)
  } else {
    const dataType = randomize.nestedType(dataTypes)
    return generate[dataType](depth, dataTypes)
  }
}

export default DataGenerator
