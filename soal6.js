var menu = [
  { nama: "Ayam Goreng", jenis: "Makanan", harga: 15000 },
  { nama: "Ayam Puk Puk", jenis: "Makanan", harga: 13000 },
  { nama: "Ayam Bakar", jenis: "Makanan", harga: 20000 },
  { nama: "Es Teh", jenis: "Minuman", harga: 5000 },
  { nama: "Es Jeruk", jenis: "Minuman", harga: 7000 },
];

function Total(order) {
  var totalTransaction = 0;

  order.forEach(function (itemName) {
    var menuItem = menu.find(function (menuitem) {
      return menuitem.nama === itemName;
    });

    if (menuItem && menuItem.jenis) {
      var itemTotal;

      if (menuItem.jenis === "Minuman") {
        itemTotal = menuItem.harga + menuItem.harga * 0.03;
      }

      if (menuItem.jenis === "Makanan") {
        itemTotal = menuItem.harga + menuItem.harga * 0.05;
      }

      totalTransaction += itemTotal;
    }
  });

  totalTransaction = totalTransaction + totalTransaction * 0.15;

  return totalTransaction;
}

var orderanRehan = ["Ayam Bakar","Ayam Bakar", "Es Teh"];
var orderanAmbaroni = ["Ayam Puk Puk", "Es Teh", "Es Teh", "Es Teh"];
var orderanFaizNgawi = ["Ayam Goreng","Ayam Puk Puk","Ayam Bakar", "Es Jeruk"];

console.log("Pesanan rehan: Rp." + Total(orderanRehan));
console.log("Pesanan FaizNgawi: Rp." + Total(orderanAmbaroni));
console.log("Pesanan Ambaroni: Rp." + Total(orderanFaizNgawi));
