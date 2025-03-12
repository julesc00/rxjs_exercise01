# rxjs Tutorial
[https://youtu.be/tGWBy6Vqq9w](https://youtu.be/tGWBy6Vqq9w)  
[https://youtu.be/Byttv3YpjQk](https://youtu.be/Byttv3YpjQk)

## Most Common Used Operators
Operators operate on stream emissions, not the values themselves.
- map
- filter
- tap - For debugging `tap(x => console.log(x))`
- switchMap - Allows us to switch from one stream to another stream.
- concatMap - Creates an orderly queue, it waits until the previous stream finished, then goes onto the next one.
- mergeMap - Similar to concatMap, except that this tries to subscribe all observables at once, let's say asynchronously. 
- combineLatest - It is not within pipe(), it creates a new stream from scratch.  
  It takes the last emissions from its input streams and creates a new one, waits until the last returned values and emits 
  them all together.
