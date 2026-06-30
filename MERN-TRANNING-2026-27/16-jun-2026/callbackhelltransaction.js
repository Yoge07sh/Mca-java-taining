// HW task
// users = [{userId, userName, transactionId: 'tr123467' * 10 user}]
// let transaction [{ transactionId: 'tr123467', product: book, amount: 600}]
// getUser(Id) => user  => 5 second
// gettransaction(user.transactionId)  => 5 second
// displayTransactionDetails
let users = [
    {
        userId: 'ram01@yopmail.com',
        userName: 'Ram',
        transactionId: 'tr1234'    
    },
    {
        userId: 'shyam02@yopmail.com',
        userName: 'Shyam',
        transactionId: 'tr4321'    
    },
    {
        userId: 'shivam03@yopmail.com',
        userName: 'Shivam',
        transactionId: 'tr4567'    
    },
    {
        userId: 'ashish04@yopmail.com',
        userName: 'Ashish',
        transactionId: 'tr7654'    
    },
    {
        userId: 'sagar05@yopmail.com',
        userName: 'Sagar',
        transactionId: 'tr9009'    
    },
    {
        userId: 'vansi06@yopmail.com',
        userName: 'Vansi',
        transactionId: 'tr9898'    
    },
    {
        userId: 'sourav07@yopmail.com',
        userName: 'Sourav',
        transactionId: 'tr7890'    
    },
    {
        userId: 'harshit08@yopmail.com',
        userName: 'Harshit',
        transactionId: 'tr0098'    
    },
    {
        userId: 'ayush09@yopmail.com',
        userName: 'Ayush',
        transactionId: 'tr6700'    
    },
    {
        userId: 'yogesh10@yopmail.com',
        userName: 'Yogesh',
        transactionId: 'tr1001'  
    },

]
let transactions = [
    {
        transactionId: 'tr1234',
        product: 'book',
        amount: 6000
    },
    {
        transactionId: 'tr4567',
        product: 'Jacket',
        amount: 1500
    },
    {
        transactionId: 'tr1234',
        product: 'Fan',
        amount: 2500
    },
    {
        transactionId: 'tr9898',
        product: 'Laptop',
        amount: 30000
    },
    {
        transactionId: 'tr9009',
        product: 'Watch',
        amount: 1000
    },
    {
        transactionId: 'tr7890',
        product: 'Speaker',
        amount: 5000
    },
    {
        transactionId: 'tr1001',
        product: 'TV',
        amount: 20000
    },
    {
        transactionId: 'tr7654',
        product: 'Clothes',
        amount: 2200
    },
    {
        transactionId: 'tr4321',
        product: 'Shoes',
        amount: 2000
    },
    {
        transactionId: 'tr4567',
        product: 'SmartPhone',
        amount: 10000
    },
]
function getUser(id, callback) {
    setTimeout(() => {
        let user = users.find((user) => user.userId === id)
        callback(user)
    }, 5000)
}
function getTransaction(transactionId, callback) {
    setTimeout(() => {
        let transaction = transactions.find((transaction) => transaction.transactionId === transactionId)
        callback(transaction)
    }, 5000)
}
getUser('ram01@yopmail.com', (user) => {
    console.log("User Details = ",user)
    getTransaction(user.transactionId, (transaction) => {
        console.log("Transaction Details = ",transaction)
    })
})