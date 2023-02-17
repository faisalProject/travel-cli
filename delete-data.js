import showData from "./show-data.js";
import {participant, menu} from "./main.js";
import PromptSync from "prompt-sync";
const input = PromptSync();

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
};

export default deleteData;