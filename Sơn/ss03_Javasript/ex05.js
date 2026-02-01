// ====== THỐNG KÊ ======
let tongYeuCau = 0;
let datThanhCong = 0;
let biTuChoi = 0;
let choXetDuyet = 0;

// ====== VÒNG LẶP CHÍNH - CA LÀM VIỆC ======
while (true) {
    let tiepTuc;

    while (true) {
        tiepTuc = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");
        if (tiepTuc === null) continue;

        tiepTuc = tiepTuc.toLowerCase();
        if (tiepTuc === "có" || tiepTuc === "không") break;

        alert("Vui lòng nhập 'có' hoặc 'không'");
    }

    if (tiepTuc === "không") break;

    let tenBanDoc;
    while (true) {
        tenBanDoc = prompt("Nhập tên bạn đọc:");
        if (tenBanDoc && tenBanDoc.trim() !== "") break;
        alert("Tên bạn đọc không được để trống");
    }

    let maSach;
    while (true) {
        maSach = prompt("Nhập mã sách muốn đặt trước:");
        if (maSach && maSach.trim() !== "") break;
        alert("Mã sách không được để trống");
    }

    let tenSach = prompt("Nhập tên sách (chỉ để tham khảo):");

    let soNgayCho;
    while (true) {
        soNgayCho = Number(prompt("Nhập số ngày dự kiến chờ (>= 1):"));
        if (Number.isInteger(soNgayCho) && soNgayCho >= 1) break;
        alert("Số ngày chờ phải là số nguyên >= 1");
    }

    let uuTien;
    while (true) {
        uuTien = Number(
            prompt(
                "Nhập mức ưu tiên:\n1 - Sinh viên\n2 - Giảng viên/Nghiên cứu sinh\n3 - Nhân viên thư viện / Đặc cách"
            )
        );
        if (uuTien === 1 || uuTien === 2 || uuTien === 3) break;
        alert("Ưu tiên chỉ được nhập 1, 2 hoặc 3");
    }

    tongYeuCau++;

    if (soNgayCho > 45) {
        biTuChoi++;
        console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
    } 
    else if (uuTien === 3) {
        datThanhCong++;
        console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
    } 
    else if (uuTien === 2 && soNgayCho <= 30) {
        datThanhCong++;
        console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
    } 
    else if (uuTien === 1 && soNgayCho <= 21) {
        datThanhCong++;
        console.log("Đặt trước thành công");
    } 
    else {
        choXetDuyet++;
        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
    }
}

console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số yêu cầu đã xử lý:", tongYeuCau);
console.log("Số yêu cầu đặt trước thành công:", datThanhCong);
console.log("Số yêu cầu bị từ chối:", biTuChoi);
console.log("Số yêu cầu chờ xét duyệt:", choXetDuyet);