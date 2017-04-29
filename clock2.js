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
            centerPoint();
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
                // Começa no centro do relógio.
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
                ctx.beginPath();
                ctx.moveTo(canvas.width / 2, canvas.height / 2);

                ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.18),
                            canvas.height / 2 + Math.sin(angle) * secHandLength / 1.18);

                ctx.strokeStyle = 'black';
                ctx.stroke();
            }

            function updateHours() {

                angle = -11*Math.PI/6
                ctx.lineWidth = 4;

                ctx.beginPath();
                ctx.moveTo(canvas.width / 2, canvas.height / 2);

                ctx.lineTo((canvas.width / 2 + Math.cos(angle) * secHandLength / 1.8),
                    canvas.height / 2 + Math.sin(angle) * secHandLength / 1.8);

                ctx.strokeStyle = 'green';
                ctx.stroke();
            }




        }
    }
