"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
//Rota default para testes...
app.get("/", (req, res) => {
    res.send("Servidor web beckend rodando...");
});
app.post("/mostrarRequisicao", (req, res) => {
    const dadosRecebidos = req.body;
    res.json({
        mensagem: "Dados recebidos com sucesso...",
        dadosRecebidos
    });
});
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
//Desafio: Criar um script chamado clean, qunado for executado pelo npm run clean, deverá excluir o diretorio dist.
