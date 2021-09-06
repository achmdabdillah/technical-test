const cetakGambar = function(n) {
    if ( n%2 === 0 ) {
        console.log('Angka harus ganjil!!')
    } else {
        for ( let row = n; row > 0; row-- ) {
            let s = '';
            
            for ( let col = n; col > 0; col-- ) {
                if ( col == n || col == 1 ) {
                    s += '* ';
                }
                else if ( row%2 == 0 ){
                    s += '= ';
                }
                else {
                    s += '* ';
                }
            }
            console.log(s);
        }
    }
}