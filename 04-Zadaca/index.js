import  express  from "express";
import { v4 as uuidv4 } from "uuid";
const port = 4123
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Prvi zadatak

 let Obavijesti = [];

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(port, () => {
    console.log(`Server is working ${4123}`)
  })


  app.get("/vratiObavijesti", (req, res) => {
    let Obavijesti_naziv_datum = Obavijesti.map((element) => {
        return {
            naziv: element.naziv,
            datum: element.datum,
        };
    });
    res.json(Obavijesti_naziv_datum);
});

  app.post("/dodajObavijest", (req, res) => {
    let Obavijest = {
        naziv: "Rok za predaju zadace",
        sadrzaj: "Rok za predaju zadace je 8.11.",
        datum: new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0].replace('T',' '),
        id: uuidv4(),
    };
    Obavijesti.push(Obavijest);
    res.send(Obavijest);
});

app.get("/vratiObavijest/:uuid", (req, res) => {
    let uuid = req.params.uuid;
    let Obavijest = Obavijesti.find((element) => {
        return element.id == uuid;
    });
    Obavijest = {
        naziv: Obavijest.naziv,
        sadrzaj: Obavijest.sadrzaj,
        datum: Obavijest.datum,
    };
    res.json(Obavijest);
});

app.patch("/izmjeniObavijest/:uuid", (req, res) => {
    let uuid = req.params.uuid;
    console.log(req.body);
    let sadrzaj = req.body.sadrzaj;
    let Obavijest = Obavijesti.find((element) => {
        return element.id == uuid;
    });
    Obavijest.sadrzaj = sadrzaj;
    console.log(Obavijest);
    res.json(Obavijest);
});