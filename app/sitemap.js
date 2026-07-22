import { getAllArticles } from '@/lib/articles';
export default function sitemap(){
 const base='https://sainababaei.com';
 const staticRoutes=['','/thinking','/join','/member'].map((route)=>({url:`${base}${route}`,lastModified:new Date()}));
 const articles=getAllArticles().map((article)=>({url:`${base}/thinking/${article.slug}`,lastModified:new Date(article.updated||article.date)}));
 return [...staticRoutes,...articles];
}
