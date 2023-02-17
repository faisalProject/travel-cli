import showPackage from "./show-package.js";
import { participant } from "./main.js";
import { packageData, additionalPackageData } from "./data.js"; 
import PromptSync from "prompt-sync";
const input = PromptSync();

const insertData = () => {
    console.clear();
    showPackage();

    const name = input('Nama peserta: ');
    let isPackage
    while (true) {
        isPackage = input('Pilih paket: ');
        if(isNaN(isPackage)) {
            console.error('Input paket harus angka!')
        } else if(isPackage > packageData.route.length || isPackage < 1 ) {
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
        } else if(isAdditionalPackage > additionalPackageData.facility.length || isAdditionalPackage < 1) {
            console.log('Kode paket hanya tersedia 1 s/d 3!')
        } else {
           break;
        }
    }

    const getRoute = packageData.route[isPackage-1];
    const getFacility = additionalPackageData.facility[isAdditionalPackage-1];
    const total = packageData.rates[isPackage-1] + additionalPackageData.retes[isAdditionalPackage-1];
    participant.push({
        name: name,
        package: getRoute,
        facility: getFacility,
        total: total
    });
    console.log('Data berhasil ditambahkan!')
};

export default insertData;