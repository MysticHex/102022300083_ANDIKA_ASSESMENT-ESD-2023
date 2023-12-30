function cekPengambilKue(fotoKueUtuh, urutanKedatangan) {
  const temanTeman = [
    { nama: "Ningguang", kebiasaan: "memeriksa kue" },
    { nama: "Hutao", kebiasaan: "memberikan kado" },
    { nama: "Xiao", kebiasaan: "memotret apa pun yang dilihat pertama kali" },
    {nama: "Childe",kebiasaan: "membawa air mineral dan meletakkannya di meja"},
  ];

  let pengambilKue = null;

  for (let i = 0; i < urutanKedatangan.length; i++) {
    const teman = temanTeman.find((t) => t.nama === urutanKedatangan[i]);
    if (teman) {
      console.log(`${teman.nama} sedang ${teman.kebiasaan}`);
      // Jika kue masih utuh, maka teman tersebut adalah pengambil kue
      if (fotoKueUtuh) {
        pengambilKue = teman.nama;
      } else {
        console.log("Kue telah diambil sebelum Xiao masuk.");
      }
    }
  }

  return pengambilKue;
}

const fotoKueUtuh = true; // Jika false, itu berarti kue sudah diambil sebelum Xiao masuk
const urutanKedatangan = ["Ningguang", "Hutao", "Xiao", "Childe"];

const pengambilKue = cekPengambilKue(fotoKueUtuh, urutanKedatangan);

// Hasilnya
if (pengambilKue) {
  console.log(
    `\nMisteri terpecahkan! ${pengambilKue} adalah yang mengambil kue.`
  );
} else {
  console.log("\nTidak dapat menentukan siapa yang mengambil kue.");
}
