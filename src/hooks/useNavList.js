import axios from 'axios';
import { reactive } from 'vue';
import yaml from 'js-yaml';

const navList = reactive({})

function getNotesModules(){
  return import.meta.glob('/public/notes/**/*.md');
}

export default function useNavList(cate){
  let modules
  if(cate == 'notes') {
    modules = getNotesModules()
  }

  if(navList[cate]) return navList[cate]

  navList[cate] = []
  Object.entries(modules).forEach(async ([key, value]) => {
    const { data } = await axios({
      url: key,
      method: 'get'
    })
    const { name, file } = parseData(key, data)
    const index = navList[cate].findIndex(item => item.dirName == name)
    if(index > -1) {
      navList[cate][index].files.push(file)
    }else{
      navList[cate].push({
        dirName: name,
        files: [file]
      })
    }
    debugger
    // const dir = key.replace('/public/notes/', '')
  })
  return navList[cate]
}

function parseData(key, data){
  const name = key.replace('/public/notes/', '').split('/')[0];
  const test = /---(.*?)---/sg
  const e = test.exec(data)[1]
  return {
    name,
    file: yaml.load(e)
  }
}