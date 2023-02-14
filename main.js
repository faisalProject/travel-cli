const input = require('prompt-sync')({sigint: true});

const participant = [];
const package = [];
const facility = [];
const cost = [];


const travelData = [
    ['Karawang-Pantai Pakis Jaya',                   1000000, 'Penginapan',  600000],
    ['Karawang-Curug Cigentis-Gunung Sanggabuana', 500000,  'Penjemputan', 300000],
    ['Karawang-Candi Jiwa',                          600000,  'Kuliner',     300000],
    ['Karawang-Pantai Samudra',                      850000]
]

function insert() {
    console.clear();
    const participantNew = input('Nama Peserta: ');
    const packageCode = input('Kode Paket: ');
    const addPackageCode = input('Kode Tambahan: ')

    if(packageCode == 1 || packageCode == 01) {
        if(addPackageCode.toUpperCase() == 'A') {
            participant.push(participantNew);
            package.push(travelData[0][0]);
            facility.push(travelData[0][2]);
            const rates = travelData[0][1] + travelData[0][3]
            cost.push(rates);
        } else if(addPackageCode.toUpperCase() == 'B') {
            participant.push(participantNew);
            package.push(travelData[0][0])
            facility.push(travelData[1][2]);
            const rates = travelData[0][1] + travelData[1][3];
            cost.push(rates);
        } else if(addPackageCode.toUpperCase() == 'C') {
            participant.push(participantNew);
            package.push(travelData[0][0]);
            facility.push(travelData[2][2]);
            const rates = travelData[0][1] + travelData[2][3];
            cost.push(rates);
        } else {
            console.log('Data tidak ditemukan!')
        }
    } else if(packageCode == 2 || packageCode == 02) {
        if(addPackageCode.toUpperCase() == 'A') {
            participant.push(participantNew);
            package.push(travelData[1][0]);
            facility.push(travelData[0][2]);
            const rates = travelData[1][1] + travelData[0][3]
            cost.push(rates);
        } else if(addPackageCode.toUpperCase() == 'B') {
            participant.push(participantNew);
            package.push(travelData[1][0])
            facility.push(travelData[1][2]);
            const rates = travelData[1][1] + travelData[1][3];
            cost.push(rates);
        } else if(addPackageCode.toUpperCase() == 'C') {
            participant.push(participantNew);
            package.push(travelData[1][0]);
            facility.push(travelData[2][2]);
            const rates = travelData[1][1] + travelData[2][3];
            cost.push(rates);
        } else {
            console.log('Data tidak ditemukan!')
        }
    } else if(packageCode == 3 || packageCode == 03) {
        if(addPackageCode.toUpperCase() == 'A') {
            participant.push(participantNew);
            package.push(travelData[2][0]);
            facility.push(travelData[0][2]);
            const rates = travelData[2][1] + travelData[0][3]
            cost.push(rates);
        } else if(addPackageCode.toUpperCase() == 'B') {
            participant.push(participantNew);
            package.push(travelData[2][0])
            facility.push(travelData[1][2]);
            const rates = travelData[2][1] + travelData[1][3];
            cost.push(rates);
        } else if(addPackageCode.toUpperCase() == 'C') {
            participant.push(participantNew);
            package.push(travelData[2][0]);
            facility.push(travelData[2][2]);
            const rates = travelData[2][1] + travelData[2][3];
            cost.push(rates);
        } else {
            console.log('Data tidak ditemukan!')
        }
    } else if(packageCode == 4 || packageCode == 04) {
        if(addPackageCode.toUpperCase() == 'A') {
            participant.push(participantNew);
            package.push(travelData[3][0]);
            facility.push(travelData[0][2]);
            const rates = travelData[3][1] + travelData[0][3]
            cost.push(rates);
        } else if(addPackageCode.toUpperCase() == 'B') {
            participant.push(participantNew);
            package.push(travelData[3][0])
            facility.push(travelData[1][2]);
            const rates = travelData[3][1] + travelData[1][3];
            cost.push(rates);
        } else if(addPackageCode.toUpperCase() == 'C') {
            participant.push(participantNew);
            package.push(travelData[3][0]);
            facility.push(travelData[2][2]);
            const rates = travelData[3][1] + travelData[2][3];
            cost.push(rates);
        } else {
            console.log('Data tidak ditemukan!')
        }
    } else {
        console.log('Data tidak ditemukan!')
    }
}

function showData() {
    console.clear();
    if(participant.length < 1) {
        console.log('Data masih kosong')
    } else {
        console.log('Daftar Peserta')
        participant.forEach((p, i) => {
            console.log(i+1, `${p}`, `${package[i]}`, `${facility[i]}`, `Rp${cost[i]}`)
        })
    }
}

