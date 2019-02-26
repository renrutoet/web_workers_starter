self.addEventListener('message',function(event){
    console.log(event);
    if(event.data === 'do some work'){
        console.log("working");
        var count = 0;
        for (let index = 0; index < 100000; index++) {
            count += index;  
        }
        self.postMessage({message:count});
    }
    console.log(event.data);
});