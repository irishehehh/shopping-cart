import express ,{Application} from 'express'
import { PHONES } from './data/phone';

const app:Application = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-methods', 'GET,POST,PUT,DELETE,OPTIONS');
  next();
});

app.get('/phones',(req,res,next)=>{
  res.send(PHONES)

})

app.listen(8080,()=>{
  console.log('listening on port 8080');
  
})
