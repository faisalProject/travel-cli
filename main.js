import PromptSync from 'prompt-sync';
import showData from './show-data.js';
import insertData from './insert-data.js';
import changeData from './change-data.js';
import searchData from './search-data.js';
import deleteData from './delete-data.js';

const input = PromptSync();
const participant = [];

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
export {participant, menu};
