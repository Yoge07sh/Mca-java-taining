let users = [ 
    {
        userId: '101',
        userName: 'raja@yopmail.com',
    },
     {
        userId: '102',
        userName: 'sohan@yopmail.com',
    },
     {
        userId: '103',
        userName: 'ram@yopmail.com',
    },
     {
        userId: '104',
        userName: 'rajan@yopmail.com',
    },
     {
        userId: '105',
        userName: 'arun@yopmail.com',
    }
]
function getUser(Id, callback) { // will return the user in 5 second
    setTimeout(() => {
        let user = users.find((user) => user.userId === Id)
        callback(user)
    }, 5000)
}
function getRepository(userName, callback) { // return list of repo, it will take 3 second
    setTimeout(() => {
    let repos = ['R1', 'R2', 'R3', 'R4']
    callback(repos)
    }, 3000)
    
}
function getCommits(Repos, callback) { // return list of commit it will take 2 second
    setTimeout(() => {
    let commits = ['C1', 'C2', 'C3', 'C4']   
    callback(commits) 
    }, 2000)
}
getUser('101', (user) => {
    console.log(user)
    getRepository(user.userName, (repos) => {
        console.log(repos)
        getCommits(repos[1], (commits) => {
            console.log(commits)
        })
    })
})


