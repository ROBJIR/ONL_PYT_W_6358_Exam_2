// MOCK Exam 2 | Ex 3
// robert.jiranek@gmail.com
// 

// console.log("Exam 2 | Ex 3 | start ... ");

const listmovies = document.getElementById("movies");

fetch("https://fer-api.coderslab.pl/v1/be-exam/movies")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("response error: " + response.status);
        }
        return response.json();
    })
    .then(function (moviesdata) {
        // console.log(moviesdata);

        moviesdata.forEach(function (addmovies) {
            const li = document.createElement("li");
            const title = document.createElement("h2");
            const year = document.createElement("h3");

            title.textContent = addmovies.title;
            year.textContent = addmovies.year;

            li.appendChild(title);
            li.appendChild(year);

            listmovies.appendChild(li);
        });
    })
    .catch(function (error) {
        console.error("error: ", error);
    });


// console.log("Exam 2 | Ex 3 | complette ... ");