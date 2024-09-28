fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {

        console.log(response);



    })
    .catch((err) => {
        console.log(err);

    })