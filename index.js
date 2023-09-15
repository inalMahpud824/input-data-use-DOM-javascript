const nama = document.getElementById("nama");
const umur = document.getElementById("umur");
const uang = document.getElementById("uang");
const button = document.getElementById("tombol");
const tampil = document.getElementById("display-tab");
const tabel = document.getElementById("tbody");
const rataRata = document.getElementById("rataRata");
const data = [];

// fungsi memasukan data
button.addEventListener("click", () => {
  const dataNama = nama.value.trim();
  const dataUmur = Number(umur.value.trim());
  const dataUang = Number(uang.value.trim());
  //   mengecek Nama minimal 10 karakter
  if (dataNama.length < 9) {
    return alert("nama yang kamu masukan kurang dari 25 character");
  }
  //   mengecek input umur dan uang harus berupa angka
  if (isNaN(dataUmur) || isNaN(dataUang)) {
    alert("Umur dan uang harus berupa angka.");
    // Menghapus input yang tidak valid
    umur.value = "";
    uang.value = "";
    return;
  }
  //   mengecek umur minimal 25 tahun
  if (dataUmur < 24) {
    alert("Umur harus di atas 25 tahun");
    return;
  }
  // mengecek uang saku minimal 100rb dan maksimal 1jt
  if (dataUang < 99999 || dataUang > 999999) {
    alert("uang saku minimal 100rb dan maksimal 1 Juta");
    return;
  }
  let data1 = {
    dataNama,
    dataUmur,
    dataUang,
  };
  alert("data sudah di masukan");
  return data.push(data1);
});

// fungsi menampilkan data
tampil.addEventListener("click", () => {
  tabel.innerHTML = "";
  rataRata.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const listData = document.createElement("tr");
    listData.innerHTML = `<td>${data[i].dataNama}</td>
      <td>${data[i].dataUmur} </td>
      <td>${data[i].dataUang}</td>`;
    tabel.appendChild(listData);
  }

  //menampilkan resume
  let totalUmur = 0;
  let totalUang = 0;
  for (let i = 0; i < data.length; i++) {
    totalUmur += data[i].dataUmur;
    totalUang += data[i].dataUang;
  }
  const avgUmur = totalUmur / data.length;
  const avgUang = totalUang / data.length;
  const nilaiAvg = document.createElement("ul");
  nilaiAvg.innerHTML = `<li>Rata rata pendaftar memiliki uang sangu sebesar: ${avgUang}</li>
  <li>dengan rata rata umur: ${avgUmur}</li>`;
  rataRata.appendChild(nilaiAvg);
});
