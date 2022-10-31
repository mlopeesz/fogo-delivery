# Fogo Delivery 🔥

O Fogo Delivery é um projeto que envolve o desenvolvimento e integração do back-end e front-end de uma plataforma de delivery de bebidas!
Inicialmente pensado para ter as seguintes funcionalidades: 
- Ter acesso via login: tanto clientes como pessoas vendedoras, assim como a própria dona Tereza, que administra o sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;

- Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;

- Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

## Funcionalidades e Demonstração 👨‍💻
## 🚧Algumas funcionalidades ainda em desenvolvimento.🚧

### Login
É possível realizar login com validações tanto no front-end como no back-end e uso do JWT.
![1 - login](https://user-images.githubusercontent.com/87342822/196983984-b8f29827-e05c-4fc1-a7c4-65b1c67e6c51.gif)

### Cadastro
É possível realizar cadastro com validações tanto no front-end como no back-end e uso do JWT.
![2 - cadastro](https://user-images.githubusercontent.com/87342822/196984005-b3b997c5-dbda-4f74-9500-66e1c9ab732f.gif)

### Produtos
Você pode adicionar produtos ao carrinho, acompanhar o valor total e prosseguir para a tela de finalizar pedido.
![3 - produtos](https://user-images.githubusercontent.com/87342822/196984023-fa5ec483-e79e-4076-8377-5f7f110cd6c5.gif)

### Carrinho
No carrinho você pode conferir os itens do seu pedido, remover algum item ou finalizar o pedido informando os dados do endereço para a entrega.
![4 - carrinho](https://user-images.githubusercontent.com/87342822/196984045-b99932c3-12a8-49bd-b54f-6ca98f8e4a21.gif)

### Detalhe do Pedido
Na página de detalhes do pedido, você pode conferir as informações gerais do pedido e marcar o pedido como entregue.
![5 - detalhe do pedido](https://user-images.githubusercontent.com/87342822/196984061-f51f462e-4a19-4b10-a07f-bdaa7131d2cf.gif)

### Pedidos
Aqui você pode conferir todos os pedidos que foram feitos e ir para a página de detalhes de algum deles.
![6 - meus pedidos](https://user-images.githubusercontent.com/87342822/196984086-72538bcb-b4ce-4460-bd22-c7d891d88ec5.gif)

## Tecnologias Utilizadas 💻
![eer-fogodelivery](https://user-images.githubusercontent.com/87342822/195911057-1b186bb0-19df-4597-8704-a5edffd3deff.png)

### Back-end:
- NodeJS
- express
- MySQL
- Sequelize
- JWT
- md5
- dotenv
### Front-end:
- ReactJS
- SASS
- React Icons
- Axios

## Abrir e rodar o projeto 🛠
1 - Clone o projeto.   
2 - Execute `npm install` na raíz do projeto.   
3 - Não se esqueça de configurar suas variáveis de ambiente no back-end no arquivo `.env.example` e renomeá-lo para `.env`.   
4 - Execute `npm start` e as dependências do back-end e do front-end serão instaladas automaticamente.   
5 - Você pode criar uma conta nova para logar como cliente ou utilizar os já cadastrados para login:   
- Cliente:   
Email: `zebirita@email.com`   
Senha: `$#zebirita#$`   

- Vendedor:   
Email: `fulana@deliveryapp.com`   
Senha: `fulana@123`   

- Administrador:   
Email: `adm@deliveryapp.com`   
Senha: `--adm2@21!!--`   

## Pessoas Colaboradoras 👥
Projeto inicialmente idealizado e desenvolvido em grupo no curso da Trybe por:
- [Mauricio Lopes](https://github.com/mlopeesz)
- [Raffael Marinho](https://github.com/raffael-marinho)
- [Airam Toscano](https://github.com/AiramToscano)
- [Victor Martins](https://github.com/VictorMartinsDuarte)
- [Larissa Araújo](https://github.com/larissajuliavsa)

Nesse repositório pessoal, o projeto foi refeito, refatorado e repensado somente por mim para fins de aprendizado.
