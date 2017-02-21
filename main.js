if (window.Worker) { // Check if Browser supports the Worker api.
	window.worker=function(url,recieve){
		this.worker = new Worker(url||"");
		this.worker.onmessage = function(e){
			this.recieve(e.data);
		}
		this.worker.recieve = recieve;
	}
	window.worker.prototype=Object.assign(Worker.prototype,{
		send(data){
			this.worker.postMessage(data);
		},
	});
}
