//=====================Bài 1===============
var i = 0;
var tichluy = 0;
var kq = 0
while (tichluy <= 1000) {
    tichluy += i;
    kq = i;
    i++;
}
document.getElementById("kq1").innerHTML = kq;

//==================Bài 2====================
var tinhTong;
document.getElementById("btn-tinh1").onclick = function(){
    var x = document.getElementById("txtX").value;
    var n = document.getElementById("txtN").value;
    tinhTong = 0;
    tinh1(x, n,);
    document.getElementById("kq2").innerHTML = tinhTong;
}
function tinh1 (x, n){
    for(var i = 1; i <= n; i++){
        tinhTong += Math.pow(x, i);
    }
}

//=================== Bài 3====================
document.getElementById("btn-tinh2").onclick = function(){
    var n = document.getElementById("txtN2").value;
    var kq3 = 1;
    for (var i = 1; i <=n; i++){
        kq3 = kq3*i;
    }
    document.getElementById("kq3").innerHTML = kq3;
}
//====================Bài 4====================
document.getElementById("btn-taoDiv").onclick = function(){
    for( var i = 1; i <=10; i++){
        var btn = document.createElement("div");
        btn.innerHTML = "the div thu " + i;
        
        if (i % 2 ===0){
            btn.classList.add("classChan");
        } else {
            btn.classList.add("classLe");
        }
        document.getElementById("taoThe").appendChild(btn);
    }
    
}
