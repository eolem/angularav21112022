function getTodo(id) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            const todo = {
                id,
                title: `The Title id: ${id}`,
                completed: true
            }
            if(id==0){
                reject({err:`Erreur : ${id}`})
            }
            else{

                resolve(todo)
            }
        }, 1000)
    })

    return p
}



// const pTodo = getTodo(0);
// pTodo
//     .then(todo => {
//         console.log(todo)
//         return getTodo(todo.id + 1)
//     })
//     .then(todo => {
//         console.log(todo)
//         return getTodo(todo.id + 1)
//     })
//     .then(todo => {
//         console.log(todo)
//         return getTodo(todo.id + 1)
//     })
//     .then(todo => {
//         console.log(todo)
//     })
//     .catch(err=>console.log(err))

// const pTodo1 = getTodo(1);
// const pTodo2 = getTodo(2);
// const pTodo3 = getTodo(3);
// const pTodo4 = getTodo(4);

// Promise.all([pTodo1,pTodo2,pTodo3,pTodo4]).then(arr => {
//     console.log(arr)
// })

async function main(){
    const todo1 = await getTodo(1);
    console.log(todo1)
    const todo2 = await getTodo(todo1.id+1);
    console.log(todo2)
    const todo3 = await getTodo(todo2.id+1);
    console.log(todo3)
    const todo4 = await getTodo(todo3.id+1);
    console.log(todo4)
}

main()