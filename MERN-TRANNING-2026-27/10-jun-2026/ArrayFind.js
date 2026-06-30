// find 

let transactions = [
    {
        transactionid: 't001',
        amount: 1000,
        userid: 'user@yopmail001',
        date: '10-jun-26'
    },
    {
        transactionid: 't002',
        amount: 2000,
        userid: 'user@yopmail002',
        date: '11-jun-26'
    },
    {
        transactionid: 't003',
        amount: 3000,
        userid: 'user@yopmail003',
        date: '12-jun-26'
    },
    {
        transactionid: 't004',
        amount: 4000,
        userid: 'user@yopmail004',
        date: '13-jun-26'
    }
]
let Transaction = transactions.find((transaction) => transaction.userid == 'user@yopmail003')
console.log(Transaction)