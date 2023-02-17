import { participant } from "./main.js";
import Table from "cli-table";

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
};

export default showData;