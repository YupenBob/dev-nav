// ===== Site Data =====
const siteData = [
  { category: 'tool', name: 'CloverTools', url: 'https://tools.xsanye.cn', desc: '在线工具箱聚合平台，提供各类实用工具', icon: 'tools' },
  { category: 'tool', name: '稀土掘金', url: 'https://juejin.cn', desc: '面向全球开发者的技术社区，分享技术文章与优质资源', icon: 'juejin' },
  { category: 'tool', name: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'Mozilla维护的Web技术官方文档，HTML/CSS/JS参考', icon: 'mdn' },
  { category: 'tool', name: 'Can I Use', url: 'https://caniuse.com', desc: '查询浏览器对Web API的兼容性支持情况', icon: 'browser' },
  { category: 'tool', name: 'Stack Overflow', url: 'https://stackoverflow.com', desc: '全球最大的程序员问答社区，解决开发中的疑难杂症', icon: 'stack' },
  { category: 'tool', name: 'GitHub', url: 'https://github.com', desc: '全球最大开源代码托管平台，开发者必备', icon: 'github' },
  { category: 'tool', name: 'CodePen', url: 'https://codepen.io', desc: '在线前端代码编辑与展示平台，支持HTML/CSS/JS', icon: 'codepen' },
  { category: 'tool', name: 'Replit', url: 'https://replit.com', desc: '在线编程IDE，支持50+编程语言的云端开发环境', icon: 'code' },
  { category: 'tool', name: 'JSFiddle', url: 'https://jsfiddle.net', desc: '经典在线JS代码测试工具，支持框架集成', icon: 'code' },
  { category: 'tool', name: 'Glitch', url: 'https://glitch.com', desc: '在线应用开发和托管平台，实时协作编辑', icon: 'glitch' },
  { category: 'oss', name: 'Free Programming Books', url: 'https://github.com/EbookFoundation/free-programming-books', desc: '免费编程书籍汇总，涵盖多语言多领域学习资源', icon: 'book' },
  { category: 'oss', name: 'Awesome Hacking', url: 'https://github.com/Hack-GitHub/Awesome-Hacking', desc: '黑客技术资源合集，安全研究者必备收藏', icon: 'shield' },
  { category: 'oss', name: 'Public APIs', url: 'https://github.com/public-apis/public-apis', desc: '免费公共API集合，收录1400+可用接口', icon: 'api' },
  { category: 'oss', name: 'Build Your Own X', url: 'https://github.com/codecrafters-io/build-your-own-x', desc: '从零构建各类核心技术项目，边做边学', icon: 'build' },
  { category: 'oss', name: 'The Art of Command Line', url: 'https://github.com/jlevy/the-art-of-command-line', desc: '命令行高手修炼指南，系统掌握Shell技巧', icon: 'terminal' },
  { category: 'docs', name: 'React', url: 'https://react.dev', desc: 'Meta推出的声明式UI库，组件化前端开发', icon: 'react' },
  { category: 'docs', name: 'Vue.js', url: 'https://vuejs.org', desc: '渐进式JavaScript框架，易学易用灵活高效', icon: 'vue' },
  { category: 'docs', name: 'TypeScript', url: 'https://www.typescriptlang.org', desc: 'JavaScript超集，提供类型系统和面向对象特性', icon: 'ts' },
  { category: 'docs', name: 'Node.js', url: 'https://nodejs.org', desc: '基于Chrome V8引擎的JavaScript运行时', icon: 'node' },
  { category: 'docs', name: 'Python', url: 'https://docs.python.org', desc: '官方Python文档，涵盖语言参考和标准库', icon: 'python' },
  { category: 'docs', name: 'Go', url: 'https://go.dev', desc: 'Google出品的编译型语言，并发性能优异', icon: 'go' },
  { category: 'docs', name: 'Rust', url: 'https://rust-lang.org', desc: '安全并发系统编程语言，无GC高性能', icon: 'rust' },
  { category: 'docs', name: 'Bun', url: 'https://bun.sh', desc: '全能JavaScript运行时，比Node更快的打包/测试/工具链', icon: 'bun' },
  { category: 'learn', name: 'freeCodeCamp', url: 'https://freecodecamp.org', desc: '免费编程学习平台，从零基础到全栈认证', icon: 'fcc' },
  { category: 'learn', name: 'The Odin Project', url: 'https://theodinproject.com', desc: '免费开源全栈学习路径，Ruby on Rails路线', icon: 'odin' },
  { category: 'learn', name: 'Exercism', url: 'https://exercism.org', desc: '编程练习平台，AI辅助导师提供代码反馈', icon: 'exercise' },
  { category: 'learn', name: 'LeetCode', url: 'https://leetcode.com', desc: '算法刷题平台，面试准备必备', icon: 'leetcode' },
  { category: 'learn', name: 'HackerRank', url: 'https://hackerrank.com', desc: '编程技能评估平台，覆盖多语言多领域', icon: 'hackerrank' },
  { category: 'util', name: 'Cloudflare', url: 'https://cloudflare.com', desc: 'CDN网络加速与安全防护，DDoS防护免费版可用', icon: 'cloud' },
  { category: 'util', name: 'Vercel', url: 'https://vercel.com', desc: '前端部署平台，Next.js官方托管服务', icon: 'vercel' },
  { category: 'util', name: 'Netlify', url: 'https://netlify.com', desc: '静态网站托管与自动化部署平台', icon: 'netlify' },
  { category: 'util', name: 'Railway', url: 'https://railway.app', desc: '现代应用部署平台，支持多种运行时', icon: 'railway' },
  { category: 'util', name: 'ngrok', url: 'https://ngrok.com', desc: '本地服务穿透工具，快速创建公网访问地址', icon: 'link' },
  { category: 'util', name: 'Regex101', url: 'https://regex101.com', desc: '正则表达式在线调试工具，实时匹配预览', icon: 'regex' },
  { category: 'util', name: 'crontab.guru', url: 'https://crontab.guru', desc: 'Cron表达式在线生成器和解释器', icon: 'clock' },
  { category: 'ai', name: 'ChatGPT', url: 'https://chat.openai.com', desc: 'OpenAI大语言模型，代码生成与问题解答', icon: 'chatgpt' },
  { category: 'ai', name: 'Claude', url: 'https://claude.ai', desc: 'Anthropic推出的AI助手，长文本理解能力强', icon: 'claude' },
  { category: 'ai', name: 'Gemini', url: 'https://gemini.google.com', desc: 'Google多模态AI，支持文本图片视频理解', icon: 'gemini' },
  { category: 'ai', name: 'Cursor', url: 'https://cursor.sh', desc: 'AI代码编辑器，基于GPT-4的智能编程助手', icon: 'cursor' },
  { category: 'ai', name: 'Perplexity', url: 'https://perplexity.ai', desc: 'AI搜索引擎，实时网络检索回答问题', icon: 'search' }
];

