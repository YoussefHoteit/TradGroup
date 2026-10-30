import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2'};
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost'); const name=decodeURIComponent(url.pathname)==='/'?'index.html':decodeURIComponent(url.pathname).slice(1);const file=path.resolve(root,name);if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403).end();return}const data=await fs.readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'}).end(data)}catch{res.writeHead(404).end('Not found')}}).listen(4317,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4317'));
