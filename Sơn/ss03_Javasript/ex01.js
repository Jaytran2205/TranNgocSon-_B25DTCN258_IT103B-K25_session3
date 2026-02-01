
let soLuotMuon;
do {
    soLuotMuon = parseInt(prompt("Hôm nay có bao nhiêu lượt mượn sách?"));
} while (isNaN(soLuotMuon) || soLuotMuon <= 0);

let tongLuotMuon = 0;
let cachoBaoCanh = 0;

for (let i = 1; i <= soLuotMuon; i++) {
    console.log(`--- Lượt mượn thứ ${i} ---`);

    let tenNguoiMuon = prompt("Nhập tên người mượn:");
    let tenSach = prompt("Nhập tên sách:");
    
    let soNgayMuon;
    do {
        soNgayMuon = parseInt(prompt("Nhập số ngày mượn (1 - 30):"));
    } while (isNaN(soNgayMuon) || soNgayMuon < 1 || soNgayMuon > 30);

    if (soNgayMuon <= 14) {
        console.log("Tình trạng: Mượn thành công");
    } else {
        console.log("Tình trạng: Cảnh báo - Thời gian mượn vượt quy định (tối đa 14 ngày)");
        cachoBaoCanh++;
    }

    console.log(`Người mượn: ${tenNguoiMuon}`);
    console.log(`Tên sách: ${tenSach}`);
    console.log(`Số ngày mượn: ${soNgayMuon}`);
    
    tongLuotMuon++;
}

console.log("THỐNG KÊ");
console.log("Tổng số lượt mượn trong ngày:", tongLuotMuon);
console.log("Số lượt cần cảnh báo:", cachoBaoCanh);