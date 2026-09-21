import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest { return { name:'Tennis Club Municipal de Goussainville', short_name:'TCMG', description:'Le tennis pour tous depuis 1983.', start_url:'/', display:'standalone', background_color:'#ffffff', theme_color:'#0057B8', icons:[{src:'/tcmg-mark.svg',sizes:'any',type:'image/svg+xml'}] }; }
