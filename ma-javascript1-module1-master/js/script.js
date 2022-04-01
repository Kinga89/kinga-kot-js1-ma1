const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


//Question 1
const cat = complain();

function complain() {
    console.log("Meow!");
}


//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


//Question 3
heading.style.fontSize = "2em";


//Question 4
heading.className = "subheading";

//Question 5
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};


//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += `<p>New paragraph</p>`;

resultsContainer.style.backgroundColor = "yellow";


//Question 7
function newList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
};

newList(cats);


//Question 8
const container = document.querySelector(".cat-container");

let allCats = "";


function createCats(cats) {

    for (let i = 0; i < cats.length; i++) {
        let catAge = "";
        if (cats[i].age) {
            catAge = cats[i].age;
        } else {
            catAge = "Age unknown";
        }

        allCats += `<div> 
        <h5> ${cats[i].name} </h5>
        <p> ${catAge} </p>
        </div>`;
    }

    return allCats;
};

const newCatList = createCats(cats);
console.log(newCatList);

container.innerHTML = newCatList;


