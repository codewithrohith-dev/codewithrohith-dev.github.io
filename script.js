// AOS
AOS.init({ once:false });

// Resume modal
const modal = document.getElementById('resumeModal');
const btn = document.getElementById('openResume');
const span = modal.querySelector('.close');
btn.onclick = () => modal.style.display = 'block';
span.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target == modal) modal.style.display = 'none'; };

// Matrix background
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
let w, h, columns, drops;
const initCanvas = () => {
  canvas.width = w = window.innerWidth;
  canvas.height = h = window.innerHeight;
  const fontSize = 16;
  columns = Math.floor(w/fontSize);
  drops = Array(columns).fill(0);
};
initCanvas();
const letters = "アカサタナハ...0123456789ABCDEFG";
const fontSize=16;
ctx.font = fontSize+'px monospace';
function draw(){
  ctx.fillStyle='rgba(0,0,0,0.05)';
  ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#0f0';
  drops.forEach((y,i)=>{
    const text = letters.charAt(Math.floor(Math.random()*letters.length));
    const x = i*fontSize;
    ctx.fillText(text,x,y*fontSize);
    if(y*fontSize>h && Math.random()>0.975) drops[i]=0;
    drops[i]++;
  });
}
setInterval(draw,50);
window.onresize = initCanvas;
