function diamond(number){
    //segitiga atas
    for(let i = 0; i < number; i++){
        let tem = ''
        //segitiga kiri
        for(let j = 0; j < number; j++){
            if(j === number - (i+1)){
                tem += '$'
            }else{
                tem += ' '
            }
        }
        //segitiga kanan
        for(let k = number; k < number*2; k++){
            if(i+number === k+1){
                tem += '$'
            }else{
                tem += ' '
            }
        }
        console.log(tem);
    }
    // segitiga bawah
    for(let i = 1; i < number; i++){
        let tem = ''
        // segitiga kiri
        for(let j = 0; j < number; j++){
            if(i === j){
                tem += '$'
            }else{
                tem += ' '
            }
        }
        // segitiga kanan
        for(let k = number*2-2; k > number; k--){
            if(i+number === k){
                tem += '$'
            }else{
                tem += ' '
            }
        }
        console.log(tem);
    }
}

diamond(6)

//    $   
//   $ $
//  $   $  
// $     $
//  $   $
//   $ $  
//    $ 
