function tr(){
    //ورودی
    var n=document.getElementById("txt").value;
    //کد برنامه

    //var tarjome ="کلمه مورد نظر وجود ندارد";
    //if (n=="hello")
    //tarjome=" سلام"
    //if (n=="hi")
    //tarjome=" سلام"
    //if (n=="nice")
    //tarjome="خوب"
    //if (n=="goodby" || n=="by")
    //tarjome="خدافظ"
    //if (n=="yello")
    //tarjome="زرد"
    //if (n=="green")
    //tarjome="سبز"
    //if (n=="red")
    //tarjome="قرمز"
    //if (n=="good")
    //tarjome="عالی"
    //if (n=="home")
    //tarjome="خانه"
    //if (n=="left")
    //tarjome="چپ"

    switch(n){
        case "hello":tarjome="سلام";break;
        case "":tarjome="چیزی وارد نشده است";
    }
    //خروجی
    document.getElementById("out").value=tarjome;
}