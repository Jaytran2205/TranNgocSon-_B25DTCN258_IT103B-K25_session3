let tongPhanHoi = 0;

let khieuNaiNghiemTrong = 0;
let khieuNaiTrungBinh = 0;
let khieuNaiNhe = 0;

let deXuatCaiThien = 0;
let phanHoiTichCuc = 0;

while (true) {
    let tiepTuc;

    while (true) {
        tiepTuc = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");
        if (tiepTuc === null)
             continue;

        tiepTuc = tiepTuc.toLowerCase();
        if (tiepTuc === "có" || tiepTuc === "không") 
            break;

        alert("Vui lòng nhập 'có' hoặc 'không'");
    }

    if (tiepTuc === "không")
          break;

    let tenBanDoc;
    while (true) {
        tenBanDoc = prompt("Nhập tên bạn đọc:");
        if (tenBanDoc && tenBanDoc.trim() !== "")
             break;
        alert("Tên bạn đọc không được để trống");
    }

    let maThe = prompt("Nhập mã thẻ bạn đọc (có thể để trống):");

    let loai;
    while (true) {
        loai = Number(
            prompt(
                "Nhập loại phản hồi:\n1 - Khiếu nại / Phàn nàn\n2 - Đề xuất cải thiện\n3 - Phản hồi tích cực"
            )
        );
        if (loai === 1 || loai === 2 || loai === 3) break;
        alert("Loại phản hồi chỉ được nhập 1, 2 hoặc 3");
    }

    let mucDo = null;
    if (loai === 1) {
        while (true) {
            mucDo = Number(
                prompt(
                    "Nhập mức độ nghiêm trọng:\n1 - Nhẹ\n2 - Trung bình\n3 - Nghiêm trọng"
                )
            );
            if (mucDo === 1 || mucDo === 2 || mucDo === 3) break;
            alert("Mức độ chỉ được nhập 1, 2 hoặc 3");
        }
    }

    let noiDung = prompt("Nhập nội dung ngắn gọn (tham khảo):");

    tongPhanHoi++;

    if (loai === 1 && mucDo === 3) {
        khieuNaiNghiemTrong++;
        console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
    }
    else if (loai === 1 && mucDo === 2) {
        khieuNaiTrungBinh++;
        console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
    }
    else if (loai === 1 && mucDo === 1) {
        khieuNaiNhe++;
        console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
    }
    else if (loai === 2) {
        deXuatCaiThien++;
        console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
    }
    else if (loai === 3) {
        phanHoiTichCuc++;
        console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
    }
}

console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số phản hồi/khiếu nại đã xử lý:", tongPhanHoi);
console.log("Số khiếu nại nghiêm trọng (mức 3):", khieuNaiNghiemTrong);
console.log("Số khiếu nại trung bình (mức 2):", khieuNaiTrungBinh);
console.log("Số khiếu nại nhẹ (mức 1):", khieuNaiNhe);
console.log("Số đề xuất cải thiện:", deXuatCaiThien);
console.log("Số phản hồi tích cực:", phanHoiTichCuc);