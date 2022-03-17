const texts = document.querySelector('.texts');
const iduno = document.getElementById("iduno");
const iddos = document.getElementById("iddos");
const idtres = document.getElementById("idtres");
const idcuatro = document.getElementById("idcuatro");
const idcinco = document.getElementById("idcinco");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;


  if(e.results[0].isFinal){
    if (text.includes('Prende uno') || text.includes('prende uno') || text.includes('prende 1')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Listo';
      texts.appendChild(p)
      iduno.style.background = "url(bulb_on.jpg)";
    }
    
    if (text.includes('Apaga uno') || text.includes('apaga uno') || text.includes('prende 1')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Listo';
      texts.appendChild(p)
      iduno.style.background = "url(bulb_off.jpg)";
    }
    p = document.createElement('p');
  }

  //foco dos

  if(e.results[0].isFinal){
    if (text.includes('Prende dos') || text.includes('prende dos') || text.includes('prende 2')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Listo';
      texts.appendChild(p)
      iddos.style.background = "url(bulb_on.jpg)";
    }
    
    if (text.includes('Apaga dos') || text.includes('apaga dos') || text.includes('prende 2')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Listo';
      texts.appendChild(p)
      iddos.style.background = "url(bulb_off.jpg)";
    }
    p = document.createElement('p');
  }

  //foco tres

  if(e.results[0].isFinal){
    if (text.includes('Prende tres') || text.includes('prende tres') || text.includes('prende 3')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Listo';
      texts.appendChild(p)
      idtres.style.background = "url(bulb_on.jpg)";
    }
    
    if (text.includes('Apaga tres') || text.includes('apaga tres') || text.includes('apaga 3')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Listo';
      texts.appendChild(p)
      idtres.style.background = "url(bulb_off.jpg)";
    }
    p = document.createElement('p');
  }

  //foco cuatro
  if(e.results[0].isFinal){
    if (text.includes('Prende cuatro') || text.includes('prende cuatro') || text.includes('prende 4')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Listo';
      texts.appendChild(p)
      idcuatro.style.background = "url(bulb_on.jpg)";
    }
    
    if (text.includes('Apaga cuatro') || text.includes('apaga cuatro') || text.includes('apaga 4')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Listo';
      texts.appendChild(p)
      idcuatro.style.background = "url(bulb_off.jpg)";
    }
    p = document.createElement('p');
  }

  //foco cinco

  if(e.results[0].isFinal){
    if (text.includes('Prende cinco') || text.includes('prende cinco') || text.includes('prende 5')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Listo';
      texts.appendChild(p)
      idcinco.style.background = "url(bulb_on.jpg)";
    }
    
    if (text.includes('Apaga cinco') || text.includes('apaga cinco') || text.includes('apaga 5')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Listo';
      texts.appendChild(p)
      idcinco.style.background = "url(bulb_off.jpg)";
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();