const nama = "Dwi";
const role = "Backend Developer";
const corporate = "AWAL MULA";
const age = 31;

const greetings = `
Hai nama saya ${nama}, pekerjaan saya sebagai ${role} di ${corporate},
saya sudah bekerja selama 3 tahun,
dan tepat agustus nanti genap menjadi 4 tahun
biasa rekan kerja saya memanggil saya ${age > 30 ? "pak" : "mas"} ${nama}
`; // (``) backtick

console.log(greetings);
