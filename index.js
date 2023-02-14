const arr = [1, 2, 3, 4];
const newArr = arr.filter((a) => {
    return a > 2
})

console.log(newArr)

const mhs = ['Muhamad', 'Agus', 'Faisal'];

const newMhs = mhs.filter(name => {
    return name.includes('Agus')
});
console.log(newMhs[1])