import axios, { AxiosPromise }  from 'axios';
import yaml from 'js-yaml';

export default async function (url: string, method = 'get'){
  const { data } = await axios({ url, method})
  const test = /---(.*?)---/sg
  const yamlStr = test.exec(data)?.[1]
  const yamlObj = yaml.load(yamlStr)
  yamlObj.path = url

  return yamlObj
}
