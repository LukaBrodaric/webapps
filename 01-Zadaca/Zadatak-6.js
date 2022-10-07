
    var Mnozi7 = (x) => {
        if (x >= 0 && x <= 1000) {
            broj = 1;
            for (let i = 7; i<x; i += 7) {
                broj *=i;
            }
            console.log(broj);
        }
    };

    Mnozi7(23);