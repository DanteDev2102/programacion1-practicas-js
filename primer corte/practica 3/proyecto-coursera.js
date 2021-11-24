class C1_mPartipante
{
	constructor(c = '',s = '',e = 0, aC = 0)
	{
		this.cedula = c
		this.sexo = s
		this.edad = e
		this.areaCurso = aC 
	}

	get cedula()
	{
		return this._cedula
	}
	set cedula(c)
	{
		this._cedula = c 
	}

	get sexo()
	{
		return this._sexo
	}
	set sexo(s)
	{
		this._sexo = s
	}

	get edad()
	{
		return this._edad
	}
	set edad(e)
	{
		this._edad = parseFloat(e)
	}

	get areaCurso()
	{
		return this._areaCurso
	}
	set areaCurso(aC)
	{
		this._areaCurso = parseFloat(aC)
	}
}

class C1_mEmpresa
{
	constructor()
	{	
		this.contG = 0 //contador general
		this.contC = 0 //contador computacion
		this.contM = 0 //contador medicina
	}

	//metodo cacular porcentaje de particpantes de medicina
	calcularPorcM()
	{
		return (this.contM / this.contG) * 100
	}

	procesarParticipante(p)
	{
		if(p.areaCurso === 1)
		{
			this.contC++
		}
		else
		{
			if(p.areaCurso === 2)
			{
				this.contM++
			}	
		}

		this.contG++
	}
}

class C1_vParticipante
{
 	reportar(p)
 	{
 		consola_salida.innerHTML += `${String(p.cedula).padEnd(13, ' .')}` +
 		`${String(p.sexo).padEnd(13, ' .')}` + `${String(p.edad).padEnd(13, ' .')}` + `${p.areaCurso}<br>`
 	}
}

class C1_vEmpresa
{
	reportar(contC,calcularPorcM)
	{
		consola_salida.innerHTML += `TOTAL DE PARTICIPANTES EN EL ÁREA DE COMPUTACIÓN: ${contC}<br>`+
		`PORCENTAJE DE PARTICPANTES DEL ÁREA DE MEDICINA: ${calcularPorcM.toFixed(2)}%<br>`
	}
}

class C1_Controlador
{
	constructor()
	{
		this.mPartipante = new C1_mPartipante()
		this.mEmpresa = new C1_mEmpresa()
		this.vParticipante = new C1_vParticipante()
		this.vEmpresa = new C1_vEmpresa()
	}

	get mPartipante()
	{
		return this._mPartipante
	}
	set mPartipante(pa)
	{
		this._mPartipante = pa
	}

	get mEmpresa()
	{
		return this._mEmpresa
	}
	set mEmpresa(em)
	{
		this._mEmpresa = em
	}

	get vParticipante()
	{
		return this._vParticipante
	}
	set vParticipante(pa)
	{
		this._vParticipante = pa
	}

	get vEmpresa()
	{
		return this._vEmpresa
	}
	set vEmpresa(em)
	{
		this._vEmpresa = em
	}

	procesar()
	{
		consola_salida.innerHTML =
		'Cédula.....Sexo..........Edad....Área del Curso<br>' +
        '================================================<br>'

		let participante1 = new C1_mPartipante(11,'M',32,1)
		let participante2 = new C1_mPartipante(31,'F',36,1)
		let participante3 = new C1_mPartipante(10,'F',28,1)
		let participante4 = new C1_mPartipante(67,'M',30,2)
		let participante5 = new C1_mPartipante(12,'F',26,2)

		this.mEmpresa.procesarParticipante(participante1)
		this.vParticipante.reportar(participante1)
		this.mEmpresa.procesarParticipante(participante2)
		this.vParticipante.reportar(participante2)
		this.mEmpresa.procesarParticipante(participante3)
		this.vParticipante.reportar(participante3)
		this.mEmpresa.procesarParticipante(participante4)
		this.vParticipante.reportar(participante4)
		this.mEmpresa.procesarParticipante(participante5)
		this.vParticipante.reportar(participante5)

		consola_salida.innerHTML += 
        '================================================<br>'

		this.vEmpresa.reportar(this.mEmpresa.contC,this.mEmpresa.calcularPorcM())	
		this.procesar2()	
	}

	procesar2()
	{
		let procesar = confirm('¿Desea procesar los datos manualmente?')

		if(procesar)
		{
			this.mEmpresa.contC = 0
			this.mEmpresa.contM = 0
			this.mEmpresa.contG = 0

			consola_salida.innerHTML +=
			'Cédula.....Sexo..........Edad....Área del Curso<br>' +
			'================================================<br>'
        	while(procesar)
        	{
        		this.mPartipante.cedula = prompt('Ingrese la cedula: ')
        		this.mPartipante.sexo = prompt('Ingrese el sexo: ')
        		this.mPartipante.edad = prompt('Ingrese la edad: ')
        		this.mPartipante.areaCurso = prompt('Ingrese el área del curso')
        		this.mEmpresa.procesarParticipante(this.mPartipante)
        		this.vParticipante.reportar(this.mPartipante)
        		procesar = confirm('¿Hay otro participante?')
        	}
        	this.vEmpresa.reportar(this.mEmpresa.contC,this.mEmpresa.calcularPorcM())
        	consola_salida.innerHTML += 
			'================================================<br>'
		}
	}
}

var controler = new C1_Controlador
controler.procesar()