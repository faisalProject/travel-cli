import showData from "./show-data.js";
import { participant } from "./main.js";
import PromptSync from "prompt-sync";
import Table from "cli-table";
const input = PromptSync();

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
};

export default searchData;