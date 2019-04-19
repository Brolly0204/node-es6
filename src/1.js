import { readFile } from 'fs'
console.log(readFile)

const fe = async () => {
  const msg = await Promise.resolve('hello Brolly!')
  console.log(msg)
}
fe()
fe()
