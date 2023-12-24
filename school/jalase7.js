/*alert("Welcome to \n form");*/
var n=[];
n[0]="<span>ردیف</span><span>نام</span><span>فامیل</span><span>کدملی</span><span>نمره</span>";
var j=1;
function cl(){
    var a=document.getElementById("name").value;
    var b=document.getElementById("faamil").value;
    var c=document.getElementById("code").value;
    var d=document.getElementById("num").value;
    
    /*var student=a+" "+b+" "+c+" "+d;*/
    /*var student="<span>"+a+"</span><span>"+b+"</span><span>"+c+"</span><span>"+d+"</span>";*/
    
    /*n[j++]=student;*/
    n[j++]=("<span>"+a+"</span><span>"+b+"</span><span>"+c+"</span><span>"+d+"</span>");

    var out=document.getElementById("out");
    var str="";

    for(var i=0;i<n.length;i++){
        if (i==0)
        str=str+"<p>"+n[i]+"</p>";
        else
        str=str+"<p><span>"+i+"</span>"+n[i]+"</p>";
    }

    var out=document.getElementById("out");
    out.innerHTML=str;
}
