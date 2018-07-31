class File{
    constructor(name,type,size,constructTime,recomposeTime){
        this.name=name;
        this.type=type;
        this.size=size;
        this.constructTime=constructTime;
        this.recomposeTime=recomposeTime;
    }
}

var mobile=new File('mobile','1','1','1000','1001');
var index.html=new File('index.html','2','2','1002','1003');

File.prototype={
    list() {
    if (mobile.type>index.html.type){
        var t=mobile.type;
        mobile.type=index.html.type;
        index.html.type=t}

   if(l.type==r.type){
       if(mobile.recomposeTime<index.html.recomposeTime){
           var t=mobile.recomposeTime;
           mobile.recomposeTime=index.html.recomposeTime;
           index.html.recomposeTime=t
    }
   }
    }

    find(name){
        for(let i=0; i<mobile.length; i++)
          if (mobile[i].toUpperCase()==NAME){
              return i;
          }
    }
}