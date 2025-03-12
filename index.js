const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");

const users = {
  data: [
    {
      status: "inactive",
      age: 15
    },
    {
      status: "active",
      age: 18
    },
    {
      status: "active",
      age: 21
    },
    {
      status: "inactive",
      age: 1
    },
    {
      status: "active",
      age: 3
    },
    {
      status: "active",
      age: 4
    },
  ]
}

const observable = new Observable(subscriber => {
  subscriber.next(users)
}).pipe(
  map(value => {
    console.log("[INFO] Inside of first operator map:", value)
    return value.data
  }),
  map(value => {
    console.log("[INFO] Inside of second operator map:", value)
    return value.filter(user => user.status === "active")
  }),
  map(value => {
    console.log("[INFO] Inside of third operator map:", value)  // Get average age
    return value.reduce((sum, user) => sum + user.age, 0)  / value.length  // 0 is initial value of the sum
  }),
  map(value => {
    console.log("[INFO] Inside of fourth operator map:", value)  // Get average age
    if(value < 18) throw new Error("[ERROR] Average age is too young.")
    else return value;
  }),
)

const observer = {
  next: (value) => { console.log("Observer got value:", value) },
  error: (err) => { console.log("Observer got error:", err) },
  complete: (value) => { console.log("Observer complete:", value) },
}

// Connect them, to run it `node index`
observable.subscribe(observer)