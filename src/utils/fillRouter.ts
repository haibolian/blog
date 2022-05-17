import router from '../router';
import getYamlObj from './getYaml';
import { reactive } from 'vue';

const docs = import.meta.glob('/public/**/*.md')

// const getContents = (path: string) => path.replace('/public/notes/', '').split('/')[0]

const dirs: Object = reactive({})

Object.entries(docs).forEach(async ([path, getDoc]) => {
  // const contents = getContents(path)

  const YamlObj = await getYamlObj(path)
  debugger
  if(!dirs.hasOwnProperty(contents)) dirs[contents] = []
  dirs[contents].push()

  


  
})