// ===== Icons =====
const iconMap = {
  tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  api: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',
  build: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  stack: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm-1.197-4.329l-5.248-6.046 1.727-1.234 4.979 6.301 1.542-.021zM2.204 13.338l-1.956.31.559-1.917-1.317-1.252 1.802-.077L2.21 7.631l1.317 1.252 1.803-.076-.558 1.917 1.956.31-1.802 1.302-1.722-1.598z"/></svg>',
  codepen: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 8.182l-.018-.132-.017-.117c0-1.132-.342-2.196-.965-3.018-.617-.82-1.49-1.437-2.478-1.75L12.182 1.5H12l-4.5 7.5-3.5-2-3 1.5 3.5 2.5L2.5 21l4-3 4 3 3.5-6.5L12 18.5l4.5-7.5V8.182zM12 16.182l-2.5-3.5-1.5 3 4 3 4-3-1.5-3L12 16.182z"/></svg>',
  glitch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>',
  browser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  mdn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  juejin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  react: '<svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="1.5"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>',
  vue: '<svg viewBox="0 0 24 24"><rect width="24" height="24" fill="#42b883"/><polygon points="12,2 20,20 4,20" fill="#fff"/></svg>',
  ts: '<svg viewBox="0 0 24 24" fill="none" stroke="#3178c6" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 17V12h4"/><path d="M16 7v6"/></svg>',
  node: '<svg viewBox="0 0 24 24" fill="none" stroke="#339933" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  python: '<svg viewBox="0 0 24 24" fill="#3776AB"><path d="M12 2c-1.7 0-3 .6-3 2v2c0 1.4.6 2 3 2h3v1H9c-1.7 0-3 .6-3 2v2c0 1.4.6 2 3 2h6c1.7 0 3-.6 3-2V8c0-1.4-.6-2-3-2h-3V4h3c1.7 0 3-.6 3-2V0h-6c-1.7 0-3 .6-3 2zm-2 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>',
  go: '<svg viewBox="0 0 24 24" fill="#00ADD8"><path d="M3 11c-.2 0-.2-.1-.1-.2l.3-.3c.1-.1.2-.1.3 0 .1.1.2.2.2.3 0 .2-.1.2-.2.3-.2.1-.3.1-.5-.1zm-.8.9c-.2 0-.4-.1-.5-.2-.1-.2-.1-.3 0-.5.1-.1.2-.1.3 0 .1.1.2.2.2.3 0 .1-.1.2-.1.2m-.3 1c-.2 0-.4-.1-.5-.2-.1-.2-.1-.3 0-.5l.3-.3c.1-.1.2-.1.3 0 .2.1.2.2.2.3 0 .1-.1.2-.1.2.1.2-.1.4-.2.5m-.4 1c-.2 0-.4-.1-.5-.3-.1-.2-.1-.3 0-.5l.2-.2c.1-.1.2-.1.3 0 .1.1.2.2.2.3 0 .1-.1.2-.1.3.1.1-.1.3-.1.4m-.4.9c-.2 0-.4-.1-.5-.3-.1-.2-.1-.3 0-.5l.2-.2c.1-.1.2-.1.3 0 .2.1.2.2.2.3 0 .1-.1.2-.1.2.1.2 0 .4-.1.5m-.3 1c-.2 0-.4-.1-.5-.3-.1-.2-.1-.3 0-.5.1-.1.2-.1.3 0l.2.2c.1.1.1.2.1.3 0 .1 0 .2-.1.3m19.4-3.5h-.3v-.3c0-.4-.3-.7-.7-.7h-1.1v-.6h.4c.1 0 .2-.1.2-.3v-.6c0-.1-.1-.2-.2-.2H17v-.4h1c.2 0 .4-.1.4-.3v-.3c0-.2-.2-.3-.4-.3h-.6v-.4c0-.2-.1-.3-.3-.3h-.5v-.3c0-.1-.1-.2-.2-.2h-2.8c-.1 0-.2.1-.2.2v.3h-.5c-.2 0-.3.1-.3.3v.4h-.6c-.2 0-.4.1-.4.3v.3c0 .2.2.3.4.3h.5v.4h-.5c-.2 0-.3.1-.3.3v.6c0 .1.1.2.2.3h.6v.5h-.3c-.1 0-.2.1-.2.2v2c0 .1.1.2.2.2h.3v.6h-1.2c-.4 0-.7-.3-.7-.7v-.3h-.3c-.2 0-.3.1-.3.3v3c0 .2.1.3.3.3h.3v.4c0 .2.3.3.6.3h.3c.2 0 .3-.1.3-.3v-.4h.8v.4c0 .2.1.3.3.3h.3c.2 0 .3-.1.3-.3v-.4h.8v.4c0 .2.1.3.3.3h.3c.2 0 .3-.1.3-.3v-.4h.4c.4 0 .7-.3.7-.7v-.8h.3c.2 0 .3-.1.3-.3v-3c0-.2-.1-.3-.3-.3h-.3v-.5h1.1c.4 0 .7.3.7.7v.3h.3c.2 0 .3-.1.3-.3v-.8c0-.2-.1-.3-.3-.3m-3.7 2.5c-.2 0-.3.1-.3.3v.8c0 .2.1.3.3.3h.3c.2 0 .3-.1.3-.3v-.8c0-.2-.1-.3-.3-.3h-.3z"/></svg>',
  rust: '<svg viewBox="0 0 24 24" fill="none" stroke="#DEA584" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>',
  bun: '<svg viewBox="0 0 24 24" fill="#FBF0F9"><path d="M12 2C9.6 2 8 3.6 8 6c0 1.3.5 2.4 1.4 3.3C8.5 10 8 11.1 8 12.4C8 15 9.6 17 12 18c2.4-1 4-3 4-5.6 0-1.3-.5-2.4-1.4-3.1.9-.9 1.4-2 1.4-3.3 0-2.4-1.6-4-4-4zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>',
  fcc: '<svg viewBox="0 0 24 24" fill="#0a0a0a"><path d="M4.5 3h15C20.8 3 22 4.2 22 5.5v13c0 1.3-1.2 2.5-2.5 2.5h-15C2.2 21 1 19.8 1 18.5v-13C1 4.2 2.2 3 4.5 3zm5.5 5.3l6.5 3.2 1.5-3-8-4-7.5 3.7 7.5.1z"/></svg>',
  odin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>',
  exercise: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  leetcode: '<svg viewBox="0 0 24 24" fill="#FFA116"><path d="M4 6h2v12H4zm7 0h2v12h-2zm7 0h2v12h-2z"/></svg>',
  hackerrank: '<svg viewBox="0 0 24 24" fill="#00ea64"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="#F38020" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  vercel: '<svg viewBox="0 0 24 24" fill="#000000"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>',
  netlify: '<svg viewBox="0 0 24 24" fill="#00C7B7"><path d="M16.934 13.538l-4.45-7.645L7.999 24l4.464-8.125 4.47 7.646L23 0l-6.066 13.538z"/></svg>',
  railway: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  regex: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  chatgpt: '<svg viewBox="0 0 24 24" fill="none" stroke="#74aa9c" stroke-width="2"><path d="M12 8V4H8"/><rect x="8" y="8" width="8" height="8" rx="1"/><path d="M12 16v4h4"/><path d="M8 12H4"/><path d="M20 12h-4"/></svg>',
  claude: '<svg viewBox="0 0 24 24" fill="none" stroke="#CC785C" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>',
  gemini: '<svg viewBox="0 0 24 24" fill="none" stroke="#E8F8FF" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
  cursor: '<svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2"><path d="M4 4l7.07 17 2.51-7.39L21 11.07z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>'
};

