// MOCK Exam 2 | Ex 2
// robert.jiranek@gmail.com
// 

//console.log("Exam 2 | Ex 2 | start ... ");


// TASK 1
const task1EL = document.querySelectorAll(".sample_class");
//console.log("01 - task1EL ... ");
//console.log(task1EL);

function getTag(elements) {
    const tags = [];

    for (const element of elements) {
        tags.push(element.tagName);
    }

    return tags;
}

console.log(getTag(task1EL));



// TASK 2
const task2EL = document.getElementById("sample_id");
//console.log("02 - task2EL ... ");
//console.log(task2EL);

function getClass(element) {
    const classes = [];

    for (const className of element.classList) {
        classes.push(className);
    }

    return classes;
}

console.log(getClass(task2EL));



// TASK 3
const task3EL = document.querySelectorAll(".sample_class_2 li");
//console.log("03 - task3EL ... ");
//console.log(task3EL);

function getInnerText(elements) {
    const texts = [];

    for (const element of elements) {
        texts.push(element.innerText);
    }

    return texts;
}

console.log(getInnerText(task3EL));



// TASK 4
const task4EL = document.querySelectorAll("a");
//console.log("04 - task4EL ... ");
//console.log(task4EL);

function getAddress(elements) {
    const addresses = [];

    for (const element of elements) {
        if (element.hasAttribute("href")) {
            addresses.push(element.getAttribute("href"));
        }
    }

    return addresses;
}

console.log(getAddress(task4EL));



// TASK 5
const task5EL = document.querySelector(".sample_class_3").children;
//console.log("05 - task5EL ... ");

console.log(getTag(task5EL));



//console.log("Exam 2 | Ex 2 | complette ... ");