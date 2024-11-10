const guardarComponentesLS = (componentes) => {
    localStorage.setItem("componentes", JSON.stringify(componentes));
}

const getComponentesLS = () => {
    return JSON.parse(localStorage.getItem("componentes")) || []; // Devuelve un Array
}



const guardarPcLS = (pc) => {                                            // agrega pc a la LS
    localStorage.setItem("pc", JSON.stringify(pc));
}

const getPcLS = () => {
    return JSON.parse(localStorage.getItem("pc")) || [];
}


const renderBotonCarrito = () => {
    let contenidoHTML = `<button type="button" class="btn btn-light position-relative">
    <i class="bi bi-cart fs-2"></i>
    <span class="position-absolute top-50 start-150 translate-middle-x translate-middle-y badge rounded-pill bg-warning custom-badge ">U$S  ${totalCarrito()}</span>
    </button>`;
    document.getElementById("botonCarrito").innerHTML = contenidoHTML;
}

 const renderBotonVolver = () => {
    let pc = getPcLS();
    let contenidoHTML = "";
    const divVolver = document.getElementById("divVolver");
    if (pc.length > 0) {
        let evento = "despopar()";
        contenidoHTML = ` <a href="#" class="volver" onclick="${evento}"><i class="bi bi-caret-left-fill"></i> Volver</a> `;
    }
    divVolver.innerHTML = contenidoHTML;
} 






const despopar = () => {
    let pc = getPcLS();
    pc.pop();
    guardarPcLS(pc);
    let len = pc.length;
    switch (len) {
        case 0:
            renderMenuInicial();
            break;
        case 1:
            renderProcesadores();
            break;
        case 2:
            renderPlacas();
            break;
        case 3:
            renderRams();
            break;
        case 4:
            renderDiscos();
            break;
        case 5:
            renderGabinetes();
            break;
        case 6:
            renderFuentes();
            break;

        default:
            break;
    }
}

const totalCarrito = () => {
    const carrito = getPcLS();
    let suma = 0;
    for (let i = 1; i < carrito.length; i++) {
        suma += carrito[i].precio;
    }
    return suma;
}

const menuInicial = () => {
    let pc = getPcLS();
    let len = pc.length;

    switch (len) {
        case 0:
            renderMenuInicial();
            break;
        case 1:
            renderProcesadores();
            break;
        case 2:
            renderPlacas();
            break;
        case 3:
            renderRams();
            break;
        case 4:
            renderDiscos();
            break;
        case 5:
            renderGabinetes();
            break;
        case 6:
            renderFuentes();
            break;
        default:
            break;
    }
}




