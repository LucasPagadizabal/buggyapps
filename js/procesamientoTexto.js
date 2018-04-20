$('document').ready(function(){
    $('[data-toggle="tooltip"]').tooltip();//cartelito de ayuda

    $(".containerImgArrows").on("click", function() {//ocultar el deslizador de campo de text
        $(this).hide();
    });


    $("#procesarTexto").click(function(){

        if($("#textoSinProcesar").val() != '' && $("#textoSinProcesar").val() != undefined){
            var arrayTexto = PreProcesoTexto($("#textoSinProcesar").val());
            /*
            
            for (var i = 0; i < arrayTexto.length; i++) {

                if (!isNaN(arrayTexto[i]) && (arrayTexto[i]!='')){
                    //ENTRA SI ES UN NUMERO
                    arrayTexto[i] = ''+NumeroALetras(arrayTexto[i],false);
                    console.log(arrayTexto[i]+' num, esta e la pos: '+ i);
                }else if (model[arrayTexto[i]] != undefined){
                    //ENTRA SI ES UNA ABREVIATURA
                    console.log(arrayTexto[i]+' es una abreviatura, esta e la pos: '+ i);
                
                }else if(validarFecha(arrayTexto[i]) != false){
                    //ENTRA SI ES UNA FECHA
                    console.log(arrayTexto[i]+' es una fecha, esta e la pos: '+ i+'\n ');
                    console.log(validarFecha(arrayTexto[i]));
                
                }else if(arrayTexto[i] == '$'){
                    //ENTRA SI ES PLATA
                    var aux = arrayTexto[i+1].replace('.','');
                    aux = aux.replace('.-','');
                    aux = aux.replace(',','');
                    console.log(aux+' es plata' );    
                
                }
            }*/
        }else{
            //MENSAJE DE QUE EL CAMPO ESTA VACIO
        }
        

    });

    function PreProcesoTexto(string) {
        
        if (string != '' || string != undefined){
            var arrayTexto = string.split(/ |\n/);
             
            //esta funcion genera un espacio entre la cadena y la coma
            for (let i = 0; i < arrayTexto.length; i++) {
                
                if(arrayTexto[i].substr(arrayTexto[i].length-1,1) == ','){
                    arrayTexto[i] = arrayTexto[i].substr(0,arrayTexto[i].length-1) + ' ,';
                }
                
            }
    
            var textoPreProcesado = '';
    
            for (let i = 0; i < arrayTexto.length; i++) {
                textoPreProcesado = textoPreProcesado + ' ' + arrayTexto[i];
            }
            
            return textoPreProcesado.split(' '); 
        }  
    }

    var model = {
        'arts.' :   'articulos',
        'art.'  :   'articulo',
        'DNI'   :   'Documento Nacional de Identidad',
        'FS' :  'fojas',
        'fs.' : 'fojas',
        'C/' :  'contra',
        'c/'    : 'contra',
        'S/' :  'sobre',
        's/'    : 'sobre',
        'Expet.' :  'expediente',
        'Nº' :  'número',
        'Sr.' : 'señor',
        'Sra.' :    'señora',
        'hs.'    :   'horas',
        'CPCBs.As.' :   'Codigo Procesal Civil Buenos Aires',
        'CCYC' :    'Codigo Civil y Comercial',
        'Dr.' :  'doctor',
        'Dra.' : 'doctora',
        'conf.' :   'conforme',
        'Cod.'  :   'código',
        'Cód.'  :   'código',
        'Civ.'  :   'civil',
        'Com.'  :   'comercial',
        '1)' : 'UNO)',
        '2)' : 'DOS)',
        '3)' : 'TRES)',
        '4)' : 'CUATRO)',
        '5)' : 'CINCO)',
        '6)' : 'SEIS)',
        '7)' : 'SIETE)',
        '8)' : 'OCHO)',
        '9)' : 'NUEVE)',
        '10)' : 'DIEZ)',
        '11)' : 'ONCE)',
        'I-' : 'UNO-',
        'II-' : 'DOS-',
        'III-' : 'TRES-',
        'IV-' : 'CUATRO-',
        'V-' : 'CINCO-',
        'VI-' : 'SEIS-',
        'VII-' : 'SIETE-',
        'I.-' : 'UNO-',
        'II.-' : 'DOS-',
        'III.-' : 'TRES-',
        'IV.-' : 'CUATRO-',
        'V.-' : 'CINCO-',
        'VI.-' : 'SEIS-',
        'VII.-' : 'SIETE-'
    }

    var h = window.innerHeight;
    $("#comment").css('height',h-250);
    console.log($("#comment").css('height'));
});