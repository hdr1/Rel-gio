window.onload = function () {
        setInterval(createClock, 10);

        function createClock() {

            // DEFINE O CANVAS E O CONTEXTO
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');

            let date = new Date;
            let angle;
            let secHandLength = 200;



            // limpa tudo no canvas e re-desenha novos elementos a cada segundo
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            outerArc();
            innerArc();
	    //arc3d();
            centerPoint();
	    drawAmPm();
            hMark();
            sMark();

            updateSeconds();
            updateMinutes();
            updateHours();

            function outerArc() {

                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, secHandLength + 14, 0, Math.PI * 2);
                ctx.strokeStyle = 'black';
                ctx.stroke();
            }
            function innerArc() {

                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, secHandLength + 7, 0, Math.PI * 2);
                ctx.strokeStyle = 'black';
                ctx.stroke();
            }
            function centerPoint() {

                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, 4, 0, Math.PI * 2);
                ctx.lineWidth = 2;

                ctx.strokeStyle = 'black';
                ctx.stroke();
            }

            function hMark() {

                for (let i = 0; i < 12; i++) {
                    angle = i * (Math.PI * 2) / 12; // define o angulo para posicionar a marca
                    ctx.lineWidth = 4;            // define a largura da marca
                    ctx.beginPath();

                    let x1 = (canvas.width / 2) + Math.cos(angle) * (secHandLength);
                    let y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
                    let x2 = (canvas.width / 2) + Math.cos(angle) * (secHandLength - (secHandLength / 7));
                    let y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 7));
		    ctx.lineCap = "square";	
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);

                    ctx.strokeStyle = 'blue';
                    ctx.stroke();
                }
            }

            function sMark() {

                for (let i = 0; i < 60; i++) {
                    angle = i * (Math.PI * 2) / 60;

                    if(i == 0  || i == 5  || i == 10 || i == 15 || i == 20 ||               //Nao desenha em cima das marcas das horas
                       i == 25 || i == 30 || i == 35 || i == 40 || i == 45 ||
                       i == 50 || i == 55 ) continue;

                          ctx.lineWidth = 1;
                          ctx.beginPath();

                          let x1 = (canvas.width / 2)  + Math.cos(angle) * (secHandLength);
                          let y1 = (canvas.height / 2) + Math.sin(angle) * (secHandLength);
                          let x2 = (canvas.width / 2)  + Math.cos(angle) * (secHandLength - (secHandLength / 30));
                          let y2 = (canvas.height / 2) + Math.sin(angle) * (secHandLength - (secHandLength / 30));
			  lineCap = "round";
                          ctx.moveTo(x1, y1);
                          ctx.lineTo(x2, y2);

                          ctx.strokeStyle = 'gray';
                          ctx.stroke();

                }
            }

            function updateSeconds() {

                angle = -1*Math.PI/2;
                
                ctx.lineWidth = 1;              // Largura do ponteiro dos segundos.

                ctx.beginPath();
		ctx.lineCap = "round";
                // Começa no centro do relógio
                ctx.moveTo(canvas.width / 2, canvas.height / 2);

                // Desenha o ponteiro dos segundos
                ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.05),
                    canvas.height / 2 + Math.sin(angle) * secHandLength / 1.05);

                // Desenha a cauda do ponteiro dos segundos
                ctx.moveTo(canvas.width / 2, canvas.height / 2);

                // Desenha o ponteiro
                ctx.lineTo((canvas.width / 2 - Math.cos(angle) * 20),
                    canvas.height / 2 - Math.sin(angle) * 20);

                ctx.strokeStyle = 'red';        // Define a cor do ponteiro.
                ctx.stroke();
            }


            function updateMinutes() {

                angle = -11*Math.PI/6;
                ctx.lineWidth = 2;
		ctx.lineCap = "round";
                ctx.beginPath();
                ctx.moveTo(canvas.width / 2, canvas.height / 2);

                ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.20),
                            canvas.height / 2 + Math.sin(angle) * secHandLength / 1.20);

                ctx.strokeStyle = 'black';
                ctx.stroke();
            }

            function updateHours() {

                angle = -11*Math.PI/4
                ctx.lineWidth = 4;

                ctx.beginPath();
		ctx.lineCap = "round";
                ctx.moveTo(canvas.width / 2, canvas.height / 2);

                ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.8),
                    canvas.height / 2 + Math.sin(angle) * secHandLength / 1.8);

                ctx.strokeStyle = 'green';
                ctx.stroke();
            }

	    function drawAmPm() {

			 var dt = new Date();
			 ctx.font="25px Verdana";
		         var ampm = "AM";
		         var hrs = dt.getHours();
		         ctx.strokeStyle="#000";
		         
			 //Draw AM/PM indicator
		         if (hrs>=12) ampm = "PM";
		         ctx.lineWidth=1;
		         ctx.strokeRect((canvas.width/2)+80, (canvas.height/2)-20,44,27);
		         ctx.fillText(ampm,(canvas.width/2)+84, (canvas.height/2)+2,90);		         
		         ctx.lineWidth=6;
		         ctx.save();
	     }

                function arc3d(){

                        //Define gradientes para um efeito 3d 
                        //ctx.clearRect(0,0,canvas.width,canvas.height);

                         var grad1=ctx.createLinearGradient(0,0,canvas.width, canvas.height);
                         grad1.addColorStop(0,"#D83040");
                         grad1.addColorStop(1,"#801020");
                         var grad2=ctx.createLinearGradient(0,0,canvas.width, canvas.height);
                         grad2.addColorStop(0,"#801020");
                         grad2.addColorStop(1,"#D83040");
                         ctx.font="Bold 20px Arial";
                         ctx.textBaseline="middle";
                         ctx.textAlign="center";
                         ctx.lineWidth=1;
                         ctx.save();

                         //Outer bezel
                         ctx.strokeStyle=grad1;
                         ctx.lineWidth=10;
                         ctx.beginPath();
                         ctx.arc(canvas.width / 2, canvas.height / 2, secHandLength + 14, 0, Math.PI * 2);
                         ctx.shadowOffsetX=4;
                         ctx.shadowOffsetY=4;
                         ctx.shadowColor="rgba(0,0,0,0.6)";
                         ctx.shadowBlur=6;
                         ctx.stroke();

                         //Inner bezel
                         ctx.restore();
                         ctx.strokeStyle=grad2;
                         ctx.lineWidth=10;
                         ctx.beginPath();
                         ctx.arc(canvas.width / 2, canvas.height / 2, secHandLength + 7, 0, Math.PI * 2);
                         ctx.stroke();
                         ctx.strokeStyle="#222";
                         ctx.save();
                         ctx.translate(canvas.width / 2, canvas.height / 2);
                }



        }
    }
