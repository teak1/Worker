var w = new Worker("worker.js");

w.onmessage = function(e){
  result.textContent=e.data;
  console.log("Message received");
}
