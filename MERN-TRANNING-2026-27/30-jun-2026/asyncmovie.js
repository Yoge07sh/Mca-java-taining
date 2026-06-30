let movies = [
    {
        movieId: 101,
        movieName: 'Hero',
        type: 'action'
    },
    {
        movieId: 102,
        movieName: 'RamLakhan',
        type: 'action'
    },
    {
        movieId: 103,
        movieName: 'Nayak',
        type: 'Drama'
    },
    {
        movieId: 104,
        movieName: 'Iqbal',
        type: 'motivational'
    }
]
let cinemas = [
    {
        movieId: 101,
        hallName: 'Regal'
    },
    {
        movieId: 101,
        hallName: 'Maya cineplex'
    },
    {
        movieId: 102,
        hallName: 'Jublee Talkies'
    },
    {
        movieId: 102,
        hallName: 'Miraj Talkies'
    },
    {
        movieId: 102,
        hallName: 'Kamal cinema'
    }
]
function getmovie(id) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let movie = movies.find((movie) => movie.movieId === id);
            if (movie) {
                resolve(movie);
            } else {
                reject("Movie not found in database....");
            }
        }, 3000)
    });

    return pr;
}
function getCinemas(movieId) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let movieCinemas = cinemas.filter((cinema) => cinema.movieId === movieId);
            if (movieCinemas.length > 0) {
                resolve(movieCinemas);
            } else {
                reject("No cinema hall found...");
            }
        }, 3000)
    });
    return pr;
}
function getTicket(cinemaName) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cinemaName === 'Regal') {
                resolve({
                    Diamond: 600,
                    Gold: 400,
                    silver: 300
                });
            } else {
                reject("No cinema hall found in db....");
            }
        }, 3000)
    });
    return pr;
}
async function movieSummary() {
    try {
        let movie = await getmovie(101)
        let cinemas = await getCinemas(movie.movieId)
        let ticket = await getTicket(cinemas[0].hallName)
        console.log(ticket);
    } catch (err) {
        console.log(err)
    }
}
movieSummary();