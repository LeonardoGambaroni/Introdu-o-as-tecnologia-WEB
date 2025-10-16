import express, {Request, Response} from "express";
import bodyParser from "body-parser";

const app = express();
const port: number = 3000;

app.use(bodyParser.json());

//Rota default para testes...
app.get("/", (req: Request, res: Response) => {
    res.send("Servidor web beckend rodando...");
});

app.post("/mostrarRequisicao", (req: Request, res: Response) => {
    const dadosRecebidos = req.body;
    res.json({
        mensagem: "Dados recebidos com sucesso...",
        dadosRecebidos
    });
});

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});

//Desafio: Criar um script chamado clean, qunado for executado pelo npm run clean, deverá excluir o diretorio dist.