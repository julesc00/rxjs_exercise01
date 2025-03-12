const { Observable} = require('rxjs');

const observable = new Observable(subscriber => {
  subscriber.next(10)
  subscriber.next(20)
  subscriber.next(30)
});


const observer = {
  next: (value) => { console.log('Observer got value:', value) },
  error: (err) => { console.log('Observer got error:', err) },
  complete: (value) => { console.log('Observer complete:', value) },
}

// Connect them, to run it `node index`
observable.subscribe(observer)