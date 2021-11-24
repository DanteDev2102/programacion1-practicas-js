class c1_mIntegrante
{
	constructor(s = 0, g = 0)
	{
		this.sueldo = s
		this.gasto = g
	}

	set sueldo(s)
	{
		this._sueldo = parseFloat(s)
	}
	get sueldo()
	{
		return this._sueldo
	}

	set gasto(g)
	{
		this._gasto = parseFloat(g)
	}
	get gasto()
	{
		return this._gasto
	}

	montoMensual()
	{
		return this._sueldo - this._gasto
	}

}

class c1_mFamilia
{
	constructor(tf = 0)
	{
		this.totalFamilia = tf
	}

	set totalFamilia(tf)
	{
		this._totalFamilia = parseFloat(tf)
	}
	get totalFamilia()
	{
		return this._totalFamilia
	}

	procesarIntegrante(i)
	{
		this._totalFamilia += i.montoMensual()
	}
}

class C1_vFamilia
{
	reportar(totalFamilia)
	{
      consola_salida.innerHTML += `<br>TOTAL DE DINERO PARA LA FAMILIA: ${totalFamilia}<br>`
   	}
}

class C1_vIntegrante
{
	reportar(i)
	{
      	consola_salida.innerHTML +=
         `${String(i.sueldo.padStart(0, '.')}` +
         `${String(i.gasto.padStart(5, '.')}<br>`+
         `${String(i.montoMensual).padStart(10, '.')}<br>`
   }
}

class C1_controler
{
	constructor()
	{
		this.mIntegrante = new c1_mIntegrante()
		this.mFamilia = new c1_mFamilia()
		this.vIntegrante = new C1_vIntegrante()
		this.vFamilia = new C1_vFamilia()
	}

	set mFamilia(f)
	{
		this.mFamilia = f
	}
	get mFamilia()
	{
		return this.mFamilia
	}

	set mIntegrante(i)
	{
		this.mIntegrante = i
	}
	get mIntegrante()
	{
		return this.c1_mIntegrante
	}

	set vFamilia(f)
	{
		this.vFamilia = f
	}
	get vFamilia()
	{
		return this.vFamilia
	}

	set vIntegrante(i)
	{
		this.vIntegrante = i
	}
	get vIntegrante()
	{
		return this.vIntegrante
	}

	procesar()
	{
		consola_salida.innerHTML =
			"sueldo.... gasto<br>"+
			"===========================<br>"
			let integrante1 = new c1_mPersona(100,60)
			let integrante2 = new c1_mPersona(200,120)
			let integrante3 = new c1_mPersona(300,170)
			let persona4 = new c1_mPersona(400,220)
			this.mFamilia.procesarPersona(integrante1)
			this.vIntegrante.reportar(integrante1)
			this.mFamilia.procesarPersona(integrante2)
			this.vIntegrante.reportar(integrante2)
			this.mFamilia.procesarPersona(integrante3)
			this.vIntegrante.reportar(integrante3)
			this.mFamilia.procesarPersona(integrante4)
			this.vIntegrante.reportar(integrante4)
			this.vFamilia.reportar(this.mFamilia.totalFamilia)
			 consola_salida.innerHTML +=
         	"==========================================<br><br>"
     		 this.procesar2()	
	}

	procesar2()
	{
      	let procesar = confirm('Procesar datos manualmente?')
        sueldo = 0
        gasto = 0

     	if (procesar)
     	{
        	this.mFamilia.totalFamilia = 0
         	consola_salida.innerHTML +=
            	'==========================================<br>'
         	while (procesar)
         	{
            	this.mIntegrante.sueldo = prompt("Indique sueldo")
            	this.mIntegrante.gasto = prompt("Indique gastos")
            	this.mFamilia.procesarIntegrante(this.mIntegrante)
            	this.vIntegrante.reportar(this.mIntegrante)
            	procesar = confirm("¿Hay otro integrante?")
         	}
        	this.vFamilia.reportar(this.mFamilia.totalFamilia)
         	consola_salida.innerHTML +=
            '==========================================<br>'
        }    
    }    

}
