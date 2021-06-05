function playgame(){
    let range = parseInt(prompt("Trò chơi đoán số từ 0 - nhập số bạn muốn chơi"));

    let value = parseInt(prompt("Nhập vào số muốn đoán "));

    let numberrandom = "";

    if(range)
    {
        numberrandom = Math.floor(Math.random() * range);
        if(numberrandom == value){
            alert("Chúc mừng! Bạn đã đoán đúng");
        }else{
            while(numberrandom != value){
                alert("Bạn đã đoán sai, số đúng là: " + numberrandom);
                value = parseInt(prompt("Nhập vào số muốn đoán "));
            }
            alert("Chúc mừng! Bạn đã đoán đúng");
        }
    }
}