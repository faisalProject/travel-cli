const input = require('prompt-sync')({sigint: true});
const Table = require('cli-table');

const participant = [];

const package = {
    route: [
        'Karawang-Pantai Pakis Jaya',
        'Karawang-Curug Cigentis-Gunung Sanggabuana',
        'Karawang-Candi Jiwa',
        'Karawang-Pantai Samudra'
    ],

    rates: [ 1000000, 500000, 600000, 850000 ]
}

const additionalPackage = {
    facility: [ 'Penginapan', 'Penjemputan', 'Kuliner' ],

    retes: [ 600000, 300000, 300000 ]
}

const showPackage = () => {
    console.clear();
    const packageList = new Table({
        head: ['Kode Paket', 'Rute Perjalanan', 'Minimum Peserta', 'Tarif']
    });

    packageList.push(
        ['1', 'Karawang - Pantai Pakis Jaya', '6 Orang', 'Rp. 1.000.000'],
        ['2', 'Karawang - Curug Cigentis - Gunung Sanggabuana', '6 Orang', 'Rp. 500.000'],
        ['3', 'Karawang - Candi Jiwa', '4 Orang', 'Rp. 600.000'],
        ['4', 'Karawang - Pantai Samudra ', '5 Orang', 'Rp. 850.000']
    );
    
    const additionalPackageList = new Table({
        head: ['Kode Tambahan', 'Fasilitas', 'Tarif']
    });

    additionalPackageList.push(
        ['1', 'Penginapan', 'Rp. 600.000'],
        ['2', 'Penjemputan', 'Rp. 300.000'],
        ['3', 'Kuliner', 'Rp. 300.000']
    )
    console.log('Daftar Paket:')
    console.log(packageList.toString());
    console.log('\nLayanan tambahan yang dapat ditambahkan:')
    console.log(additionalPackageList.toString());
}

const showData = () => {
    console.log('Daftar Peserta');
    const table = new Table({
        head: ['No', 'Nama Peserta', 'Paket', 'Fasilitas', 'Jumlah Tarif']
    });
    let index = 0;
    for (const i of participant) {
        index++;
        table.push([index, i.name, i.package, i.facility, `Rp. ${i.total}`])
    }

    console.log(table.toString());
}

const insertData = () => {
    console.clear();
    showPackage();

    const name = input('Nama peserta: ');
    let isPackage
    while (true) {
        isPackage = input('Pilih paket: ');
        if(isNaN(isPackage)) {
            console.error('Input paket harus angka!')
        } else if(isPackage > package.route.length || isPackage < 1 ) {
            console.log('Kode paket hanya tersedia 1 s/d 4!')
        } else {
            break;
        } 
    }
    
    let isAdditionalPackage;
    while (true) {
        isAdditionalPackage = input('Pilih Paket Tambahan: ')
        if(isNaN(isAdditionalPackage)) {
            console.error('Input paket harus angka!')
        } else if(isAdditionalPackage > additionalPackage.facility.length || isAdditionalPackage < 1) {
            console.log('Kode paket hanya tersedia 1 s/d 3!')
        } else {
           break;
        }
    }

    const getRoute = package.route[isPackage-1];
    const getFacility = additionalPackage.facility[isAdditionalPackage-1];
    const total = package.rates[isPackage-1] + additionalPackage.retes[isAdditionalPackage-1];
    participant.push({
        name: name,
        package: getRoute,
        facility: getFacility,
        total: total
    });
    console.log('Data berhasil ditambahkan!')
}

