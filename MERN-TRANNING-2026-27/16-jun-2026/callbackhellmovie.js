// today Task
// Array of movies 5
// movieid, moviename, type, actorname 
//  1 function get movie(id) => will return moviename, time 6 Second 
//  2 function getcinema(moviename) => return 4 names of cinema halls, time 5 second 
//  3 function gettickets(cinemaname) => return ticketprice{premium 400rs, diamond 300rs, gold 200rs }
//  4 displayticket => it will simply print the ticket
let movies = [
    {
        movieId: 101,
        movieName: 'Salar',
        type: 'Action',
        actorName: 'Prabash'
    },
     {
        movieId: 102,
        movieName: 'Housefull',
        type: 'Comedy',
        actorName: 'Akshay kumar'
    },
     {
        movieId: 103,
        movieName: 'Dhurandhar',
        type: 'Action',
        actorName: 'Ranveer Singh'
    },
     {
        movieId: 104,
        movieName: 'Aashiqui 2',
        type: 'Romantic',
        actorName: 'Aditya rao'
    },
     {
        movieId: 105,
        movieName: 'Kanchana',
        type: 'Horror',
        actorName: 'Shiva'
    }
]
function getmovie(id, callback) {
    setTimeout(() => {
       let mov = movies.find((movie) => movie.movieId === id)
       callback(mov)
    }, 6000)
}
function getcinema(movieName, callback) {
    setTimeout(() => {
        let cinemaHall = ['PVR Cinema', 'Gaur Cinema', 'RSP Cinema', 'GKP Cinema']
        callback(cinemaHall)
    }, 5000)
    
}
function getTicket(cinemaHall, callback) {
    setTimeout(() => {
        let ticket = {
            Premium: 400,
            Diamond: 300,
            Gold: 200
        }
        callback(ticket)
    }, 3000)
}
getmovie(102, (mov) => {
    console.log(mov)
    getcinema(mov.movieName, (cinemaHall) => {
        console.log(cinemaHall);
        getTicket(cinemaHall[0], (ticket) => {
            console.log(ticket)
        })
    })
})