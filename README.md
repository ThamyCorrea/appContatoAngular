 # Projeto de Cadastro de Pessoas e Contatos

Este projeto é uma aplicação desenvolvida em **Angular** com um backend em **Java e Spring Boot**, que permite o cadastro de pessoas e a gestão de seus contatos (telefone, celular, e-mail e URL). A aplicação utiliza **Bootstrap** para estilização e **SCSS** para customização do layout.

## Funcionalidades
✅ Cadastro de pessoas: Nome, CEP, Endereço, Cidade, UF  
✅ Listagem de pessoas cadastradas  
✅ Edição e exclusão de pessoas  
✅ Cadastro de contatos vinculados a uma pessoa específica: TipoContato (TELEFONE, CELULAR, EMAIL, URL), Contato, e a Listagem das pessoas que gostaria de cadastrar o contato.  
✅ Listagem e exclusão de contatos  
 

## 🛠 Tecnologias Utilizadas
### **Frontend**
- Angular
- TypeScript
- Bootstrap
- SCSS

### **Backend**
- Java
- Spring Boot
- Swagger (para documentação da API)
- H2

## 🔧 Como Rodar o Projeto
### **1️⃣ Clonar o Repositório**
```sh
git clone https://github.com/ThamyCorrea/appContatoAngular.git
```

### **2️⃣ Configurar e Rodar o Backend**
1. Configurar as credenciais do banco de dados no `application.properties`
2. Compilar e rodar o backend com:
```sh
mvn spring-boot:run
```

### **3️⃣ Rodar o Frontend**
1. Instalar as dependências:
```sh
npm install
```
2. Iniciar o servidor Angular:
```sh
ng serve
```

A aplicação estará disponível em `http://localhost:4200/`

## 📌 Endpoints da API
### Pessoa
- **`GET http://localhost:4200/listar-pessoas`** → Lista todas as pessoas
- **`POST http://localhost:4200/cadastrar-pessoa)`** → Cadastra uma nova pessoa
- **`PUT /api/pessoas/{id}`** → Atualiza uma pessoa
- **`DELETE não tem paginação `** → Remove uma pessoa

### Contato
- **`GET http://localhost:4200/listar-pessoas`** → Lista todos contatos
- **`POST http://localhost:4200/cadastrar-contato`** → Cadastra uma nova pessoa
- **`PUT http://localhost:4200/editar-contato/{id}`** → Em contrução
- **`DELETE não tem paginação`** → Remove uma pessoa


## Melhorias Futuras
🔹 Implementação de autenticação e autorização  
🔹 Paginação na listagem de pessoas  
🔹 Contruir a lógica para editar o contato  
🔹 Aplicar a opção do tema Dark nos formulários  
🔹 Criar um layout com cores mais harmoniozas  
🔹 Contruir a lógica para editar o contato  


## Aceito sugestões de melhorias 🤩

Para contribuir, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push -u origin <nome_branch>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🚩Autor

Desenvolvido por Thamiris de Oliveira Corrêa

- GitHub: https://github.com/ThamyCorrea
- LinkedIn: https://www.linkedin.com/in/thamiris-correa/

---
💡 *Projeto criado para estudo e prática de Angular, Java e banco de dados*



