class C1_mEstudiante
{
	constructor(n = "",s = "",n1 = 0,n2 = 0,n3 = 0)
	{
		this.nombre = n
		this.sexo = s
		this.nota1 = n1 
		this.nota2 = n2
		this.nota3 = n3
	}

	set nombre(n)
	{
		this._nombre = n
	}
	get nombre()
	{
		return this._nombre
	}

	set sexo(s)
	{
		this._sexo = s
	}
	get sexo()
	{
		return this._sexo
	}

	set nota1(n1)
	{
		this._nota1 = parseFloat(n1)
	}
	get nota1()
	{
		return this._nota1
	}

	set nota2(n2)
	{
		this._nota2 = parseFloat(n2)
	}
	get nota2()
	{
		return this._nota2
	}

	set nota3(n3)
	{
		this._nota3 = parseFloat(n3)
	}
	get nota3()
	{
		return this._nota3
	}

	sumatoria()
	{
		return this.nota1 + this.nota2 + this.nota3
	}

	condicion()
	{
		return (this.nota1 + this.nota2 + this.nota3) >= 48
	}

}

class C1_mMateria
{
	constructor()
	{
		this.contRM = 0
		this.contRF = 0
		this.mNota = 0.0
		this.sexMNota = ""
		this.con = ""

	}

	procesarEstudiante(e)
	{
		if(e.condicion() === false && e.sexo === "M")
		{
			this.contRM++
		}
		else
		{
			if(e.condicion() === false && e.sexo === "F")
			{
				this.contRF++
			}
		}

		e.condicion() === true ? this.con = "A" : this.con = "R"

		if(this.mNota < e.sumatoria())
		{
			this.mNota = e.sumatoria()
			this.sexMNota = e.sexo
		}
	}
}

class C1_vEstudiante
{
    reportar(e)
    {
        consola_salida.innerHTML += `${e.nombre.padEnd(13, '.')}`+
        `${e.sexo.padEnd(13, '.')}`+
        `${String(e.nota1).padEnd(12, '.')}`+
        `${String(e.nota2).padEnd(13, '.')}` +
        `${String(e.nota3).padEnd(15, '.')}`+
        `${String(e.sumatoria()).padEnd(15, '.')}`+
        `${String(e.condicion()).padEnd(13, '.')}<br>`
    }
}
class C1_vMateria{
    reportar(cantRM,cantRF,sMNota) {
        consola_salida.innerHTML += `<br> Rf) HOMBRES REPROBADOS: ${cantRM} <br>`+
        `<br>  MUJERES REPROBADAS: ${cantRF} <br>`+
        `<br>  SEXO DEL MEJOR ESTUDIANTE: ${sMNota} <br>`
    }
}
class C1_Controler{
    constructor(){
        this.mEstudiante = new C1_mEstudiante()
        this.vEstudiante = new C1_vEstudiante()
        this.mMateria = new C1_mMateria()
        this.vMateria = new C1_vMateria()
        this.confirm = ""
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
        const Estudiante1 = new C1_mEstudiante("Ana","F" ,15, 10, 20)
        const Estudiante2 = new C1_mEstudiante("Leo","M" ,30, 25, 20)
        const Estudiante3 = new C1_mEstudiante("Ray","M" ,33, 27, 24)
        const Estudiante4 = new C1_mEstudiante("Liz","F" ,20, 26, 32)
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

var controler = new C1_Controler
controler.procesar()
