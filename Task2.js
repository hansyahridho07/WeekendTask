function convertWeight(summation, unitWeight){
    let kata = ''
    let tamp = []
    let tmp = []
    
    //memisah angka dengan berat
    for(let i = 0; i < summation.length; i++){
        if(summation[i] !== ' ' && summation[i] !== '+'){
            kata+=summation[i]
        }
        if(summation[i] === ' ' && kata){
            tmp.push(kata)
            kata = ''
        }
        if(summation[i] === '+' || i == summation.length-1){
            if(i == summation.length-1 || summation[i+1] !== ' '){
                tmp.push(kata)
            }
            if(summation)
            tamp.push(tmp)
            tmp = []
            kata = ''
        }
    }

    //satuan berat
    let berat = ['ton', 'kw', '-', 'kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg']
    let total = 0

    //menghitung  berat
    for(let i = 0; i < tamp.length; i++){
        let posisiAwal = 0
        let posisiTujuan = 0
        let angka = 0
        let satuan = tamp[i][1]
        if(satuan === 'ons'){                   //merubah ons menjadi hg (ons === hg)
            satuan = 'hg'
        }
        if(satuan  === 'kwintal'){
            satuan ='kw'
        }
        for (let j = 0; j < berat.length; j++) {
            if(satuan === berat[j]){            //mencari posisi dari berat
                posisiAwal = j+1
            }
            if(unitWeight === berat[j]){        //mencari posisi tujuan
                posisiTujuan = j+1
            }
        }
        let hasil = posisiAwal - posisiTujuan   //hitung jumlah tujuan naik atau turun
        if(hasil < 0){                          // jika posisi tujuan turun
            angka = Math.pow(10, (hasil * -1))  //perkalian pangkat
            total += angka * tamp[i][0]         //jumlah 
        }else if(hasil === 0){                  //jika posisi tujuan tetap
            total += Number(tamp[i][0])
        }else{                                  //jika posisi tujuan naik
            angka = Math.pow(10, hasil)         //perkalian pangkat
            hasil = hasil / angka               //hitung jumlah posisi naik
            total += hasil * tamp[i][0]
        }
    }
    return `${total} ${unitWeight}`
}

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg'));//1201 kg
console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')); //1201000 g
console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg