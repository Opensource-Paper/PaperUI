const mediaSearchList=document.querySelectorAll("media-search");mediaSearchList.forEach((t=>{const e=document.createElement("input");e.setAttribute("type","search"),e.setAttribute("name","search"),e.setAttribute("placeholder","Search"),e.setAttribute("required","");const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("xmlns","http://www.w3.org/2000/svg"),r.setAttribute("width","24"),r.setAttribute("height","24"),r.setAttribute("viewBox","0 0 24 24"),r.setAttribute("fill","none"),r.setAttribute("stroke","currentColor"),r.setAttribute("stroke-width","2"),r.setAttribute("stroke-linecap","round"),r.setAttribute("stroke-linejoin","round"),r.classList.add("lucide","lucide-search");const s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttribute("cx","11"),s.setAttribute("cy","11"),s.setAttribute("r","8");const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","m21 21-4.3-4.3"),r.appendChild(s),r.appendChild(i),t.appendChild(r),t.appendChild(e)}));