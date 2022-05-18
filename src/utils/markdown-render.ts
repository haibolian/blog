import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang) return hljs.highlightAuto(str).value;
    return '';
  }
})



const render = function (content: string){
  return md.render(content)
}


export default render
