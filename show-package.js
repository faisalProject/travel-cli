import Table from "cli-table";

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
};

export default showPackage;