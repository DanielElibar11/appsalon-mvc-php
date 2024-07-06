document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));const comentariosPorPagina=5;let comentariosMostrados=0,comentariosTotales=[];function iniciarApp(){consultarAPI()}async function consultarAPI(){try{const t="/api/comentario",e=await fetch(t);comentariosTotales=await e.json(),mostrarComentarios()}catch(t){console.log(t)}}function mostrarComentarios(){const t=comentariosTotales.slice(comentariosMostrados,comentariosMostrados+5),e=t.filter(t=>""!==t.comentario.trim());if(e.length>0){if(e.forEach(t=>{const{id:e,nombre:o,comentario:n,respuesta:a,fecha:s}=t,c=document.createElement("P");c.classList.add("nombre-comentario"),c.textContent=o;const r=document.createElement("P");r.classList.add("comentario-comentario"),r.textContent=n;const i=document.createElement("P");i.classList.add("fecha-comentario"),i.textContent=s;const m=document.createElement("P");m.classList.add("respuesta-comentario"),m.textContent=a;const d=document.createElement("DIV");d.classList.add("comentario"),d.dataset.idComentario=e,d.appendChild(c),d.appendChild(r),d.appendChild(i),d.appendChild(m),document.querySelector("#comentarioUs").appendChild(d)}),comentariosMostrados+=t.length,comentariosMostrados<comentariosTotales.length){const t=document.createElement("button");t.textContent="Ver más comentarios",t.classList.add("ver-mas"),t.addEventListener("click",cargarMasComentarios),document.querySelector("#comentarioUs").appendChild(t)}}else alert("El comentario no puede ir vacío.")}function cargarMasComentarios(){document.querySelector(".ver-mas").remove(),mostrarComentarios()}