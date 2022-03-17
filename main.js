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
p.hidden;

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  
  if(e.results[0].isFinal){
    if (text.includes('Prende uno') || text.includes('prende uno') || text.includes('prende 1')) {
      iduno.style.background = "url(bulb_on.jpg)";
    }
    
    if (text.includes('Apaga uno') || text.includes('apaga uno') || text.includes('apaga 1')) {
      iduno.style.background = "url(bulb_off.jpg)";
    }
    
  }

  //foco dos

  if(e.results[0].isFinal){
    if (text.includes('Prende dos') || text.includes('prende dos') || text.includes('prende 2')) {
      iddos.style.background = "url(bulb_on.jpg)";
    }
    
    if (text.includes('Apaga dos') || text.includes('apaga dos') || text.includes('apaga 2')) {
      iddos.style.background = "url(bulb_off.jpg)";
    }
  }

  //foco tres

  if(e.results[0].isFinal){
    if (text.includes('Prende tres') || text.includes('prende tres') || text.includes('prende 3')) {
      idtres.style.background = "url(bulb_on.jpg)";
    }
    
    if (text.includes('Apaga tres') || text.includes('apaga tres') || text.includes('apaga 3')) {
      idtres.style.background = "url(bulb_off.jpg)";
    }
  }

  //foco cuatro
  if(e.results[0].isFinal){
    if (text.includes('Prende cuatro') || text.includes('prende cuatro') || text.includes('prende 4')) {
      idcuatro.style.background = "url(bulb_on.jpg)";
    }
    
    if (text.includes('Apaga cuatro') || text.includes('apaga cuatro') || text.includes('apaga 4')) {
      idcuatro.style.background = "url(bulb_off.jpg)";
    }
  }

  //foco cinco

  if(e.results[0].isFinal){
    if (text.includes('Prende cinco') || text.includes('prende cinco') || text.includes('prende 5')) {
      idcinco.style.background = "url(bulb_on.jpg)";
    }
    
    if (text.includes('Apaga cinco') || text.includes('apaga cinco') || text.includes('apaga 5')) {
      idcinco.style.background = "url(bulb_off.jpg)";
    }
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();
