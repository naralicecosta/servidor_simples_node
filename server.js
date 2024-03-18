const fastify = require('fastify');

const app = fastify();

//pegar o cardápio
app.get('/', async (request, reply) => {
    console.log('Esse é um parametro de consulta: ', request.query);
    return reply.status(200).send({pratos: [] });
})

//criar um novo prato
app.post('/', async (request, reply) => {
    console.log('Esse é o corpo da requisição: ', request.body);
    return reply.status(201).send('prato criado. ')
})

//atualizar as informações de um prato do restaurante
app.put('/:id', async (request, reply) => {
    console.log('Esse é o parametro de rota: ', request.params);
    console.log('Esse é o corpo da requisição: ', request.body);
    return reply.status(200).send('Atualizando. ')
})

//deletar um prato
app.delete('/:id', async(request, reply) => {
    console.log("Esse é o parametro de rota", request.params)
    return reply.status(2024).send()
})




app.listen({
    port: 3333
}).then(() => console.log('O servidor está rodando na porta 3333!'))