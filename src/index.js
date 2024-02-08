import express, { req, res } from "express";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
const port = 3333;
const admins = [];
let nextId = 1;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`===>>>> Server start on PORT: ${port}`);
});

//---------------TESTAR SERVIDOR---------------------------------------

app.get("/", (req, res) => {
  return res.status(200).json({ sucess: true, msg: "START EXPRESS API" });
});

//---------------CRIAR USUÁRIO CRIPTOGRAFADO------------------------------------------

app.post("/signup/crypto", async (req, res) => {
  const data = req.body;
  const name = data.name;
  const email = data.email;
  const password = data.password;

  const emailAlreadyExist = admins.find((admin) => admin.email === email);

  if (emailAlreadyExist) {
    return res.status(400).json({ message: "Email já cadastrado." });
  }
  const hashPassword = await bcrypt.hash(password, 10);

  console.log(hashPassword);

  admins.push({
    id: nextId,
    name: data.name,
    email: data.email,
    password: hashPassword,
  });

  nextId++;

  res.status(201).json({ message: "Usuário cadastrado com sucesso." });
});

//------------------LISTAR USUÁRIOS CADASTRADOS----------------------------------------

app.get("/admins", (req, res) => {
  return res.status(200).json({
    message: "Lista de usuários retornada com sucesso.",
    data: admins.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    })),
  });
});

//-------------------LOGIN-------------------------------------------------------------

app.post("/login", async (req, res) => {
  const data = req.body;
  const email = data.email;
  const password = data.password;

  const user = admins.find((user) => user.email === email);
  const hashPassword = await bcrypt.hash(password, 10);
  const passwordMath = await bcrypt.compare(password, hashPassword);

  if (!passwordMath) {
    return res.status(400).json({
      message: "Senha inválida!",
    });
  }
  if (!user) {
    return res.status(400).json({
      message: "Usuário não encontrado!",
    });
  }
  res.status(200).json({
    message: "Login realizado com sucesso!",
    email,
  });
});
