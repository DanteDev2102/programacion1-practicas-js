class Cl_mEstudiante{
     constructor( Cdi = '' , Ca = 0 , cantLib = 0 ){
        this.cedula = Cdi ;
        this.carrera = Ca;
        this.cantidadLibros = cantLib;
     }
     get cedula() {
        return this._cedula;
    }
    set cedula(Cdi) {
        this._cedula = Cdi;
    }
    get carrera() {
        return this._carrera;
    }
    set carrera(Ca) {
        this._carrera = parseFloat ( Ca);
    }
    get cantidadLibros(){
        return this._cantidadLibros ;
    }
    set cantidadLibros(cantLib){
        this._cantidadLibros = parseFloat ( cantLib);
    }
    calcTotal(){
        if ( this.carrera == 1 ){
            return this.cantidadLibros * 200 ;
        }
        if ( this.carrera == 2){
            return this.cantidadLibros * 600 ;
        }
        if ( this.carrera == 3 ){
            return this.cantidadLibros * 500;
        }
    }
    calcDesc(){
        if (this.cantidadLibros >= 4 ){
            return this.calcTotal() * 0.20 ;
        }
        else{ 
            return 0 ;}
    }
    calcTotalFi(){
        return this.calcTotal() - this.calcDesc() ;
    }
}
class Cl_mCentroEst {
    constructor (){
        this.acumEst_2 = 0 ;
        this.contEst = 0 ;
        this.contEst_1 = 0 ;
    }
    calcPorcEst_1(){
        return ((this.contEst_1 * 100) / this.contEst) ;
    }
    procesarEstudiante(e){
        this.contEst ++
        if ( e.cantidadLibros == 1 ){
            this.contEst_1++
        }
        if ( e.cantidadLibros > 2){
            this.acumEst_2 += e.calcTotalFi()
        }
    }
}
class Cl_vCentroEst{
    reportar (Rb , Rc){
        consola_salida.innerHTML += 
        `<br>El monto total vendido a estudiantes con mas de dos libros es de : ${Rb}<br> 
        El porcentaje de estudiantes que compraron solo 1 libro es de ${Rc}%<br>`
    }
}
class Cl_vEstudiante{
    reportar(e){
        consola_salida.innerHTML+=
        `${String(e.cedula).padEnd(8,'.')}${String(e.carrera).padStart(6,'.')}
        ${String(e.cantidadLibros).padStart(16,'.')}${String(e.calcTotal()).padStart(18,'.')}
        ${String(e.calcDesc()).padStart(15,'.')}${String(e.calcTotalFi()).padStart(11,'.')}<br>`;
    }
}
class Cl_controlador {
    constructor(){
        this.mCentroEst = new Cl_mCentroEst();
        this.vCentroEst = new Cl_vCentroEst();
        this.mEstudiante = new Cl_mEstudiante();
        this.vEstudiante = new Cl_vEstudiante();
    }
    procesar(){

        consola_salida.innerHTML=
        ` Cedula   || Carrera   || Cantidad de libros   || Sub Total   || Descuento   || Total   ||`+
        `====================================================================<br>`
        let Estudiante1 = new Cl_mEstudiante(333,1,2);
        let Estudiante2 = new Cl_mEstudiante(888,2,4);
        let Estudiante3 = new Cl_mEstudiante(444,3,1);
        let Estudiante4 = new Cl_mEstudiante(999,2,3);
        let Estudiante5 = new Cl_mEstudiante(555,1,3);
        this.mCentroEst.procesarEstudiante(Estudiante1)
        this.vEstudiante.reportar(Estudiante1)
        this.mCentroEst.procesarEstudiante(Estudiante2)
        this.vEstudiante.reportar(Estudiante2)
        this.mCentroEst.procesarEstudiante(Estudiante3)
        this.vEstudiante.reportar(Estudiante3)
        this.mCentroEst.procesarEstudiante(Estudiante4)
        this.vEstudiante.reportar(Estudiante4)
        this.mCentroEst.procesarEstudiante(Estudiante5)
        this.vEstudiante.reportar(Estudiante5)
        this.vCentroEst.reportar(this.mCentroEst.acumEst_2, this.mCentroEst.calcPorcEst_1())
        consola_salida.innerHTML+=
        `==============================================================<br><br>`
        this.procesar2()
    }
    procesar2(){
        let procesar = confirm(`Desea Procesar manualmente?`)
    
        if (procesar){

        	this.mCentroEst.contEst = 0 
        	this.mCentroEst.contEst_1 = 0         
        	this.mCentroEst.acumEst_2 = 0 

            consola_salida.innerHTML+=
            ` Cedula   || Carrera   || Cantidad de libros   || Sub Total   || Descuento   || Total   ||`+
        `=========================================================================<br>`
        while(procesar){
            this.mEstudiante.cedula = prompt(`Ingrese la cedula del estudiante`);
            this.mEstudiante.carrera = prompt(`Ingrese la carrera a la que pertenece el estudiante`);
            this.mEstudiante.cantidadLibros = prompt(`Ingrese la cantidad de libros que lleva el estudiante`)
            this.mCentroEst.procesarEstudiante(this.mEstudiante);
            this.vEstudiante.reportar(this.mEstudiante);
            procesar = confirm( `Desea registrar otro estudiante?`)
        }
        this.vCentroEst.reportar(this.mCentroEst.acumEst_2, this.mCentroEst.calcPorcEst_1())
        consola_salida.innerHTML+=
        `=======================================================================<br><br>`
        }
    }
}
var controler = new Cl_controlador;
controler.procesar();