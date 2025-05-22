const datos_display = document.getElementById("txt_cm");

function enviar(comando) {
  referencia.update({ espacio: comando || datos_display.value });
  return comando;
}

let categoria_actual = 0;
const columnas_categorias = {
  1: [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],
  /*2: [4, 5, 6],
  3: [7, 8, 9],*/
};

const indices = { 1: 0, 2: 0, 3: 0 };

[1, 2, 3].forEach((num) => {
  document.getElementById(`Categoria${num}`).addEventListener("click", () => {
    categoria_actual = num;
    indices[categoria_actual] = 0;
    enviar(`composition/columns/${columnas_categorias[num][0]}/connect`);
  });
});

function navegar(direccion) {
  if (!categoria_actual) return;

  let columnas = columnas_categorias[categoria_actual];

  indices[categoria_actual] = (indices[categoria_actual] + direccion + columnas.length) % columnas.length;

  enviar(`composition/columns/${columnas[indices[categoria_actual]]}/connect`);

  console.log("Elemento actual:", columnas[indices[categoria_actual]]);
}


document.getElementById("Adelante").addEventListener("click", () => navegar(1));
document.getElementById("Atras").addEventListener("click", () => navegar(-1));

let bandera = false;
/*document.getElementById("OnOff").addEventListener("click", () => {
  enviar(`composition/columns/${bandera ? 10 : 1}/connect`);
  bandera = !bandera;
});*/
