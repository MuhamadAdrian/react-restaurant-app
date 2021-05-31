/* Fungsi formatRupiah */
export default function formatRupiah(angka) {
  let reverse = angka.toString().split("").reverse().join("");
  let ribuan = reverse.match(/\d{1,3}/g);
  let filtered = ribuan.join(".").split("").reverse().join("");

  return "Rp. " + filtered;
}
