const canvas   = document.getElementById('memeCanvas');
const ctx      = canvas.getContext('2d');
const charSel  = document.getElementById('characterSelect');
const topIn    = document.getElementById('topText');
const botIn    = document.getElementById('bottomText');
const genBtn   = document.getElementById('generateBtn');
const dlBtn    = document.getElementById('downloadBtn');

function drawMeme() {
    const img  = new Image();
    img.src = `images/${charSel.value}`;
    img.onload = () => {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.textAlign = 'center';
        ctx.font    = 'bold 30px sans-serif';

        ctx.fillText(topIn.value, canvas.width/2,40);
        ctx.strokeText(topIn.value, canvas.width/2, 40);


        ctx.fillText(botIn.value, canvas.width/2, canvas.height -20);
        ctx.strokeText(botIn.value, canvas.width/2, canvas.height - 20);

        dlBtn.style.display  = 'inline-block';

    };
}
    genBtn.addEventListener('click',drawMeme);

    dlBtn.addEventListener('click',()=>{
        const link = document.createElement('a');
        link.download ='3dwojak-meme.png';
        link.href     = canvas.toDataURL('image/png');
        link.click();

    });
