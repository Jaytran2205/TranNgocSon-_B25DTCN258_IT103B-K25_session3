let password = "";
let count = 0;
let isLoginSuccessfull = false;

do {
  password = prompt("Vui lòng nhập mật khẩu");

  if (password !== "admin123") {
    count++;

    if (count === 3) {
      console.log("Tài khoản bị khóa");
    }
  } else {
    alert("Đăng nhập thành công");

    isLoginSuccessfull = true;

    break;
  }
} while (password !== "admin123" && count < 3);

if (isLoginSuccessfull) {
  let choice;
  let quantity;
  let totalPrice = 0;

  do {
    choice = +prompt("====== MENU ======\n1 - Tính tổng giá sách\n2 - Quản lý kệ sách\n3 - Kết thúc\n\nVui lòng nhập lựa chọn");
    switch (choice) {
      case 1:
        quantity = +prompt("Vui lòng nhập số lượng sách");

        for (let i = 1; i <= quantity; i++) {
          let price = +prompt(`Nhập giá tiền của cuốn sách thứ ${i}`);

          if (price <= 0 || isNaN(price)) {
            console.log("Giá tiền không hợp lệ");
            continue;
          }

          totalPrice += price;
        }

        console.log("Tổng số tiền là: ", totalPrice);

        break;

      case 2:
        console.log("Lựa chọn 2");

        for (let i = 1; i <= 3; i++) {
          for (let j = 1; j <= 5; j++) {
            if (i === 2 && j === 3) {
              console.log("Đang sửa chữa");
              continue;
            }
            console.log(`Khu vực ${i} - Kệ sách số ${j}`);
          }
        }
        break;

      case 3:
        console.log("Kết thúc chương trình");
        break;

      default:
        console.log("Nhập sai lựa chọn");
        break;
    }
  } while (choice != 3);
}