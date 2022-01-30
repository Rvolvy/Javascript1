// nomor 4
const nomor = [100, 25, 16, 56, 87];
const map = nomor.map (item => {
  return item * 5;
});
console.log(map);

// nomor 5
const nomor = [100, 25, 16, 56, 87];
const map = nomor.map (item => {
  return item - 100;
});
console.log(map);

// nomor 6
const nomor = [100, 25, 16, 56, 87];
const map = nomor.map (item => {
  return item + 5;
});
console.log(map);

// nomor 7
const nomor = [1,2,3,4,5,6,7,8,9,10];
const filter = nomor.filter (item => {
  return item > 5;
});
console.log(filter);

// nomor 8
const nomor = [1,2,3,4,5,6,7,8,9,10];
const filter = nomor.filter (item => {
  return item <= 6;
});
console.log(filter);

// nomor 9
const nomor = [1,2,3,4,5,6,5,4,7,54,5,6,7,8,7,5,5,5,5];
const filter = nomor.filter (item => {
  return item == 5;
});
console.log(filter);

// nomor 10
const nama = [`raffa`,`ilo`,`raffa`,`pradipta`,`raffa`,`raffa`,`ilo`,`pradipta`];
const filter = nama.filter (item => {
  return item == `raffa`;
});
console.log(filter);