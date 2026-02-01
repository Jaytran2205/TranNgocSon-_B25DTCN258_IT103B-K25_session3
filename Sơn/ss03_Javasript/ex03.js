let successCount = 0;
let failCount = 0;   
while (true) {
    let answer = prompt("Có yêu cầu gia hạn mới không? (có/không)");

    if (answer === null || answer.toLowerCase() === "không") {
        break;
    }

    if (answer.toLowerCase() !== "có") {
        alert("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }

    let readerName = prompt("Nhập tên bạn đọc:");
    let bookName = prompt("Nhập tên sách:");

    let borrowedDays;
    do {
        borrowedDays = parseInt(prompt("Nhập số ngày đã mượn hiện tại (>= 1):"));
    } while (isNaN(borrowedDays) || borrowedDays < 1);

    let extendDays;
    do {
        extendDays = parseInt(prompt("Nhập số ngày muốn gia hạn thêm (>= 1):"));
    } while (isNaN(extendDays) || extendDays < 1);

    let totalDays = borrowedDays + extendDays;

    console.log("----- XỬ LÝ GIA HẠN -----");
    console.log("Bạn đọc:", readerName);
    console.log("Tên sách:", bookName);

    if (totalDays > 60) {
        console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
        failCount++;
    } else if (borrowedDays > 45) {
        console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
        failCount++;
    } else if (totalDays <= 30) {
        console.log("Gia hạn thành công");
        successCount++;
    } else {
      
        console.log("Không được gia hạn");
        failCount++;
    }
}
console.log(" THỐNG KÊ CA LÀM VIỆC");
console.log("Số lần gia hạn thành công:"+ successCount);
console.log("Số lần gia hạn không thành công:"+ failCount);