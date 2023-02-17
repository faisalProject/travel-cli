import showData from "./show-data.js";
import showPackage from "./show-package.js";
import { participant } from "./main.js";
import { packageData, additionalPackageData } from "./data.js";   
import PromptSync from "prompt-sync";
import Table from "cli-table";
const input = PromptSync();

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
        } else if(isNewPackage > packageData.route.length || isNewPackage < 1 ) {
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
        } else if(isNewAdditionalPackage > additionalPackageData.facility.length || isNewAdditionalPackage < 1) {
            console.log('Kode paket hanya tersedia 1 s/d 3!')
        } else {
           break;
        }
    }

    const getRoute = packageData.route[isNewPackage-1];
    const getFacility = additionalPackageData.facility[isNewAdditionalPackage-1];
    const total = packageData.rates[isNewPackage-1] + additionalPackageData.retes[isNewAdditionalPackage-1];
    participant[isNumber-1].name = newName;
    participant[isNumber-1].package = getRoute;
    participant[isNumber-1].facility = getFacility;
    participant[isNumber-1].total = total;
    console.log('Data berhasil diubah!')
};

export default changeData;