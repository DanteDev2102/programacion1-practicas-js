class C1_mFigura
{
	constructor(cX = 0,cY = 0)
	{
		this.coordenadaX = cX
		this.coordenadaY = cY
	}
}

class C1_mCuadrado extends C1_mFigura
{
	constructor(cX,cY,lL = 0)
	{
		super(cX,cY)
		this.longitudLado = lL
	}

	area()
	{
		return Math.pow(this.longitudLado,2)
	}

	perimetro()
	{
		return 4 * this.longitudLado
	}

}

class C1_mAsignaciones
{
	constructor()
	{
		this.cuadrados = []
	}

	includeCuadrado(cuad)
	{
		this.cuadrados.push(cuad)
	}	

	deleteCuadrado(pos)
	{
		if (pos >= 0 && pos < this.cuadrados.length)
        	this.cuadrados.splice(pos, 1)       
	}

	infoCuadrado()
	{
		let info = []
		for(let c of this.cuadrados)
			info.push([c.coordenadaX,c.coordenadaY,c.longitudLado,c.area(),c.perimetro()])
		return info
	}

}

class C1_vAsignaciones
{
	borrarPantalla()
	{
		consola_salida.innerHTML = ''
	}

	reportar(req)
	{
		this.borrarPantalla()
		consola_salida.innerHTML = '<br><br><b>Coordenada X ------ Coordenada Y ------ Lado ------ Área ------ Perimetro</b><br><br>'
		for (let e in req)
    	consola_salida.innerHTML +=
    	`${req[e][0].toString().padEnd(25, '.')}` +
    	`${req[e][1].toString().padEnd(15, '.')}` +
    	`${req[e][2].toString().padEnd(12, '.')}` +
    	`${req[e][3].toString().padEnd(5, '.')}` +
    	`${req[e][4].toString().padStart(10, '.')}<br>`
    }
}

class C1_Controler
{
	constructor()
	{
		this.mAsignaciones = new C1_mAsignaciones()
		this.vAsignaciones = new C1_vAsignaciones()
	}

	init()
	{
		this.mAsignaciones.includeCuadrado(new C1_mCuadrado(4,5,5))
		this.mAsignaciones.includeCuadrado(new C1_mCuadrado(0,0,8))
		this.mAsignaciones.includeCuadrado(new C1_mCuadrado(1,3,2))
		this.mAsignaciones.includeCuadrado(new C1_mCuadrado(9,4,3))
	}

	add()
	{
		let cX = window.prompt('Ingrese la coordenada en el eje X'),
			 cY = window.prompt('Ingresa la coordenada en el eje Y'),
			 lL = window.prompt('Ingrese la longitud de uno de los lados')

		let cuadrado = new C1_mCuadrado(cX,cY,lL)
		this.mAsignaciones.includeCuadrado(cuadrado)
	}

	delete()
	{
      let pos = window.prompt('Ingrese posición del cuadrado: ')
      if (pos !== '')
      {
         this.mAsignaciones.deleteCuadrado(parseInt(pos) - 1)
      }
   }

   report()
   {
   	let rep = this.mAsignaciones.infoCuadrado()
    	this.vAsignaciones.reportar(rep)
   }
}
 
const controler = new C1_Controler()
controler.init()

document.getElementById('btAddCuadrado').onclick = function () {
  controler.add()
}
document.getElementById('btDelCuadrado').onclick = function () {
  controler.delete()
}
document.getElementById('btReportar').onclick = function () {
  controler.report()
}

