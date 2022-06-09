import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang) return hljs.highlightAuto(str).value;
    return "";
  }

})

md.core.ruler.push('show-line', (state)=> {
  // forEach 遍历 tokens
state.tokens.forEach(token => {
        // token.map 即所在的行数
        if (token.map) {
          // 起始行
            const start  = ["class", "l-md"];
            // 结束行
            // const end  = ["data-line-end", token.map[1].toString()]
            // 初始化属性
            token.attrs = token.attrs || []
            // 添加属性
            token.attrs.push(start)
        }
    })
return true;
});



const render = function (content: string){
  return md.render(content)
}


export default render