// ===== State =====
let currentCategory = 'all';
let searchQuery = '';

// ===== DOM =====
const contentGrid = document.getElementById('contentGrid');
const searchInput = document.getElementById('searchInput');
const tabs = document.querySelectorAll('.tab');

// ===== Category Names =====
const CATEGORY_NAMES = {
  tool: '工具站',
  oss: '开源项目',
  docs: '开发文档',
  learn: '学习平台',
  util: '实用工具',
  ai: 'AI工具'
};

// ===== Render =====
function render() {
  let filtered = siteData;
  if (currentCategory !== 'all') {
    filtered = filtered.filter(s => s.category === currentCategory);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(s =>
      s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)
    );
  }
  if (filtered.length === 0) {
    contentGrid.innerHTML = '<div class="no-results"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>没有找到匹配的结果</p></div>';
    return;
  }
  const groupMap = {};
  filtered.forEach(s => { if (!groupMap[s.category]) groupMap[s.category] = []; groupMap[s.category].push(s); });
  const catOrder = ['tool','oss','docs','learn','util','ai'];
  let html = '';
  catOrder.forEach(cat => {
    const items = groupMap[cat];
    if (!items || !items.length) return;
    html += '<h2 class="section-title">' + CATEGORY_NAMES[cat] + '<span class="count">' + items.length + '</span></h2>';
    html += '<div class="grid">';
    items.forEach(s => {
      const icon = iconMap[s.icon] || iconMap.code;
      html += '<a class="card" href="' + s.url + '" target="_blank" rel="noopener">' +
        '<div class="card-icon">' + icon + '</div>' +
        '<div class="card-info">' +
        '<div class="card-name">' + s.name + '</div>' +
        '<div class="card-desc">' + s.desc + '</div>' +
        '<div class="card-url">' + new URL(s.url).hostname + '</div>' +
        '</div></a>';
    });
    html += '</div>';
  });
  contentGrid.innerHTML = html;
}

// ===== Events =====
searchInput.addEventListener('input', e => { searchQuery = e.target.value; render(); });
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentCategory = tab.dataset.category;
    render();
  });
});

// ===== Init =====
render();
