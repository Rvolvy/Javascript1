const NamaArray = [
  {Nama: `Diluc`, Tipe: `Pyro`},
  {Nama: `Childe`, Tipe: `Hydro`},
  {Nama: `HuTao`, Tipe: `Pyro`},
  {Nama: `Zhongli`, Tipe: `Geo`},
  {Nama: `Xiangling`, Tipe: `Pyro`},
  {Nama: `Xiao`, Tipe: `Anemo`},
  {Nama: `Raiden`, Tipe: `Electro`},
  {Nama: `Keqing`, Tipe: `Electro`},
  {Nama: `Jean`, Tipe: `Anemo`},
  {Nama: `Noelle`, Tipe: `Geo`},
];
// Map
console.log(`List:`);
function NamaMap() {
  const map = NamaArray.map (itemmap => {
    const konten = {};
    konten[itemmap.Nama] = itemmap.Tipe;
    konten.Pity = Math.floor(Math.random()* 90);
    return konten
  });
  console.log(map);
}
NamaMap();
// Filter
console.log(`Search Tipe:`);
function NamaFilter() {
  const filter = NamaArray.filter (itemfilter => {
    return itemfilter.Tipe == `Pyro`;
  });
  console.log(filter);
}
NamaFilter();