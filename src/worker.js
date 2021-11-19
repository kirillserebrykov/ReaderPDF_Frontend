onmessage = function(e) {
   
   const result = e.data[0] * e.data[1];
   
   if (isNaN(result)) {
     
   } else {
     const workerResult = 'Result: ' + result;
     console.log('Worker: Posting message back to main script');
     postMessage(workerResult);
   }
 }