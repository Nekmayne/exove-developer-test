const list = [
  "BOAT",
  "Locomotive",
  "Poet",
  "Accelerate",
  "GOLF",
  "ACCIDENTAL",
  "Submarine",
];

console.log(list.sort);

const sortStrings = (array) => {
  array.sort((a, b) => {
    // compares ASCII codes of 2 elements at 3rd letter
    if (a.charCodeAt(2) !== b.charCodeAt(2)) {
      // if different, returns the difference of ASCII codes which decides the order of them
      return a.charCodeAt(2) - b.charCodeAt(2);
      // checks the 2nd letter if the ASCII codes were equal in the first check
    } else if (a.charCodeAt(1) !== b.charCodeAt(1)) {
      return a.charCodeAt(1) - b.charCodeAt(1);
    } else {
      // checks the first letter if the ASCII codes were equal in the second check
      return a.charCodeAt(0) - b.charCodeAt(0);
    }
  });
  return array;
};

console.log(sortStrings(list));
