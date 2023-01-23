const mongoose = require("mongoose");

const connectToDb = () => {
mongoose.connect(
    "mongodb+srv://root:admim@listadetarefas.a3vxwnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
//Para verificar erro de conexao
.then(()=> console.log("MongoDB Atlas Conectado!"))
 .catch((err) => console.log(err))
};

module.exports = connectToDb;