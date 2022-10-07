
    var DvaObjekta = (objekt1, objekt2) => {

      console.log( JSON.stringify(Object.keys(objekt1)) === JSON.stringify(Object.keys(objekt2)) );
        
        

    };

    DvaObjekta({a:1, b:2, c:3}, {a:321, b:3, c:1});