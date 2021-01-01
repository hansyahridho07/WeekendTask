function getMoneyChange(money) {
    //your code here
    
        let total = 0
        let minim = 0
        let tamp = []
        for(let key in moneyStocks){
            //cek total uang pecahan untuk kembalian
            total += Number(key) * moneyStocks[key] 
            //mencari nilai uang terkecil
            if(key == '500'){
                minim = Number(key)
            }
            //memasukan pecahan uang ke dalam array tampung
            tamp.push(key) 
        }
        //jika uang lebih kecil dari stock uang terkecil
        if(money < minim){ 
            console.log(`Maaf uang kembalian tidak cukup`);
            console.log('-----------  -----------');
        }else if(total < money){//cek uang lebih banyak dari stock uang
            console.log(`Maaf uang kembalian tidak cukup`);
            console.log('-----------  -----------');
        }else{
        //perulangan untuk pecahan tertentu dimulai dari pecahan terbesar
        for(let i = tamp.length-1; i >= 0; i--){ 
            let pecahanUang = Number(tamp[i])
            //jika uang lebih banyak sama dengan pecahan uang dan uang yang ingin di tukar dan uang tidak sama dengan 0
            if(money >= pecahanUang && money !== 0){ 
                for(let key in moneyStocks){
                    //jika uang pecahan tertentu sama dengan yang ingin digunakan & stock uang pecahan tertentu tidak sama dengan 0
                    if(key == pecahanUang && moneyStocks[key] !== 0){ 
                        let sisa = money
                        let uang = ''
                        let jumlah = 0
                        let ulang = moneyStocks[key]
                        for(let j = 0; j < ulang; j++){
                                sisa -= Number(key)
                                //jika sisa uang yang dikurang pecahan uang saat ini lebih besar sama dengan 0
                                if(sisa >= 0){ 
                                    money -= Number(key)
                                    moneyStocks[key] -= 1
                                    uang = key
                                    jumlah++
                                }
                            }
                        console.log(`${uang} ${jumlah} lembar`);
                    }
                }
            }
        }
        console.log('-----------  -----------');
        }
    }
    
    const moneyStocks = {
        100000: 1,
        50000: 2,
        20000: 4,
        10000: 5,
        5000: 5,
        1000: 10,
        500: 5
        }
    
    getMoneyChange(75000)
    getMoneyChange(190000)
    getMoneyChange(190000)
    getMoneyChange(100000)
    getMoneyChange(400)
    
    
    console.log(moneyStocks);