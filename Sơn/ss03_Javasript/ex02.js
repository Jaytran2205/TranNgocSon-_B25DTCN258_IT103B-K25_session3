
let totalReturns;
do {
    totalReturns = parseInt(prompt("Hôm nay có bao nhiêu lượt trả sách?"));
} while (isNaN(totalReturns) || totalReturns <= 0);

let lateReturns = 0; 


for (let i = 1; i <= totalReturns; i++) {
    console.log(`--- Lượt trả sách ${i} ---`);

    let borrowerName = prompt("Nhập tên người trả:");
    let bookName = prompt("Nhập tên sách:");


    let borrowedDays;
    do {
        borrowedDays = parseInt(prompt("Nhập số ngày đã mượn (>= 1):"));
    } while (isNaN(borrowedDays) || borrowedDays < 1);

    if (borrowedDays <= 14) {
        console.log("Tình trạng: Trả đúng hạn");
    } else if (borrowedDays <= 21) {
        console.log("Tình trạng: Trả muộn nhẹ");
        console.log("Hình thức: Phạt nhắc nhở");
        lateReturns++;
    } else {
        console.log("Tình trạng: Quá hạn nghiêm trọng");
        console.log("Hình thức: Cần ghi biên bản phạt");
        lateReturns++;
    }

    console.log(`Người trả: ${borrowerName}`);
    console.log(`Tên sách: ${bookName}`);
    console.log(`Số ngày mượn: ${borrowedDays}`);
}

console.log("THỐNG KÊ ");
console.log("Tổng số lượt trả sách:", totalReturns);
console.log("Số lượt trả muộn (>= 15 ngày):", lateReturns);
