// script.js
document.querySelectorAll('.elemento').forEach(elem => {
    elem.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', elem.id);
    });
  });
  
  const zonaJuego = document.getElementById('zona-juego');
  const zonaBasura = document.getElementById('zona-basura');
  let contador = 0;
  
  zonaJuego.addEventListener('dragover', e => e.preventDefault());
  zonaJuego.addEventListener('drop', e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const original = document.getElementById(id);
    const nuevo = original.cloneNode(true);
  
    nuevo.classList.add('objeto-colocado');
    nuevo.style.left = `${e.offsetX - 30}px`;
    nuevo.style.top = `${e.offsetY - 20}px`;
    nuevo.setAttribute('draggable', true);
    nuevo.id = id + '-clon-' + contador++;
  
    nuevo.addEventListener('dragstart', ev => {
      ev.dataTransfer.setData('text/plain', nuevo.id);
    });
  
    zonaJuego.appendChild(nuevo);
  });
  
  zonaBasura.addEventListener('dragover', e => e.preventDefault());
  zonaBasura.addEventListener('drop', e => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const elem = document.getElementById(id);
    if (elem && elem.classList.contains('objeto-colocado')) {
      elem.remove();
    }
  });
  
  // Evaluación final
  document.getElementById('evaluar-btn').addEventListener('click', () => {
    let buenos = 0;
    let malos = 0;
    document.querySelectorAll('.objeto-colocado').forEach(elem => {
      const tipo = elem.getAttribute('data-tipo');
      if (tipo === 'bueno') buenos++;
      else if (tipo === 'malo') malos++;
    });
  
    let resultado = '';
    if (buenos > malos) {
      resultado = `🌿 Tu infraestructura es mayormente ecológica. ¡Buen trabajo!`;
    } else if (malos > buenos) {
      resultado = `⚠️ Tu diseño tiene un impacto negativo en el medio ambiente.`;
    } else {
      resultado = `⚖️ Tu diseño está equilibrado, pero puedes mejorarlo.`;
    }
  
    document.getElementById('resultado-evaluacion').textContent = resultado;
  });
  