function changeData() {
    console.clear();
    if(participant.length < 1) {
        console.log('Data belum ada!')
    } else {
        const index = input('Masukkan no: ');
        if(index > participant.length || index == 0) {
            console.log('Data tidak ditemukan!')
        } else {
            console.log(`${index} ${participant[index-1]} ${package[index-1]} ${facility[index-1]} ${cost[index-1]}`)
            const participantNew = input('Nama Peserta baru: ');
            const packageCode = input('Kode Paket baru: ');
            const addPackageCode = input('Kode Tambahan baru: ')

            if(packageCode == 1 || packageCode == 01) {
                if(addPackageCode.toUpperCase() == 'A') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[0][0]);
                    facility[index-1] = (travelData[0][2]);
                    const rates = travelData[0][1] + travelData[0][3]
                    cost[index-1] = (rates);
                } else if(addPackageCode.toUpperCase() == 'B') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[0][0])
                    facility[index-1] = (travelData[1][2]);
                    const rates = travelData[0][1] + travelData[1][3];
                    cost[index-1] = (rates);
                } else if(addPackageCode.toUpperCase() == 'C') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[0][0]);
                    facility[index-1] = (travelData[2][2]);
                    const rates = travelData[0][1] + travelData[2][3];
                    cost[index-1] = (rates);
                } else {
                    console.log('Data tidak ditemukan!')
                }
            } else if(packageCode == 2 || packageCode == 02) {
                if(addPackageCode.toUpperCase() == 'A') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[1][0]);
                    facility[index-1] = (travelData[0][2]);
                    const rates = travelData[1][1] + travelData[0][3]
                    cost[index-1] = (rates);
                } else if(addPackageCode.toUpperCase() == 'B') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[1][0])
                    facility[index-1] = (travelData[1][2]);
                    const rates = travelData[1][1] + travelData[1][3];
                    cost[index-1] = (rates);
                } else if(addPackageCode.toUpperCase() == 'C') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[1][0]);
                    facility[index-1] = (travelData[2][2]);
                    const rates = travelData[1][1] + travelData[2][3];
                    cost[index-1] = (rates);
                } else {
                    console.log('Data tidak ditemukan!')
                }
            } else if(packageCode == 3 || packageCode == 03) {
                if(addPackageCode.toUpperCase() == 'A') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[2][0]);
                    facility[index-1] = (travelData[0][2]);
                    const rates = travelData[2][1] + travelData[0][3]
                    cost[index-1] = (rates);
                } else if(addPackageCode.toUpperCase() == 'B') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[2][0])
                    facility[index-1] = (travelData[1][2]);
                    const rates = travelData[2][1] + travelData[1][3];
                    cost[index-1] = (rates);
                } else if(addPackageCode.toUpperCase() == 'C') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[2][0]);
                    facility[index-1] = (travelData[2][2]);
                    const rates = travelData[2][1] + travelData[2][3];
                    cost[index-1] = (rates);
                } else {
                    console.log('Data tidak ditemukan!')
                }
            } else if(packageCode == 4 || packageCode == 04) {
                if(addPackageCode.toUpperCase() == 'A') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[3][0]);
                    facility[index-1] = (travelData[0][2]);
                    const rates = travelData[3][1] + travelData[0][3]
                    cost[index-1] = (rates);
                } else if(addPackageCode.toUpperCase() == 'B') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[3][0])
                    facility[index-1] = (travelData[1][2]);
                    const rates = travelData[3][1] + travelData[1][3];
                    cost[index-1] = (rates);
                } else if(addPackageCode.toUpperCase() == 'C') {
                    participant[index-1] = participantNew;
                    package[index-1] = (travelData[3][0]);
                    facility[index-1] = (travelData[2][2]);
                    const rates = travelData[3][1] + travelData[2][3];
                    cost[index-1] = (rates);
                } else {
                    console.log('Data tidak ditemukan!')
                }
            } else {
                console.log('Data tidak ditemukan!')
            }
        }
    }
}

function searchData() {
    console.clear()
    const search = input("Masukkan nama: ").toLowerCase();
    // filtered = search.filter(name => name.participant.includes(search));
    const filtered = participant.filter(i => i.toLowerCase().includes(search))
    const found = filtered[0];
    if(found) {
        console.log(`Data ditemukan: ${found}`)
    } else {
        console.log('Data tidak ditemukan')
    }
}
function deleteData() {
    console.clear();
    if(participant.length < 1) {
        console.log('Data masih kosong!')
    } else {
        const index = input('Masukkan no: ');
        if(index-1 > participant.length || index == 0) {
            console.log('Peserta tidak ditemukan!')
        } else {
            participant.splice(index-1, 1);
            package.splice(index-1, 1);
            facility.splice(index-1, 1);
            cost.splice(index-1, 1);
        }
    }
}

function run() {
    let isLoop = true
    while (isLoop) {
        const menuList = ['Tambah data', 'Tampilkan data', 'Cari data', 'Ubah data', 'Hapus data', 'Keluar'];
        console.log('Menu')
        menuList.forEach((m, i) => console.log(`${i+1}. ${m}`));
        const menu = input('Pilih menu ? ')
        if(menu == 1) {
            insert();
        } else if(menu == 2) {
            showData();
        } else if(menu == 3) {
            searchData();
        } else if(menu == 4) {
            changeData();
        } else if(menu == 5) {
            deleteData();   
        } else if(menu == 6) {
            isLoop = false;
        } else {
            console.log('data tidak ditemukan!')
        }
    }
};

run();