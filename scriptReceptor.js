let CambioDeVista = {
    "composition/columns/1/connect": "composition/columns/1/connect",
    "composition/columns/2/connect": "composition/columns/2/connect",
    "composition/columns/3/connect": "composition/columns/3/connect",
    "composition/columns/4/connect": "composition/columns/4/connect",
    "composition/columns/5/connect": "composition/columns/5/connect",
    "composition/columns/6/connect": "composition/columns/6/connect",
    "composition/columns/7/connect": "composition/columns/7/connect",
    "composition/columns/8/connect": "composition/columns/8/connect",
    "composition/columns/9/connect": "composition/columns/9/connect",
    "composition/columns/10/connect": "composition/columns/10/connect",
    "composition/columns/11/connect": "composition/columns/11/connect",
    "composition/columns/12/connect": "composition/columns/12/connect",
    "composition/columns/13/connect": "composition/columns/13/connect",
    "composition/columns/14/connect": "composition/columns/14/connect",
    "composition/columns/15/connect": "composition/columns/15/connect",
    "composition/columns/16/connect": "composition/columns/16/connect",
    "composition/columns/17/connect": "composition/columns/17/connect",
    "composition/columns/18/connect": "composition/columns/18/connect",
    "composition/columns/19/connect": "composition/columns/19/connect",
    "composition/columns/20/connect": "composition/columns/20/connect",
    "composition/columns/21/connect": "composition/columns/21/connect",
    "composition/columns/22/connect": "composition/columns/22/connect",
    "composition/columns/23/connect": "composition/columns/23/connect",
    "composition/columns/24/connect": "composition/columns/24/connect",
    "composition/columns/25/connect": "composition/columns/25/connect",
    "composition/columns/26/connect": "composition/columns/26/connect",
    "composition/columns/27/connect": "composition/columns/27/connect",
    "composition/columns/28/connect": "composition/columns/28/connect",
    "composition/columns/29/connect": "composition/columns/29/connect",
    "composition/columns/30/connect": "composition/columns/30/connect",
    "composition/columns/31/connect": "composition/columns/31/connect",
    "composition/columns/32/connect": "composition/columns/32/connect",
    "composition/columns/33/connect": "composition/columns/33/connect",
    "composition/columns/34/connect": "composition/columns/34/connect",
    "composition/columns/35/connect": "composition/columns/35/connect",
    "composition/columns/36/connect": "composition/columns/36/connect",
    "composition/columns/37/connect": "composition/columns/37/connect",
  };

  
const datos_display = document.getElementById("txt_cm");

firestore
.collection("comandos_receptor")
.doc("comando_captado")
.onSnapshot((doc) => {
  console.log(`Detalles: ${doc.data().espacio}`);
  al_cambiar_el_comando(doc.data().espacio);
});

function al_cambiar_el_comando(el_comando_recibido) {
if (CambioDeVista[el_comando_recibido] != undefined) {
  console.log("El comando es: " + CambioDeVista[el_comando_recibido]);
  datos_display.innerHTML = el_comando_recibido
  sendCommand(el_comando_recibido);
} else {
  alert("Lo que se envio no es un comando reconocido");
}
}
