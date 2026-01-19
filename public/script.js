const imagens = {
  "Attack on Titan": "/images/Aot.png",
  "Code Geass": "/images/cg.jpg",
  "Demon Slayer": "/images/ds.jpg",
  "Frieren Beyond Journeys End": "/images/fri.jpg",
  "No Game No Life": "/images/ngnl.jpg",
  "One Piece": "/images/op.jpg",
  "Fairy Tail": "/images/ft.png",
  "Kuroko no Basket": "/images/knb.jpg",
  "Lovely Complex": "/images/LC.png",
  "Your Name": "/images/yn.jpg"
};


async function buscar() {
  const tipo = document.getElementById('tipo').value;
  const valor = document.getElementById('valor').value;
  let url = '';

  if (tipo === 'nome') {
    url = `/animes`;
  } else if (tipo === 'genero') {
    url = `/animes/genero/${valor}`;
  } else if (tipo === 'nota') {
    url = `/animes/nota/${valor}`;
  } else if (tipo === 'ano') {
    url = `/animes`;
  }

  const res = await fetch(url);
  const data = await res.json();

  mostrarResultados(data, tipo, valor);
}

function mostrarResultados(animes, tipo, valor) {
  const div = document.getElementById('resultados');
  const detalhes = document.getElementById('detalhes');

  
  div.innerHTML = '';
  detalhes.innerHTML = '';

  const filtrados = animes.filter(a => {
    if (tipo === 'nome') return a.titulo.toLowerCase().includes(valor.toLowerCase());
    if (tipo === 'ano') return a.ano == valor;
    return true;
  });

  if (filtrados.length === 0) {
    div.innerHTML = '<p>Nenhum anime encontrado.</p>';
    return;
  }

  filtrados.forEach(anime => {
    const item = document.createElement('div');
    item.innerText = anime.titulo;
    item.onclick = () => mostrarDetalhes(anime);
    div.appendChild(item);
  });
}

function mostrarDetalhes(anime) {
  const detalhes = document.getElementById('detalhes');
  const imagem = imagens[anime.titulo] || '';

  detalhes.innerHTML = `
    <div class="card-anime">
      <img src="${imagem}" alt="${anime.titulo}">
      <div class="info">
        <h2>${anime.titulo}</h2>
        <p><b>Genero:</b> ${anime.genero}</p>
        <p><b>Episodios:</b> ${anime.episodios}</p>
        <p><b>Nota:</b> ${anime.nota}</p>
        <p><b>Ano:</b> ${anime.ano}</p>
      </div>
    </div>
  `;
}

// Permitir pesquisar ao pressionar ENTER
document.getElementById('valor').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    buscar();
  }
});
