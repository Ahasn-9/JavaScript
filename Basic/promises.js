const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise one is resolved");
    resolve();
  }, 2000);
});
promiseOne.then(() => {
  console.log("promiseOne resolved");
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ id: 1, model: "Samsung" });
    } else {
      reject({ error: "Something went wrong" });
    }
  }, 1000);
});
async function getPromiseTwo() {
  try {
    const result = await promiseTwo;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getPromiseTwo();

async function getPromise() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
}

getPromise();
