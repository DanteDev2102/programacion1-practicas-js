class mPersona{
    constructor(n='', p=0, t=0){
        this.nombre = n;
        this.pareja = p;
        this.tiempo = t;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(n){
        this._nombre = n;
    }
    get pareja(){
        return this._pareja;
    }
    set pareja(p){
        this._pareja = p;
    }
    get tiempo(){
        return this._tiempo;
    }
    set tiempo(t){
        this._tiempo = t;
    }
    calcMontoRegalo(){
        if (this.pareja == 1) {
            return this.tiempo*200;
        } else {
            return 100;
        }
    }
}
class mAgencia{
    constructor(){
        this.contPersonas = 0;
        this.contPersonasNoPareja = 0;
        this.acumMontoTotal = 0;
    }
    procesarPersona(p){
        this.contPersonas++;
        this.acumMontoTotal+= p.calcMontoRegalo();
        if (p.pareja == 0){
            this.contPersonasNoPareja++;
        }
    }
    calcPorcNoPareja(){
        return 100*(this.contPersonasNoPareja/this.contPersonas);
    }
}
class vPersona{
    reportar(p){
        consola_salida.innerHTML+=
        `${String(p.nombre).padEnd(11,'.')}${String(p.pareja).padEnd(9,'.')}
        ${String(p.tiempo).padEnd(15,'.')}${String(p.calcMontoRegalo())}
        <br>`
    }
}
class vAgencia{
    reportar(pP, mT){
        consola_salida.innerHTML+= `<br>El Porcentaje de Personas sin Pareja es de ${pP}%`
        consola_salida.innerHTML+= `<br>El Monto Total de todos los Regalos es de ${mT} <br>`
    }
}
class controler{
    constructor(){
        this.mPersona = new mPersona();
        this.vPersona = new vPersona();
        this.mAgencia = new mAgencia();
        this.vAgencia = new vAgencia();
    }
    procesar(){
        consola_salida.innerHTML =
        `Nombre===Pareja===Tiempo===Monto Total del Regalo <br>`
        let per1 = new mPersona('Joe', 0, 2)
        let per2 = new mPersona('Liz', 1, 3)
        let per3 = new mPersona('Any', 1, 1)
        let per4 = new mPersona('Tom', 0, 2)
        let per5 = new mPersona('Ken', 1, 3)
        this.mAgencia.procesarPersona(per1)
        this.vPersona.reportar(per1)
        this.mAgencia.procesarPersona(per2)
        this.vPersona.reportar(per2)
        this.mAgencia.procesarPersona(per3)
        this.vPersona.reportar(per3)
        this.mAgencia.procesarPersona(per4)
        this.vPersona.reportar(per4)
        this.mAgencia.procesarPersona(per5)
        this.vPersona.reportar(per5)
        this.vAgencia.reportar(this.mAgencia.calcPorcNoPareja().toFixed(2), this.mAgencia.acumMontoTotal)
        consola_salida.innerHTML +=
        '==========================================<br><br>'
        this.procesar2()
    }
    procesar2(){

        let proceso = confirm('Desea Procesar los Datos Manualmente?')
        
        if (proceso){

            this.mAgencia.contPersonas = 0;
            this.mAgencia.contPersonasNoPareja = 0;
            this.mAgencia.acumMontoTotal = 0;

            consola_salida.innerHTML +=
            `Nombre===Pareja===Tiempo===Monto Total del Regalo <br>`
            while (proceso){
                this.mPersona.nombre = prompt(`Ingrese el Nombre`)
                this.mPersona.pareja = prompt(`Tienes Pareja? (NO = 0, SI = 1)`)
                if (this.mPersona.pareja == 1){
                    this.mPersona.tiempo = prompt(`Ingrese el tiempo (1, 2, 3)`)
                }
                else{
                    this.mPersona.tiempo = 0;
                }

                this.mAgencia.procesarPersona(this.mPersona)
                this.vPersona.reportar(this.mPersona)
                
                proceso = confirm(`Desea Procesar otra Persona?`)
            }
            this.vAgencia.reportar(this.mAgencia.calcPorcNoPareja().toFixed(2), this.mAgencia.acumMontoTotal)
            consola_salida.innerHTML +=
            `<br>=========================================<br><br>`
        }
    }
}
var controlador = new controler();
controlador.procesar();
