const { Observable } = require("rxjs");
const {
  map,
  pluck ,
  filter,
} = require("rxjs/operators");

const users = {
  data: [
    {
      status: "inactive",
      age: 5
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
      age: 17
    },
    {
      status: "active",
      age: 5
    },
    {
      status: "active",
      age: 4
    },
  ]
}

const users2 = {
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
      age: 18
    },
    {
      status: "active",
      age: 31
    },
    {
      status: "active",
      age: 4
    },
  ]
}

const observable = new Observable(subscriber => {
  subscriber.next(users2)
  subscriber.complete()
  subscriber.next(users2)
}).pipe(
  pluck("data"),  // pluck gets that piece of data from the object and returns it.
  filter(value => value.length >= 5),  // filter takes a callback function.
  map(value => {
    // console.log("[INFO] Inside of second operator map:", value)
    return value.filter(user => user.status === "active")
  }),
  map(value => {
    // console.log("[INFO] Inside of third operator map:", value)  // Get average age
    return value.reduce((sum, user) => sum + user.age, 0)  / value.length  // 0 is initial value of the sum
  }),
  map(value => {
    // console.log("[INFO] Inside of fourth operator map:", value)  // Get average age
    if(value < 18) throw new Error("[ERROR] Average age is too young.")
    else return value;
  }),
)

const observer = {
  next: (value) => { console.log("Observer got value:", value) },
  error: (err) => { console.log("Observer got error:", err) },
  complete: (value) => { console.log("Observer complete.") },
}

// Connect them, to run it `node index`
observable.subscribe(observer)

/*
* Operators
*
* */