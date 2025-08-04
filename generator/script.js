const canvas   = document.getElementById('memeCanvas');
const ctx      = canvas.getContext('2d');
const charSel  = document.getElementById('characterSelect');
const topIn    = document.getElementById('topText');
const botIn    = document.getElementById('bottomText');
const genBtn   = document.getElementById('generateBtn');
const dlBtn    = document.getElementById('downloadBtn');

function fitText(text, maxWidth){
    let fontSize = 40;
    ctx.font = `bold ${fontSize}px sans-serif`;
    while (ctx.measureText(text).width > maxWidth && fontSize > 10 ){
        fontSize -=2;
        ctx.font = `bold ${fontSize}px sans-serif`;

    }
}

function wrapText(text, x, y, maxWidth, lineHeight){
    const words = text.split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++){
        const testLine = line + words[n] + ' ';
        if (ctx.measureText(testLine).width > maxWidth && n > 0){
            ctx.fillText(line, x, y);
            ctx.strokeText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        }else {
            line = testLine;
        }
        }
        ctx.fillText(line, x, y);
        ctx.strokeText(line, x, y);
    }

function drawMeme() {
    const img  = new Image();
    img.src = `images/${charSel.value}`;
    img.onload = () => {
        // 1) Compute & set canvas size to preserve aspect ratio
        const aspect = img.width / img.height;
        const maxWidth = 500;
        const maxHeight = 500;
        let cw = maxWidth;
        let ch = cw / aspect;
        if (ch > maxHeight) {
            ch = maxHeight;
            cw = ch * aspect;
        }
        
        canvas.width = cw;
        canvas.height = ch;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, 0, 0, cw, ch);

         // 3) Prepare text style (we’ll adjust font-size dynamically)

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.textAlign = 'center';



       


        

        fitText(topIn.value, cw - 20);
        const topFontSize = parseInt(ctx.font.match(/(\d+)px/)[1], 10);
        const topY = 40;

         // Draw semi-opaque background box
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(10, topY -topFontSize, canvas.width - 20,topFontSize + 10);

         // Draw the white text with black stroke
        ctx.fillStyle = 'white';
        ctx.fillText(topIn.value, cw/ 2, topY);
        ctx.strokeText(topIn.value, cw/ 2, topY);




        fitText(botIn.value, cw - 20);
        const botFontSize = parseInt(ctx.font.match(/(\d+)px/)[1], 10);
        const botY        = ch - 20;

         ctx.fillStyle = 'rgba(0,0,0,0.5)';
         ctx.fillRect  (10, botY - botFontSize, cw - 20, botFontSize+10);

        ctx.fillStyle = 'white';
        ctx.fillText(botIn.value, cw / 2, botY);
        ctx.strokeText(botIn.value, cw / 2, botY);

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
    

