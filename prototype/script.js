document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.mobile-toggle');
  const links=document.querySelector('.nav-links');
  if(toggle&&links){toggle.addEventListener('click',()=>{
    const open=links.style.display==='flex';
    links.style.display=open?'none':'flex';
    if(!open){Object.assign(links.style,{position:'absolute',top:'64px',left:'14px',right:'14px',background:'#fff',padding:'18px',border:'1px solid #dbe3ef',borderRadius:'14px',flexDirection:'column',alignItems:'flex-start',boxShadow:'0 15px 40px rgba(0,0,0,.1)'})}
  })}

  const svg=document.querySelector('.graph');
  if(svg){
    const nodes=[
      {x:50,y:48,r:7,label:'Researcher',c:'#7da8ff'},
      {x:24,y:30,r:5,label:'University',c:'#17bebb'},
      {x:77,y:28,r:5,label:'Company',c:'#ff927b'},
      {x:21,y:70,r:4,label:'Publication',c:'#b9d2ff'},
      {x:79,y:71,r:4,label:'Director',c:'#ffd27a'},
      {x:48,y:14,r:4,label:'Co-author',c:'#b7e5d9'},
      {x:53,y:84,r:4,label:'Entity',c:'#d7c4ff'},
      {x:92,y:52,r:3.5,label:'Sanction list',c:'#ffb9b3'}
    ];
    const edges=[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[2,7],[1,5],[3,6],[4,7]];
    svg.innerHTML=`<g opacity=".5">${edges.map(([a,b])=>`<line x1="${nodes[a].x}%" y1="${nodes[a].y}%" x2="${nodes[b].x}%" y2="${nodes[b].y}%" stroke="#80a7e8" stroke-width="1.2"/>`).join('')}</g>${nodes.map((n,i)=>`<g class="n${i}"><circle cx="${n.x}%" cy="${n.y}%" r="${n.r}" fill="${n.c}"/><circle cx="${n.x}%" cy="${n.y}%" r="${n.r+6}" fill="none" stroke="${n.c}" stroke-opacity=".16"/><text x="${n.x}%" y="${n.y+6}%" fill="#d7e5fa" font-size="3.1" text-anchor="middle">${n.label}</text></g>`).join('')}`;
  }
})
