import axios from 'axios';
import { reactive } from 'vue';
import yaml from 'js-yaml';
import router from '../router/index';

/**
 * todo: 此文件必须在main.js中引用，并且遍历 md 文件的目录制作路由，否则当用户直接输入 md 目录路由时，出现路由不存在的情况。
 */

const ListView = () => import('@/views/ListView.vue');

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
    const index = navList[cate].findIndex(item => item.dirname == name)
    if(index > -1) {
      navList[cate][index].files.push(file)
    }else{
      navList[cate].push({
        dirname: name,
        files: [file]
      })
    }
    pushRouter(name,cate)
    // const dir = key.replace('/public/notes/', '')
  })

  return navList[cate]
}

function pushRouter(name,cate){
  router.addRoute('notes',{
    name: name,
    path: name,
    component: ListView
  })

}

function parseData(key, data){
  const name = key.replace('/public/notes/', '').split('/')[0];
  const test = /---(.*?)---/sg
  const e = test.exec(data)[1]
  const file = yaml.load(e)
  file.path = key
  return {
    name,
    file
  }
}