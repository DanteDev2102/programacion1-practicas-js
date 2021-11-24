class C1_mPersona
{
   constructor(c, n)
   {
      this.cedula = c
      this.nombre = n
   }
}

class C1_mEstudiante extends Cl_mPersona
{
   constructor(c,n,nt)
   {
      super(c,nm)
      this.nota = nt
   }

   get nota()
   {
      return this._nota
   }

   set nota(nt)
   {
      this._nota = parseFloat(nt)
   }

   aprobado()
   {
      return this.nota >= 47.5
   }
}

class C1_mSeccion
{
   constructor()
   {
      this.arrObjEstudiante = []
   }

   incluirEstudiante(estud)
   {
      this.arrObjEstudiante.push(estud)
   }

   eliminarEstudiante(pos)
   {
      if (pos >= 0 && pos < this.arrObjEstudiante.length)
      {   
         this.arrObjEstudiante.splice(pos, 1)
      }
   }

   infoEstudiantes()
   {
      let info = []
      for (let e of this.arrObjEstudiante)
      {
         info.push([e.cedula, e.nombre, e.nota, e.aprobado()?'SI':'NO'])
      }
      return info
   }

   promedioNota()
   {
      let ac = 0
      for (let e of arrObjEstudiante) ac += e.nota
      return arrObjEstudiante.length > 0 ? ac / arrObjEstudiante.length : 0
   }

   porcentajeEncPromedio()
   {
      let prom = this.promedioNota(),
         cnt = 0
      for (let e of arrObjEstudiante) if (e.nota > prom) cnt++
      return cnt / arrObjEstudiante.length
   }

   infoReprobados()
   {
      let info = []
      for (e of arrObjEstudiante)
         if (e.aprobado()) {
            let est = [e.cedula, e.nombre]
            info.push(est)
         }
      return info
   }

class C1_vSeccion
{
   borrarPantalla()
   {
      consola_salida.innerHTML = ''
   }

   reportar(req1,req2,req3,req4)
   {
      this.borrarPantalla()

      consola_salida.innerHTML += '<br><br><b>Nº..Cédula..Nombre..Nota Final..Aprobado</b><br>'

      for (let e in req1)
      {
      consola_salida.innerHTML +=
      `${ (parseInt(e) + 1).toString().padEnd(5, '.') }` +
      `${ req1[e][0].toString().padEnd(8, '.') }` +
      `${ req1[e][1].padEnd(11, '.') }` +
      `${ req1[e][2].toString().padEnd(11, '.') }` +
      `${ req1[e][3].toString() }<br>`
      }

      consola_salida.innerHTML +=
      `<br><b>La nota promedio de la seccion es de</b> ` + `${ parseInt(req2) }`

      consola_salida.innerHTML +=
      `<br><b>Porcentaje de alumnos con notas superiores al promedio</b> ` +
      `${ parseInt(req3) }` + '<b>%</b>'

      consola_salida.innerHTML += '<br><br><b>Reprobados de la seccion</b><br>'

      consola_salida.innerHTML += '<b>Nº..Cédula..Nombre</b><br>'

      for (let r in req4)
      {
      consola_salida.innerHTML +=
      `${ (parseInt(r) + 1).toString().padEnd(5, '.') }` +
      `${ req4[r][0].toString().padEnd(8, '.') }` +
      `${ req4[r][1] }` + '<br>'
      }  
   }
}

class C1_controler
{

  constructor()
  {
    this.mSeccion = new C1_mSeccion()
    this.vSeccion = new C1_vSeccion()
  }

  initEstuds()
  {
      let estud1 = new C1_mEstudiante("333", 'Katy', 50)
      let estud2 = new C1_mEstudiante("999", 'Mary', 55)
      let estud3 = new C1_mEstudiante("555", 'Joel', 40)
      let estud4 = new C1_mEstudiante("777", 'Juan', 45)
      let estud5 = new C1_mEstudiante("888", 'Ana', 60)

      this.mSeccion.incluirEstudiante(estud1)
      this.mSeccion.incluirEstudiante(estud2)
      this.mSeccion.incluirEstudiante(estud3)
      this.mSeccion.incluirEstudiante(estud4)
      this.mSeccion.incluirEstudiante(estud5)

      this.vSeccion.reportar(this.mSeccion.infoEstudiantes(),
      this.mSeccion.promedioNota(),
      this.mSeccion.porcentajeEncPromedio(),
      this.mSeccion.infoReprobados())
  }
  addEstudiante()
  {
      let ced = window.prompt('Introduzca cedula: '),
      nom = window.prompt('Introduzca nombre: '),
      nota = window.prompt('Introduzca nota: '),
      estud = new Cl_mEstudiante(ced, nom, nota)

      this.mSeccion.incluirEstudiante(estud)

      this.vSeccion.reportar(this.mSeccion.infoEstudiantes(),
      this.mSeccion.promedioNota(),
      this.mSeccion.porcentajeEncPromedio(),
      this.mSeccion.infoReprobados())
  }

  delEstudiante()
  {
      let pos = window.prompt(
      'Introduzca posición del estudiante: '
    )
    if (pos !== '') {
      this.mSeccion.eliminarEstudiante(parseInt(pos) - 1)
      this.vSeccion.reportar(this.mSeccion.infoEstudiantes(),
        this.mSeccion.promedioNota(),
        this.mSeccion.porcentajeEncPromedio(),
        this.mSeccion.infoReprobados())
    }
  }
}

var controler = new C1_controler()
controler.initEstuds()

document.getElementById('btAddEstud').onclick = function ()
{
  controler.addEstudiante()
}

document.getElementById('btDelEstud').onclick = function ()
{
  controler.delEstudiante()
}