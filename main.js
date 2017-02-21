var messages = {};
function rp(){
  var o = "";
  for(var i = 0;i<20;i++){
    o+=String.fromCharCode(Math.round(Math.random()*2200)+34);
  }
  if(Object.keys(messages).includes(o))return rp();
  messages[o]=null;
  return o;
}
if (window.Worker) { // Check if Browser supports the Worker api.
	window.worker=function(url,recieve){
    this.recievePos = rp();
		this.worker = new Worker(url||"");
		this.worker.onmessage = function(e){
			messages[this.recievePos](e.data);
		}
		messages[this.recievePos] = recieve;
	}
	window.worker.prototype=Object.assign(Worker.prototype,{
		send(data){
			this.worker.postMessage(data);
		},
	});
}
