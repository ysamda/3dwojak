const canvas   = document.getElementById('memeCanvas');
const ctx      = canvas.getcontext('2d');
const charSel  = document.getElementById('characterSelect');
const topIn    = document.getElementById('topText');
const botIn    = document.getElementById('bottomText');
const genBtn   = document.getElementById('generateBtn');
const dlBtn    = document.getElementById('downloadBtn');

function drawMeme() {
    const img  = new Image();
    img.src = 'imgages/${charSel.value}';
    img.onload = () => {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        ctx.fillstyle = 'white';
        ctx.stroketype = 'black';
        ctx.linewidth = 4;
        ctx.textAlign = 'center';
        ctx.front    = 'bold 30px sans-serif';

        ctx.filltext(topIn.value, canvas.width/2,40);
        ctx.stroketext(topIn.value, canvas.width/2, 40);


        ctx.filltext(botIn.value, canvas.width/2, canvas.height -20);
        ctx.stroketext(botIn.value, canvas.width/2, canvas.height - 20);

        dlBtn.style.display  = 'inline-block';

    };

    getBtn.adEventListener('click',drawMeme);

    dlBtn.addEventListener('click',()=>{
        link.download ="3dwojak-meme.png";
        link.href     = canvas.toDataURL('image/png');
        link.click();

    });
    
}