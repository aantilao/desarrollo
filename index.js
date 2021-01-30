const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('PORFAVOR INGRESAR A: localhost:3000//fibonacci/numero')
})
app.get('/fibonacci/:number', function(req, res) {
    console.log(req.params.number);
    var a = 1;
    var total=0;
    var temp;
    var num = req.params.number;
    if(Math.sign(num) == 1) {
        var promise = new Promise ((resolve, reject) => {
            while(num-1 > 0) {
                temp= a;
                a+= total;
                total = temp;
                num-= 1;
                console.log(total);
            }
            res.send({"number":total});
        });
    } else {
        res.send('solo se aceptan numeros positivos sin incluis el 0');
    }
    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})