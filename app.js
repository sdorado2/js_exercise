function loopOnce() {
  for (let index = 0; index <= 20; index++) {
    console.log(index);
  }
}

// loopOnce();

// Get Even

function getEven() {
  for (let index = 0; index <= 200; index++) {
    if (index % 2 === 0) {
      console.log(index);
    }
  }
}

// getEven();

// Fizz Buzz

let threeFive = () => {
  for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log(index, "FizzBuzz");
    } else if (index % 3 === 0) {
      console.log(index, "Fizz");
    } else if (index % 5 === 0) {
      console.log(index, "Buzz");
    }
  }
};

// threeFive();

// Wild Wild Life

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// 1.
// plantee[2] = 5001;
// console.log (plantee);

// 2.
// wolfy[3] = 'Gotham City';
// console.log(wolfy);

// 3.
// dart[4] = 'Hawkins';
// console.log(dart);

// 4.
// wolfy[0] = 'Gameboy';
// console.log (wolfy);

// Yell at the Ninja Turtles

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michealangelo"];

// for (const element of ninjaTurtles) {
//   console.log(element.toUpperCase());
// }

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

// console.log(favMovies.indexOf('Titanic'));
// console.log(favMovies.sort());
// console.log(favMovies);
// console.log(favMovies.pop());
// console.log(favMovies.push('Gardians of the Galaxy'));
// console.log(favMovies);
// console.log(favMovies.reverse());
// console.log(favMovies.shift());
// console.log(favMovies.unshift());
// console.log(favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avart'));
// console.log(favMovies);
// console.log(favMovies.slice(favMovies.length /2));
// let remains = favMovies.slice(favMovies.length / 2);
// console.log(remains);
// console.log(favMovies.indexOf('Fast and Furious'));

// Where is Waldo

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

// console.log(whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'), 1,));
// console.log(whereIsWaldo);
// console.log(whereIsWaldo[1][2] = 'No One');
// console.log(whereIsWaldo[2][1][1]);

//Excited Kitten

function petMe() {
  for (let index = 1; index <= 20; index++) {
    if (index % 2 !== 0) {
      console.log("Love me, pet me! HSSSSSS!");
    } else if (index % 2 === 0) {
      let arr = [
        "...human...why you taking pictures of me?...",
        "...the catnip made me do it...",
        "...why does the red dot always get away...",
      ];
      console.log(arr[Math.floor(Math.random() * 3)]);
    }
  }
}

// petMe();

//Find the Median

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

//   console.log(nums.sort());
//   console.log(nums[Math.floor(nums.length / 2)]);
