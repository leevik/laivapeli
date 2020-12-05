var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var soketit = {pelaaja1: {}, pelaaja2:{}}

var pelaajia = 0
var pelaaja1Valmis = false
var pelaaja2Valmis = false

//Soketin yhdistäessä
io.sockets.on('connection', (socket) => {

    //Tarkastetaan pelaajamäärät
    if(pelaajia == 2){
        console.log("liikaa pelaajia")
        socket.disconnect()
    } 
    if (pelaajia == 0){
        soketit.pelaaja1 = socket
        console.log('Pelaaja 1 on yhdistänyt');
        soketit.pelaaja1.emit("viesti", "Olet pelaaja 1")
        soketit.pelaaja1.emit("pelaajaID", 1)
        pelaajia = pelaajia + 1
    }
    else if (pelaajia == 1){
        soketit.pelaaja2 = socket
        console.log('Pelaaja 2 on yhdistänyt');
        soketit.pelaaja2.emit("viesti", "Olet pelaaja 2")
        //socket.emit("viesti", "Pelaajat ovat yhdistäneet, asettakaa laivat ja painakaa aloita peli!")
        soketit.pelaaja2.emit("pelaajaID", 2)
        pelaajia = pelaajia + 1
        if (pelaajia == 2){
            pelaajia = 2
        }
    }

    //Viesti soketille
    socket.on("viesti", data =>{
        console.log(data)
    });

    //Katsotaan mihin kohtaan ammus menee
    socket.on("ammus", data =>{
        if (socket == soketit.pelaaja1){
            soketit.pelaaja2.emit("viesti", "Pelaaja 1 ampui kohtaan: " + data)
            soketit.pelaaja2.emit("mihinAmmuttu", data)

        }
        else if (socket == soketit.pelaaja2){
            soketit.pelaaja1.emit("viesti", "Pelaaja 2 ampui kohtaan: " + data)
            soketit.pelaaja1.emit("mihinAmmuttu", data)
        }
    });

    socket.on('disconnect', () => {
        //ilmoita pelaajan lähteneen: socket[1 tai 2].emit('viesti', "pelaaja X lähti")
        if(socket == soketit.pelaaja1){
            console.log("Pelaaja 1 lähti");
            soketit.pelaaja2.emit("viesti", "Pelaaja 1 lähti")
            pelaaja1Valmis = false
            pelaajia = pelaajia - 1
            if (pelaajia == 0){
                pelaajia = 0
            }
        }
        else if(socket == soketit.pelaaja2){
            console.log("Pelaaja 2 lähti");
            soketit.pelaaja1.emit("viesti", "Pelaaja 2 lähti")
            pelaaja2Valmis = false
            pelaajia = pelaajia - 1
            if (pelaajia == 0){
                pelaajia = 0
            }
        }
    });
    
    socket.on('aloitaPeli', data => {
        //tarkistetaan onko pelaaja laittanut kaikki laivat
        if(data.lentotukialus == true && data.taistelulaiva == true && data.sukellusvene == true && data.silja_line == true && data.Vene == true){
            if(socket == soketit.pelaaja1){
                console.log("Pelaaja 1 on valmis");
                soketit.pelaaja2.emit("viesti", "Pelaaja 1 on valmis")
                pelaaja1Valmis = true
            }
            else if(socket == soketit.pelaaja2){
                console.log("Pelaaja 2 on valmis");
                soketit.pelaaja1.emit("viesti", "Pelaaja 2 on valmis")
                pelaaja2Valmis = true
            }
        }else{
            socket.emit("viesti", "Kaikki laivat eivät ole paikallaan")
        }
        if (pelaaja1Valmis == true && pelaaja2Valmis == true){
            //peli on valmis aloitettavaksi
        }else{
            
        }
        //määritä soketti pelaaja ykköseksi ja anna tieto clientille: socket.emit('pelaajaTieto', data) 

    });

    socket.on('vuoroPelattu', data =>{
        //tarkista kumpi pelaaja: socket1 vai socket2 
        //tarkista ja anna palaute osuiko toisen pelaaja laivaan: socket[1 tai 2].emit('tulos', data)
        //anna myös palaute vastustajalle: socket[1 tai 2].emit('vastustajanAmmus', data)
        
        //tulostarkistus:
            //tarkista onko kaikki vastustajan laivat tuhottu
                //jos kyllä: 
                    //socket[1].emit('viesti', "Voitit pelin")
                    //socket[2].emit('viesti', "Hävisit pelin")
        
        //tarkista tuhostiko koko laivan, jos kyllä:
            //socket[1 tai 2].emit('viesti', "tuhosit laivan X")
    });


  });

  http.listen(8000,() => console.log('Serveri käynnissä'))