const changeData = () => {
    console.clear();
    let isNumber;
    showData();
    while (true) {
        isNumber = input('Pilih no perserta: ');
        if(participant.length < 1) {
            console.log('Data peserta masih kosong!')
            const isConfirm = input('Kembali ke menu (y/t)? ');
            if(isConfirm === 'y') {
                break
            }
        } else {
            if(isNaN(isNumber)) {
                console.error('Input harus angka!')
            } else if(isNumber > participant.length || isNumber < 1) {
                console.log(`No peserta hanya tersedia 1 s/d ${participant.length}!`)
            } else {
                break;
            }
        }
    }


    showPackage();
    console.log('Data berhasil ditemukan!')
    const table = new Table({
        head: ['No', 'Nama Peserta', 'Paket', 'Fasilitas', 'Jumlah Tarif']
    });

    table.push([isNumber, participant[isNumber-1].name, participant[isNumber-1].package, participant[isNumber-1].facility, `Rp. ${participant[isNumber-1].total}`])
    console.log(table.toString());

    const newName = input('Nama peserta baru: ');
    let isNewPackage
    while (true) {
        isNewPackage = input('Pilih paket baru: ');
        if(isNaN(isNewPackage)) {
            console.error('Input paket harus angka!')
        } else if(isNewPackage > package.route.length || isNewPackage < 1 ) {
            console.log('Kode paket hanya tersedia 1 s/d 4!')
        } else {
            break;
        } 
    }
    
    let isNewAdditionalPackage;
    while (true) {
        isNewAdditionalPackage = input('Pilih Paket Tambahan baru: ')
        if(isNaN(isNewAdditionalPackage)) {
            console.error('Input paket harus angka!')
        } else if(isNewAdditionalPackage > additionalPackage.facility.length || isNewAdditionalPackage < 1) {
            console.log('Kode paket hanya tersedia 1 s/d 3!')
        } else {
           break;
        }
    }

    const getRoute = package.route[isNewPackage-1];
    const getFacility = additionalPackage.facility[isNewAdditionalPackage-1];
    const total = package.rates[isNewPackage-1] + additionalPackage.retes[isNewAdditionalPackage-1];
    participant[isNumber-1].name = newName;
    participant[isNumber-1].package = getRoute;
    participant[isNumber-1].facility = getFacility;
    participant[isNumber-1].total = total;
    console.log('Data berhasil diubah!')
}

const searchData = () => {
    console.clear();
    showData();
    while(true) {
        const search = input('Masukkan nama peserta: ').toLowerCase();
        if(participant.length < 1) {
            console.log('Data masih kosong!');
            const isConfirm = input('Kembali ke menu (y/t)? ')
            if(isConfirm === 'y') {
                break;
            }
        } else {
            const filtered = participant.filter(word => word.name.toLowerCase().includes(search))
            const found = filtered[0];
            if(found) {
                // console.log(filtered);
                const table = new Table({
                    head: ['No', 'Nama Peserta', 'Paket', 'Fasilitas', 'Jumlah Tarif']
                });

                filtered.forEach((f, i) => {
                    table.push([i+1, f.name, f.package, f.facility, `Rp. ${f.total}`])
                })
                console.log(table.toString());
                const isConfirm = input('Kembali ke menu (y/t)? ');
                if(isConfirm === 'y') {
                    break;
                }
            } else {
                console.log('Data tidak ditemukan')
            }
        }
    }
}

const deleteData = () => {
    console.clear();
    let isNumber;
    showData();
    while(true) {
        isNumber = input('Pilih no peserta: ')
        if(participant.length < 1) {
            console.log('Data peserta masih kosong');
            const isConfirm = input('Kembali ke menu (y/t)? ')
            if(isConfirm === 'y') {
                break;
            }
        } else {
            if(isNaN(isNumber)) {
                console.error('Input harus angka!')
            } else if(isNumber > participant.length || isNumber < 1) {
                console.log(`No peserta hanya tersedia 1 s/d ${participant.length}!`)
            } else {
                break;
            }
        }
    }

    const isConfirm = input('Kamu yakin (y/t)? ');
    if(isConfirm === 't') {
        menu();
    } else {
        participant.splice(isNumber-1, 1);
        console.log('Data berhasil dihapus!')
    }
}

const menu = () => {
    let isLoop = true
    while (isLoop) {
        const menuList = ['Tampilkan peserta', 'Tambah data', 'Ubah data', 'Cari Data', 'Hapus data', 'Keluar'];
        console.log('Daftar Menu')
        menuList.forEach((m, i) => {
            console.log(`${i+1}. ${m}`)
        });
    
        const isMenu = input('Pilih menu: ')
        switch (parseInt(isMenu)) {
            case 1:
                console.clear();
                showData();
                break;
            case 2:
                insertData();
                break;
            case 3:
                changeData();
                break;
            case 4:
                searchData();
                break;
            case 5: 
                deleteData();
                break;
            case 6:
                isLoop = false
                break;
            default:
                console.log('Data tidak ditemukan')
                break;
        }
    }
}

menu();