const renderMenuInicial = () => {
    renderBotonVolver();
    let contenidoHTML = ` 
        <h3>Procesador</h3>
        <h4 class="mb-4">Selecciona marca del procesador:</h4>`
    let marcasProc = getComponentesLS().marcasProcesador             // guardo en la variable local marcasProc las marcas de procesador
    for (const p of marcasProc) {
        contenidoHTML +=
            `<div class="card-marca col-12 col-sm-6 col-lg-4">   
            <a href="#">         
                <figure>                    
                    <img src="${p.imagen}" alt="logo ${p.marca}" onclick="agregarMarcaProc('${p.marca}')">
                </figure>  
            </a>          
        </div>`
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}



function agregarMarcaProc(marcaProc) {
    let pc = getPcLS();
    pc.push(marcaProc);
    guardarPcLS(pc);
    renderProcesadores();
}

function renderProcesadores() {
    renderBotonCarrito();
    renderBotonVolver();
    let pc = getPcLS();
    let marcaProc = pc[0];
    document.getElementById("contenido").innerHTML = "";
    let procesadores = getComponentesLS().procesadores;                  // obtengo los procesadores almacenados en la LS
    let contenidoHTML = `<h3>Listado de procesadores marca ${marcaProc}</h3>
        <h4 class="mb-4">Selecciona un modelo de procesador:</h4>`
    for (const p of procesadores) {
        if (p.marca == marcaProc) {
            contenidoHTML +=
                `<div class="card-producto col-12 col-md-6 col-lg-4 m-0">
                    <figure>
                        <img src="${p.imagen}" alt="${p.modelo}">
                        <figcaption>
                            <h5>${p.marca} ${p.modelo}</h5>
                            <h6>Socket ${p.socketProc}</h6>
                            <p>U$S ${p.precio}</p>
                        </figcaption>
                    </figure>
                    <div class="justify-content-center mb-4">
                        <a href="#" onclick="agregarProcesador(${p.id})">Seleccionar</a>
                    </div>
                </div>`
        }
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}


function agregarProcesador(idProc) {
    let procesadores = getComponentesLS().procesadores;
    let pc = getPcLS();
    let procSelect = procesadores.find(p => p.id == idProc);
    pc.push(procSelect);
    guardarPcLS(pc);
    renderPlacas();
}

function renderPlacas() {
    renderBotonCarrito();
    document.getElementById("contenido").innerHTML = "";
    renderBotonVolver();
    let placas = getComponentesLS().placas;                  // obtengo las placas almacenados en la LS
    let procSelect = getPcLS()[1];
    let contenidoHTML = `<h3>Placas compatibles con el procesador ${procSelect.marca} ${procSelect.modelo}</h3>
        <h4 class="mb-4">Selecciona un modelo de placa:</h4>`
    for (const p of placas) {
        if (p.socketProc == procSelect.socketProc) {
            contenidoHTML +=
                `<div class="card-producto col-12 col-md-6 col-lg-4 m-0">
                    <figure>
                        <img src="${p.imagen}" alt="${p.modelo}">
                        <figcaption>
                            <h5>${p.marca} ${p.modelo}</h5>
                            <h6>Socket ${p.socketProc}</h6>
                            <p>U$S ${p.precio}</p>
                        </figcaption>
                    </figure>
                    <div class="justify-content-center mb-4">
                        <a href="#" onclick="agregarPlaca(${p.id})">Seleccionar</a>
                    </div>
                </div>`
        }
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}


function agregarPlaca(idPlaca) {
    let placas = getComponentesLS().placas;
    let pc = getPcLS();
    let placaSelect = placas.find(p => p.id == idPlaca);
    pc.push(placaSelect);
    guardarPcLS(pc);
    renderRams();
}


function renderRams() {
    renderBotonCarrito();
    document.getElementById("contenido").innerHTML = "";
    renderBotonVolver();
    let rams = getComponentesLS().rams;                  // obtengo las rams almacenados en la LS
    let placaSelect = getPcLS()[2];
    let contenidoHTML = `<h3>Memorias RAM compatibles con la placa ${placaSelect.marca} ${placaSelect.modelo}</h3>
        <h4 class="mb-4">Selecciona un modelo de RAM:</h4>`
    for (const r of rams) {
        if (r.socketRAM == placaSelect.RAM) {
            contenidoHTML +=
                `<div class="card-producto col-12 col-md-6 col-lg-4 m-0">
                    <figure>
                        <img src="${r.imagen}" alt="${r.modelo}">
                        <figcaption>
                            <h5>${r.marca} ${r.modelo}</h5>
                            <h6>Socket ${r.socketRAM}</h6>
                            <h6>${r.capacidad} GB - ${r.velocidad} MHz</h6>
                            <p>U$S ${r.precio}</p>
                        </figcaption>
                    </figure>
                    <div class="justify-content-center mb-4">
                        <a href="#" onclick="agregarRAM(${r.id})">Seleccionar</a>
                    </div>
                </div>`
        }
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

function agregarRAM(idRam) {
    let rams = getComponentesLS().rams;
    let pc = getPcLS();
    let ramSelect = rams.find(r => r.id == idRam);
    pc.push(ramSelect);
    guardarPcLS(pc);
    renderDiscos();
}


function renderDiscos() {
    renderBotonCarrito();
    document.getElementById("contenido").innerHTML = "";
    renderBotonVolver();
    let discos = getComponentesLS().discos;                  // obtengo los discos almacenados en la LS

    let contenidoHTML = `<h3>Lista de dispositivos de almacenamiento</h3>
        <h4 class="mb-4">Selecciona un modelo de Almacenamiento:</h4>`
    for (const d of discos) {
        contenidoHTML +=
            `<div class="card-producto col-12 col-md-6 col-lg-4 m-0">
                <figure>
                    <img src="${d.imagen}" alt="${d.modelo}">
                    <figcaption>
                        <h5>${d.marca} ${d.modelo}</h5>                            
                         <h6>${d.capacidad} GB</h6>
                        <p>U$S ${d.precio}</p>
                    </figcaption>
                </figure>
                <div class="justify-content-center mb-4">
                    <a href="#" onclick="agregarDisco(${d.id})">Seleccionar</a>
                </div>
            </div>`
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

function agregarDisco(idDisco) {
    let discos = getComponentesLS().discos;
    let pc = getPcLS();
    let discoSelect = discos.find(d => d.id == idDisco);
    pc.push(discoSelect);
    guardarPcLS(pc);
    renderGabinetes();
}

function renderGabinetes() {
    renderBotonCarrito();
    document.getElementById("contenido").innerHTML = "";
    renderBotonVolver();
    let gabinetes = getComponentesLS().gabinetes;                  // obtengo los discos almacenados en la LS

    let contenidoHTML = `<h3>Lista de gabinetes</h3>
        <h4 class="mb-4">Selecciona un modelo de Gabinete:</h4>`
    for (const g of gabinetes) {
        contenidoHTML +=
            `<div class="card-producto col-12 col-md-6 col-lg-4 m-0">
                <figure>
                    <img src="${g.imagen}" alt="${g.modelo}">
                    <figcaption>
                        <h5>${g.marca} ${g.modelo}</h5>                                                    
                        <p>U$S ${g.precio}</p>
                    </figcaption>
                </figure>
                <div class="justify-content-center mb-4">
                    <a href="#" onclick="agregarGabinete(${g.id})">Seleccionar</a>
                </div>
            </div>`
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

function agregarGabinete(idGab) {
    let gabinetes = getComponentesLS().gabinetes;
    let pc = getPcLS();
    let gabSelect = gabinetes.find(g => g.id == idGab);
    pc.push(gabSelect);
    guardarPcLS(pc);
    renderFuentes();
}


function renderFuentes() {
    renderBotonCarrito();
    document.getElementById("contenido").innerHTML = "";
    renderBotonVolver();
    let fuentes = getComponentesLS().fuentes;                  // obtengo los discos almacenados en la LS

    let contenidoHTML = `<h3>Lista de fuentes</h3>
        <h4 class="mb-4">Selecciona un modelo de fuente:</h4>`
    for (const f of fuentes) {
        contenidoHTML +=
            `<div class="card-producto col-12 col-md-6 col-lg-4 m-0">
                <figure>
                    <img src="${f.imagen}" alt="${f.modelo}">
                    <figcaption>
                        <h5>${f.marca} ${f.modelo}</h5> 
                        <h6>${f.potencia} W</h6>                                                   
                        <p>U$S ${f.precio}</p>
                    </figcaption>
                </figure>
                <div class="justify-content-center mb-4">
                    <a href="#" onclick="agregarFuente(${f.id})">Seleccionar</a>
                </div>
            </div>`
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}


function agregarFuente(idFuente) {
    let fuentes = getComponentesLS().fuentes;
    let pc = getPcLS();
    let fuenteSelect = fuentes.find(f => f.id == idFuente);
    pc.push(fuenteSelect);
    guardarPcLS(pc);
    irPaginaCarrito();
}

const limpiarCarrito = () => {
    localStorage.removeItem("pc");
    renderCarrito();
    renderBotonCarrito();
    let mensaje = "El carrito se ha limpiado exitosamente";
    mostrarMensaje(mensaje);
}


const renderCarrito = () => {
    const pc = getPcLS();
    let contenidoHTML = "";
    const contenidoCarrito = document.getElementById("contenidoCarrito");

    if (pc.length > 1) {
        contenidoHTML = `<table class="table">`
        if (pc.length > 6) {
            contenidoHTML += `<tr> 
                <td colspan="5" class="text-end"><button class="btn btn-warning" onclick="limpiarCarrito();">Limpiar Carrito</button></td>
            </tr>`;
        } else {
            contenidoHTML += `<tr>
                <td colspan="1" class="text-startr"><button class="btn btn-warning m-2 fs-5" onclick="regresar();">Regresar</button></td>
                <td colspan="4" class="text-end"><button class="btn btn-warning fs-5" onclick="limpiarCarrito();">Limpiar Carrito</button></td>
            </tr>`;
        }

        for (let i = 1; i < pc.length; i++) {
            contenidoHTML += `<tr>
            <td><img src="${pc[i].imagen}" class="img-fluid" alt="${pc[i].modelo}" width="80"></td>
            <td class="align-middle">${pc[i].marca}</td>
            <td class="align-middle text-center">${pc[i].modelo}</td>
            <td class="align-middle text-center">$${pc[i].precio}</td>            
            </tr>`;
        }

        contenidoHTML += `<tr>
        <td colspan="3"><b>Total a Pagar</b></td>        
        <td colspan="1" class="text-center"><b>$${totalCarrito()}</b></td>
        </tr>
        <tr>
        <td colspan="4" class="text-end"><button class="btn btn-warning fs-5 m-2" onclick="finalizarPresupuesto();">Finalizar presupuesto</button></td>
        </tr>
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-warning p-5 text-center fs-5" role="alert">El carrito está vacío.</div>
            <div class="text-center p-5"><button class="btn-volver" onclick="irPaginaPrincipal();">Nuevo presupuesto</button>`;
    }

    if (contenidoCarrito)
        contenidoCarrito.innerHTML = contenidoHTML;
}

const regresar = () => {

    irPaginaPrincipal();
}


const finalizarPresupuesto = () => {
    let texto = `El presupuesto total es de U$S ${totalCarrito()}`;

    mostrarMensajeConBoton(texto, limpiarCarrito);
}

const mostrarMensajeConBoton = (texto, funcion) => {
    Swal.fire({
        title: "Presupuesto finalizado!",
        text: texto,
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Aceptar"
    }).then((result) => {
        funcion();
    });
}

const irPaginaPrincipal = () => {
    location.href = "index.html";
}

const irPaginaCarrito = () => {
    location.href = "carrito.html";
}

const mostrarMensaje = (texto) => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: texto,
        showConfirmButton: false,
        timer: 2000
    });
}

const mostrarMensaje2 = (texto) => {
    Swal.fire({
        title: texto,
        text: '',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
}

function cotizacion(){
    url = 'https://uy.dolarapi.com/v1/cotizaciones/usd';

    cargarJson(url);         
}


async function cargarJson(url) {
    try{
        const respuesta = await fetch(url);
        const data = await respuesta.json();       
        mostrarJson(data);
    } catch(error){
        console.log("error en la respuesta");
    }
} 



function mostrarJson(data){
    let fechaActualiz = data.fechaActualizacion;
    let fechaHora = fechaActualiz.substr(0,10) + " - " + fechaActualiz.substr(11,8);
   
    const myModal = document.getElementById('modalCotizacion');
    myModal.innerHTML = `  <div class="modal-content p-4">  
        <h2 class="my-2">Cotización del dólar</h2>
        <h5>(${fechaHora})</h5>        
        <div class="p-2 my-2">
            <h3>Compra: <strong>$U ${data.compra}</strong></h3>
            <h3>Venta: <strong>$U ${data.venta}</strong></h3>
        </div>
        <div class="modal-footer justify-content-center">
            <button type="button" class="close-button my-4" onclick="closeModal()">Cerrar</button>                       
        </div>
    </div>`

    myModal.style.display = 'block';
}


function closeModal() {
    document.getElementById('modalCotizacion').style.display = 'none';
}
