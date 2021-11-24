class C1_mFigura {
    constructor(cX = 0, cY = 0) {
        this.coordenadaX = cX;
        this.coordenadaY = cY;
    }
}

class C1_mCirculo extends C1_mFigura {
    constructor(cX, cY, r = 0) {
        super(cX, cY);
        this.radio = r;
    }

    area() {
        let area;
        area = this.radio * Math.PI;
        return area.toFixed(3);
    }

    perimetro() {
        let perimetro;
        perimetro = 2 * this.radio * Math.PI;
        return perimetro.toFixed(3);
    }
}

class C1_mAsignaciones {
    constructor() {
        this.circulos = [];
    }

    includeCirculo(c) {
        this.circulos.push(c);
    }

    deleteCirculo(pos) {
        if (pos >= 0 && pos < this.circulos.length) this.circulos.splice(pos, 1);
    }

    infoCirculo() {
        let info = [];
        for (let e of this.circulos)
            info.push([
                e.coordenadaX,
                e.coordenadaY,
                e.radio,
                e.area(),
                e.perimetro()
            ]);
        return info;
    }
}

class C1_vAsignaciones {
    limpiarPantalla() {
        consola_salida.innerHTML = '';
    }

    reportar(req) {
        this.limpiarPantalla();
        consola_salida.innerHTML =
            '<br><br><b>Coordenada X ------ Coordenada Y ------- Radio ------ Área ------ perimetro</b><br><br>';
        for (let e in req)
            consola_salida.innerHTML +=
            `${req[e][0].toString().padEnd(25, '.')}` +
            `${req[e][1].toString().padEnd(18, '.')}` +
            `${req[e][2].toString().padEnd(10, '.')}` +
            `${req[e][3].toString().padEnd(10, '.')}` +
            `${req[e][4].toString().padStart(10, '.')}<br>`;
    }
}

class C1_controler {
    constructor() {
        this.mAsignaciones = new C1_mAsignaciones();
        this.vAsignaciones = new C1_vAsignaciones();
    }

    init() {
        this.mAsignaciones.includeCirculo(new C1_mCirculo(2, 3, 1));
        this.mAsignaciones.includeCirculo(new C1_mCirculo(3, 2, 2));
        this.mAsignaciones.includeCirculo(new C1_mCirculo(2, 6, 9));
        this.mAsignaciones.includeCirculo(new C1_mCirculo(4, 2, 7));
    }

    add() {
        let cx = window.prompt('Ingrese coordenada x'),
            cy = window.prompt('Ingrese coordenada y'),
            r = window.prompt('Ingrese el radio');

        let circulo = new C1_mCirculo(cx, cy, r);
        this.mAsignaciones.includeCirculo(circulo);
    }

    delete() {
        let pos = window.prompt('Ingrese posición del circulo a remover');

        if (pos !== '') {
            this.mAsignaciones.deleteCirculo(parseInt(pos) - 1);
        }
    }

    report() {
        let rep = this.mAsignaciones.infoCirculo();
        this.vAsignaciones.reportar(rep);
    }
}

const controler = new C1_controler();
controler.init();

document.getElementById('btAddCircle').onclick = () => {
    controler.add();
};
document.getElementById('btDelCircle').onclick = () => {
    controler.delete();
};
document.getElementById('btReport').onclick = () => {
    controler.report();
};