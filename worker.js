var myStuff = new Function("return;");
onmessage = function(e) {
  if(typeof e === "function"){
    myStuff = e;
    if(typeof myStuff === "function")suc = true;
    if(typeof myStuff != "function")suc = false;
  }else{
    suc = myStuff(e);
  }
  postMessage(suc);
}
