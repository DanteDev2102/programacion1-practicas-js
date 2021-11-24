class Cl_mEstudiante{
    constructor(n="",s="",n1=0,n2=0,n3=0){
        this.nombre=n
        this.sexo=s
        this.nota1=n1
        this.nota2=n2
        this.nota3=n3
        this.condicion=""
    }
    get nombre() {
        return this._nombre
    }
    set nombre(n) {
        this._nombre = n
    }
    get sexo() {
        return this._sexo
    }
    set sexo(s) {
        this._sexo = s
    }
    get nota1() {
        return this._nota1
    }
    set nota1(n1) {
        this._nota1 = parseFloat(n1)
    }
    get nota2() {
        return this._nota2
    }
    set nota2(n2) {
        this._nota2 = parseFloat(n2)
    }
    get nota3() {
        return this._nota3
    }
    set nota3(n3) {
        this._nota3 = parseFloat(n3)
    }
    get condicion() {
        return this._condicion
    }
    set condicion(c) {
        this._condicion = c
    }
    notaTotal(){
        return this.nota1+this.nota2+this.nota3
    }
}
class Cl_mMateria{
    constructor(){
        this.cantRM=0
        this.cantRF=0
        this.mNota=0
        this.sMNota=0
    }
    set cantRM(cRM){
        this._cantRM=cRM
    }
    get cantRM(){
        return this._cantRM
    }
    set cantRF(cRF){
        this._cantRF=cRF
    }
    get cantRM(){
        return this._cantRF
    }
    set mNota(mN){
        this._mNota=mN
    }
    get mNota(){
        return this._mNota
    }
    set sMNota(sMN){
        this._sMNota=sMN
    }
    get sMNota(){
        return this._sMNota
    }
    procesarEstudiante(e){
        if((e.notaTotal()<48)&&(e.sexo==="M")){
            this.cantRM++
            e.condicion="R"
        }
        else if((e.notaTotal()<48)&&(e.sexo==="F")){
            this.cantRF++
            e.condicion="R"
        }
        else
        e.condicion="A"

        if(this.mNota<e.notaTotal()){
            this.mNota=e.notaTotal()
            this.sMNota=e.sexo
        }
    }
}
class Cl_vEstudiante{
    reportar(e) {
        consola_salida.innerHTML += `${e.nombre.padEnd(13, '.')}`+
        `${e.sexo.padEnd(13, '.')}`+
        `${String(e.nota1).padEnd(12, '.')}`+
        `${String(e.nota2).padEnd(13, '.')}` +
        `${String(e.nota3).padEnd(15, '.')}`+
        `${String(e.notaTotal()).padEnd(15, '.')}`+
        `${e.condicion.padEnd(13, '.')}  <br>`;
    }
}
class Cl_vMateria{
    reportar(cantRM,cantRF,sMNota) {
        consola_salida.innerHTML += `<br> Rf) HOMBRES REPROBADOS: ${0} <br>`+
        `<br>  MUJERES REPROBADAS: ${1} <br>`+
        `<br>  SEXO DEL MEJOR ESTUDIANTE: ${sMNota} <br>`
    }
}
class Cl_Controler{
    constructor(){
        this.mEstudiante = new Cl_mEstudiante()
        this.vEstudiante = new Cl_vEstudiante()
        this.mMateria = new Cl_mMateria()
        this.vMateria = new Cl_vMateria()
    }
    set mEstudiante(e){
        this._mEstudiante = e

    }
    get mEstudiante(){
        return this._mEstudiante
    }
    set vEstudiante(e){
        this._vEstudiante = e

    }
    get vEstudiante(){
        return this._vEstudiante
    }
    set mMateria(m){
        this._mMateria = m
    }
    get mMateria(){
        return this._mMateria
    }
    set vMateria(m){
        this._vMateria = m
    }
    get vMateria(){
        return this._vMateria
    }
    procesar(){
        consola_salida.innerHTML += 
        'Nombre.....Sexo..... Nota 1.... Nota 2.... Nota 3.... Nota total....Condicion<br>' +
        '=============================================================================<br>'
        let Estudiante1 = new Cl_mEstudiante("Ana","F" ,15, 10, 20)
        let Estudiante2 = new Cl_mEstudiante("Leo","M" ,30, 25, 20)
        let Estudiante3 = new Cl_mEstudiante("Ray","M" ,33, 27, 24)
        let Estudiante4 = new Cl_mEstudiante("Liz","F" ,20, 26, 32)
        this.mMateria.procesarEstudiante(Estudiante1)   
        this.vEstudiante.reportar(Estudiante1)
        this.mMateria.procesarEstudiante(Estudiante2)   
        this.vEstudiante.reportar(Estudiante2)
        this.mMateria.procesarEstudiante(Estudiante3)   
        this.vEstudiante.reportar(Estudiante3)
        this.mMateria.procesarEstudiante(Estudiante4)   
        this.vEstudiante.reportar(Estudiante4)
        this.vMateria.reportar(this.mMateria.cantRM,this.mMateria.cantRF,this.mMateria.sMNota)
        consola_salida.innerHTML +=
        '==========================================================================<br><br>'
        this.procesar2()
    }
    
    procesar2(){
        let procesar = new confirm('¿Desea procesar los datos manualmente?')
        if(procesar){
            this.mMateria.cantRM = 0
            this.mMateria.cantRF = 0
            this.mMateria.mNota = 0
            this.mMateria.sMNota =""
            consola_salida.innerHTML += 
            'Nombre.....Sexo..... Nota 1.... Nota 2.... Nota 3.... Nota total....Condicion<br>' +
            '=============================================================================<br>'
            while(procesar){
                this.mEstudiante.nombre = prompt('ingrese nombre')
                this.mEstudiante.sexo = prompt('ingrese el sexo')
                this.mEstudiante.nota1 = prompt('ingrese nota 1')
                this.mEstudiante.nota2 = prompt('ingrese nota 2')
                this.mEstudiante.nota3 = prompt('ingrese nota 3')
                this.mMateria.procesarEstudiante(this.mEstudiante)
                this.vEstudiante.reportar(this.mEstudiante)
                procesar = confirm('¿hay otro estudiante?')
            }
        this.vMateria.reportar(this.mMateria.cantRM,this.mMateria.cantRF,this.mMateria.sMNota)
        consola_salida.innerHTML +=
        '==========================================================================<br><br>'
        }
    }
}

var controler = new Cl_Controler
controler.procesar()