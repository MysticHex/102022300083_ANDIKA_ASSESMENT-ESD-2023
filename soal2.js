function cekpalindrom(string) {
  const len = string.length;

  for (let i = 0; i < len; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
function cek(value) {
  if (value) {
    return("eureeka!");
  } else {
    return("suka blyat");
  }
}

const string1 = "Ibu Ratna antar ubi.";
const string2 = "Aku Suka Kamu";
const string3 = "KataK";

console.log(cek(cekpalindrom(string1)));
console.log(cek(cekpalindrom(string2)));
console.log(cek(cekpalindrom(string3)));