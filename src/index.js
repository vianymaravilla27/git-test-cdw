import express  from "express"
import { graphqlHTTP } from "express-graphql";
import schema from './schema';
import { connect } from "./database";
//integrar graphql en express

const PORT  = process.env.PORT || 4000;


const app = express();
connect();
app.get('/', (req,res) =>{
    res.json({
        message: 'El servidor funciona!'
    })
});

//const schema ={};
app.use('/graphql' ,graphqlHTTP({
//2.- configurar
graphiql: true,
schema: schema,
//parte despues de mongoose
context:{
    messageId: 'test'
}
}));
//EL CONTEXT ES PARA PASAR INFORMACION ENTRE LOS RESOLVERS
//AUTENTICADO USUARIOS
//CADENA DE CONEXION
//Utilizaremos modelos

app.listen(PORT, () => {
    console.log(`el servidor esta funcionando en el puerto ${PORT} `);
})