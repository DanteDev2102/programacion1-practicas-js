class car
{
  constructor(brand)
  {
    this.carName = brand
  }

  present()
  {
    return "I have a " + this.carName
  }
}

class model extends car
{
  constructor(brand,mod)
  {
    super(brand)
    this.model =  mod
  }

  show()
  {
    return this.present() + ", it is a " + this.model
  }
}

const myCar = new model("Ford","Mustang")
document.getElementById("demo").innerHTML = myCar.show()