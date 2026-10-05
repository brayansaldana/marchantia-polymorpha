const talo = [
  ['A', 'Cara ventral del talo', 'assets/images/A.jpg',
   'La superficie ventral presenta rizoides lisos y tuberculados, además de escamas ventrales. Los rizoides permiten el anclaje al sustrato y participan en el transporte de agua; estudios recientes muestran además que pueden absorber fosfato y contribuir a su distribución dentro del talo.'],

  ['B', 'Cara dorsal del talo', 'assets/images/B.jpg',
   'La superficie dorsal presenta un patrón de cámaras aeríferas comunicadas con el exterior mediante poros. En el interior de las cámaras se encuentran filamentos ricos en cloroplastos que contribuyen a la asimilación fotosintética y al intercambio gaseoso.'],

  ['D', 'Cestas y propágulos', 'assets/images/D.jpg',
   'Las cestas de propágulos o conceptáculos gemíferos son estructuras de reproducción asexual. En su interior se forman gemas multicelulares que, al dispersarse, pueden originar nuevos talos genéticamente clonales.'],

  ['G', 'Corte transversal del talo', 'assets/images/G.jpg',
   'El talo presenta una organización dorsiventral, con una región dorsal fotosintética, una zona interna de almacenamiento y una superficie ventral asociada con escamas y rizoides. Esta organización permite separar espacialmente las funciones de captura de luz, intercambio gaseoso, almacenamiento y adhesión al sustrato.'],

  ['H', 'Cámara aerífera', 'assets/images/H.jpg',
   'Las cámaras aeríferas son espacios intercelulares amplios conectados con la atmósfera mediante un poro. Contienen filamentos fotosintéticos y favorecen la difusión de CO₂ y O₂ hacia los tejidos fotosintéticos.']
];

const sexual = [
  ['E', 'Corte transversal de anteridióforo', 'assets/images/E.jpg', 'Cámara anteridial y organización interna.'],
  ['F', 'Anteridio', 'assets/images/F.jpg', 'Pie, pared estéril y tejido fértil.'],
  ['C', 'Arquegonióforo', 'assets/images/C.jpg', 'Estructura reproductiva femenina.'],
  ['I', 'Corte transversal de arquegonióforo', 'assets/images/I.jpg', 'Detalle histológico del órgano femenino.'],
  ['J', 'Arquegonio', 'assets/images/J.jpg', 'Detalle microscópico del arquegonio.']
];

const sporophyte = [
  ['01', 'Cápsulas abiertas y cerradas ', 'assets/images/S1.jpeg', 'Esporófitos en estado temprano; algunas cápsulas ya abiertas mientras otras continúan cerradas.'],
  ['02', 'Cápsula cerrada', 'assets/images/S2.jpeg', 'Estado previo a la apertura y liberación de las esporas.'],
  ['03', 'Cápsula abierta', 'assets/images/S3.jpeg', 'Estado maduro con apertura de la cápsula y liberación de esporas.']
];

const models = [
  ['Talo', 'assets/models/talo.glb', 'Modelo interactivo del talo.'],
  ['Anteridióforo', 'assets/models/anteridióforo.glb', 'Modelo interactivo de la estructura masculina.'],
  ['Arquegonióforo', 'assets/models/arquegonióforo.glb', 'Modelo interactivo de la estructura femenina.'],
  ['Cápsula / esporófito', 'assets/models/esporofito.glb', 'Modelo del estado reproductivo.']
];

const gallery = [
  ['A', 'assets/images/A.jpg', 'Vista ventral del talo'],
  ['B', 'assets/images/B.jpg', 'Vista dorsal del talo'],
  ['C', 'assets/images/C.jpg', 'Arquegonióforo'],
  ['D', 'assets/images/D.jpg', 'Cestas y propágulos'],
  ['E', 'assets/images/E.jpg', 'Corte transversal de anteridióforo'],
  ['F', 'assets/images/F.jpg', 'Anteridio'],
  ['G', 'assets/images/G.jpg', 'Corte transversal de talo'],
  ['H', 'assets/images/H.jpg', 'Cámara aerífera'],
  ['I', 'assets/images/I.jpg', 'Corte transversal de arquegonióforo'],
  ['J', 'assets/images/J.jpg', 'Arquegonio'],
  ['S1', 'assets/images/S1.jpeg', 'Esporófito inmaduro'],
  ['S2', 'assets/images/S2.jpeg', 'Esporófito maduro / cápsula abierta'],
  ['S3', 'assets/images/S3.jpeg', 'Esporas']
];

function imageCard(item) {
  const [label, title, src, meta] = item;
  return `
    <article class="card">
      <img class="media" src="${src}" alt="${title}" loading="lazy" onerror="this.src='assets/images/placeholder.svg'" />
      <div class="card-body">
        <div class="card-title"><span style="color:var(--green-700)">${label}.</span> ${title}</div>
        <div class="card-meta">${meta}</div>
      </div>
    </article>`;
}

document.getElementById('talo-cards').innerHTML = talo.map(imageCard).join('');
document.getElementById('sexual-cards').innerHTML = sexual.map(imageCard).join('');
document.getElementById('timeline').innerHTML = sporophyte.map(([n,t,src,txt]) => `
  <article class="timeline-item">
    <img class="timeline-image" src="${src}" alt="${t}" loading="lazy"
         onerror="this.src='assets/images/placeholder.svg'" />
    <div class="timeline-content">
      <div class="timeline-num">${n}</div>
      <div class="timeline-title">${t}</div>
      <div class="timeline-text">${txt}</div>
    </div>
  </article>
`).join('');
document.getElementById('model-grid').innerHTML = models.map(([title,src,note]) => `
  <article class="model-card">
    <model-viewer src="${src}" alt="Modelo 3D de ${title}" camera-controls auto-rotate shadow-intensity="1" exposure="1" touch-action="pan-y" ar></model-viewer>
    <div class="model-caption">${title}</div>
    <div class="model-note">${note}</div>
  </article>
`).join('');
document.getElementById('gallery-grid').innerHTML = gallery.map(([label,src,alt]) => `
  <div class="gallery-item" data-src="${src}" data-alt="${alt}">
    <img src="${src}" alt="${alt}" loading="lazy" onerror="this.src='assets/images/placeholder.svg'" />
    <div class="gallery-label">${label}</div>
  </div>
`).join('');

const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `<button aria-label="Cerrar">×</button><img src="" alt="" />`;
document.body.appendChild(lightbox);

const lbImg = lightbox.querySelector('img');
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target.tagName === 'BUTTON') lightbox.classList.remove('open');
});
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    lbImg.src = item.dataset.src;
    lbImg.alt = item.dataset.alt;
    lightbox.classList.add('open');
  });
});
