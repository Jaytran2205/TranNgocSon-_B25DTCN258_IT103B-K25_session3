let tongSach = 0;
let sachMat = 0;
let sachHetHang = 0;
let sachTonKhoNhieu = 0;
let sachTonKhoBinhThuong = 0;

while (true) {
    let tiepTuc = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

    if (tiepTuc === null || tiepTuc.toLowerCase() === "không") {
        break;
    }

    if (tiepTuc.toLowerCase() !== "có") {
        alert("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }
    let maSach;
    do {
        maSach = prompt("Nhập mã sách (không được để trống):");
    } while (!maSach);

    let tenSach = prompt("Nhập tên sách:");

    let soLuong;
    do {
        soLuong = Number(prompt("Nhập số lượng thực tế trong kho (>= 0):"));
    } while (isNaN(soLuong) || soLuong < 0);

    let tinhTrang;
    do {
        tinhTrang = Number(
            prompt(
                "Nhập tình trạng sách:\n1 - Bình thường (có thể cho mượn)\n2 - Mất"
            )
        );
    } while (tinhTrang !== 1 && tinhTrang !== 2);

    tongSach++;

    if (tinhTrang === 2) {
        sachMat++;
    } else if (tinhTrang === 1 && soLuong === 0) {
        sachHetHang++;
    } else if (tinhTrang === 1 && soLuong >= 10) {
        sachTonKhoNhieu++;
    } else if (tinhTrang === 1 && soLuong >= 1 && soLuong <= 9) {
        sachTonKhoBinhThuong++;
    }
}


console.log("===== BÁO CÁO KIỂM KÊ SÁCH =====");
console.log("Tổng số sách đã kiểm kê:", tongSach, "cuốn");
console.log("Số sách mất:", sachMat, "cuốn");
console.log("Số sách hết hàng:", sachHetHang, "cuốn");
console.log("Số sách tồn kho nhiều:", sachTonKhoNhieu, "cuốn");
console.log("Số sách tồn kho bình thường:", sachTonKhoBinhThuong, "cuốn");