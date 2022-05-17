import getYamlObj from './getYaml';
import { reactive } from 'vue';

const docs = import.meta.glob('/public/**/*.md')

interface DirsInfo {
  [key: string] : Array<any>
}

const dirs: DirsInfo = reactive({})

Object.entries(docs).forEach(async ([path, getDoc]) => {

  const YamlObj = await getYamlObj(path)
  const { category } = YamlObj 
  if(!dirs.hasOwnProperty(category)) dirs[category] = []
  dirs[category].push(YamlObj)
})

export { dirs as categories }