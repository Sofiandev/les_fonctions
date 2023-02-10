//---------------------------------Fonctions------------------------------------------------

function canDrive(age, pays) {
  if ((age >= 18 && pays === "FR") || (age >= 16 && pays === "USA")) {
    return true;
  } else {
    return false;
  }
}

console.log(canDrive(19, "USA"));

function greeting(name) {
  console.log(`Bonjour ${name}`);
}

greeting("sofian");
greeting("charline");

const a = {
  lastname: "Sofian",
  firstname: "Achbabi",
  fullname: function () {
    // console.log(this);  // affiche l'objet dans lequel on est grâce à this
    console.log(`${this.lastname} ${this.firstname}`);
  },
};

a.fullname();
console.log("hello".toUpperCase());

const isPair = function (a, cb) {
  //ici cb est une fonction callback
  if (a % 2 === 0) {
    cb();
  } else {
    console.log("le nombre est impair");
  }
};

isPair(13, function () {
  console.log("le nombre est pair");
});

// on créé un nombre entre 0 et 10
// 3 essais pour deviner le nombre
//isRight(n)
//guess()

//function random number
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const solution = getRandomInt(10);

console.log(solution);

function isright(n) {
  return solution === n;
}

function guess() {
  const number = prompt("Ecrivez un nombre") * 1;
  return isright(number);
}

for (i = 0; i < 3; i++) {
  if (guess()) {
    console.log("bravo");
    break;
  } else if (i === 2) {
    console.log("vous avez perdu");
  }
}

function isPremier(n) {
  if (n < 2) {
    return false;
  }
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log("0", isPremier(0));
console.log("1", isPremier(1));
console.log("2", isPremier(2));
console.log("3", isPremier(3));
console.log("11", isPremier(11));
console.log("12", isPremier(12));
