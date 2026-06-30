function simpleIntrest(p, r, t) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(t<1) {
                reject("Time can't be Negative")
            } else {
                let si = (p * r * t)/100;
                resolve(si);
            }
        }, 3000)
    });
    return pr;
}
simpleIntrest(1000, 10, 2)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })

  