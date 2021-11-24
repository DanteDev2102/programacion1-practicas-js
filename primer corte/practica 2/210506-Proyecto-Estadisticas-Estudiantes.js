class Cl_mStudent
{
    constructor(n = "",s = "",t1 = 0,t2 = 0,t3 = 0)
    {
        this.name = n
        this.sex = s
        this.test1 = t1
        this.test2 = t2
        this.test3 = t3
        this.condition = ""
    }
    get name()
    {
        return this._name
    }
    set nombre(n)
    {
        this._name = n
    }
    get sex()
    {
        return this._sex
    }
    set sexo(s)
    {
        this._sex = s
    }
    get test1()
    {
        return this._test1
    }
    set test1(t1)
    {
        this._test1 = parseFloat(t1)
    }
    get test2()
    {
        return this._test2
    }
    set nota2(n2)
    {
        this._test2 = parseFloat(t2)
    }
    get test3()
    {
        return this._test3
    }
    set test3(t3)
    {
        this._test3 = parseFloat(t3)
    }
    get condition()
    {
        return this._condition
    }
    set condition(c)
    {
        this._condition = c
    }
    summation()
    {
        return this.test1 + this.test2 + this.test3
    }
}
class Cl_mCourse
{
    constructor()
    {
        this.accRM=0
        this.accRF=0
        this.maxC=0
        this.sexMC=0
    }
    set accRM(aRM)
    {
        this._cantRM = aRM
    }
    get accRM()
    {
        return this._accRM
    }
    set accRF(aRF)
    {
        this._accRF = aRF
    }
    get accRM()
    {
        return this._accRF
    }
    set maxC(mC)
    {
        this._maxC = mC
    }
    get maxC()
    {
        return this._maxC
    }
    set sexMC(sMC)
    {
        this._sexMC = sMC
    }
    get sexMC()
    {
        return this._sexMC
    }
    processStudent(st)
    {
        if((st.summation() < 48) && (st.sex === "M")){
            this.accRM++
            e.condition = "R"
        }
        else if((st.summation()<48)&&(st.sex === "F")){
            this.accRF++
            st._condition = "R"
        }
        else
        st.condition = "A"

        if(this.maxC < st.summation())
        {
            this.maxC = st.summation()
            this.sexMc = st.sex
        }
    }
}
class Cl_vStudent
{
    report(st)
    {
        consola_salida.innerHTML += `${st.name.padEnd(13, '.')}`+
        `${st.sex.padEnd(13, '.')}`+
        `${String(st.test1).padEnd(12, '.')}` +
        `${String(st.test2).padEnd(13, '.')}` +
        `${String(st.test3).padEnd(15, '.')}` +
        `${String(st.summation()).padEnd(15, '.')}` + 
        `${st.condition.padEnd(13, '.')}  <br>`
    }
}
class Cl_vCourse
{
    report(accRM,accRF,sexMC)
    {
        consola_salida.innerHTML += `<br> Rf) HOMBRES REPROBADOS: ${accRM} <br>`+
        `<br>  MUJERES REPROBADAS: ${accRF} <br>` + 
        `SEXO DEL MEJOR ESTUDIANTE: ${sexMC} <br>`
    }
}
class Cl_Controler
{
    constructor()
    {
        this.mStudent = new Cl_mStudent()
        this.vStudent = new Cl_vStudent()
        this.mCourse = new Cl_mStudent()
        this.vCourse = new Cl_vStudent()
    }
    set mStudent(stud)
    {
        this._mStudent = stud

    }
    get mStudent()
    {
        return this._mStudent
    }
    set vStudent(stud)
    {
        this._vStudent = stud

    }
    get vStudent()
    {
        return this._vStudent
    }
    set mCourse(cour)
    {
        this._mCourse = cour
    }
    get mCourse()
    {
        return this._mCourse
    }
    set vCourse(cour)
    {
        this._vCourse = cour
    }
    get vMateria()
    {
        return this._vCourse
    }
    procesar(){
        consola_salida.innerHTML += 
        'Nombre.....Sexo..... Nota 1.... Nota 2.... Nota 3.... Nota total....Condicion<br>' +
        '=============================================================================<br>'
        let student1 = new Cl_mStudent("Ana","F" ,15, 10, 20)
        let student2 = new Cl_mStudent("Leo","M" ,30, 25, 20)
        let student3 = new C1_mStudent("Ray","M" ,33, 27, 24)
        let student4 = new Cl_mStudent("Liz","F" ,20, 26, 32)
        this.mCourse.processStudent(student1)   
        this.vStudent.report(student1)
        this.mCourse.processStudent(student2)   
        this.vStudent.report(student2)
        this.mCourse.processStudent(student2)   
        this.vStudent.report(student2)
        this.mCourse.processStudent(student2)   
        this.vStudent.report(student2)
        consola_salida.innerHTML +=
        '==========================================================================<br><br>'
    }
}

var controler = new Cl_Controler
controler.procesar()