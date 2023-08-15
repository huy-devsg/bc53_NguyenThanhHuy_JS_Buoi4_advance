document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.forEach(function (otherLink) {
                var icon = otherLink.querySelector('i.fa-solid');
                icon.classList.remove('fa-book-open');
                icon.classList.add('fa-book');
            });
            var icon = link.querySelector('i.fa-solid');
            if (icon.classList.contains('fa-book')) {
                icon.classList.remove('fa-book');
                icon.classList.add('fa-book-open');
            } else if (icon.classList.contains('fa-book-open')) {
                icon.classList.remove('fa-book-open');
                icon.classList.add('fa-book');
            }
        });
    });

    // Bài 1: Viết chương trình tìm ngày tháng năm
    document.getElementById('findDate').addEventListener('submit', function (event) {
        event.preventDefault();
        findDate();
    });

    // Bài 2: Viết chương trình tìm số ngày của tháng
    document.getElementById('findDay').addEventListener('submit', function (event) {
        event.preventDefault();
        findDay();
    });

    // Bài 3: Viết chương trình đọc số
    document.getElementById('speechNum').addEventListener('submit', function (event) {
        event.preventDefault();
        speechNum();
    });

    // Bài 4: Viết chương trình tìm khoảng cách theo tọa độ
    document.getElementById('distance').addEventListener('submit', function (event) {
        event.preventDefault();
        distance();
    });
});


// Bài 1 : Viết chương trình tìm ngày tháng năm
    function findDate() {
    
        // B1: Lấy dữ liệu đầu vào
        const dateInput = new Date(document.getElementById('dateInput').value);
        var day = dateInput.getDate();
        var month = dateInput.getMonth() + 1;
        var year = dateInput.getFullYear();
        let result;

        // B2: Xử lý bài toán
        var resultPrev, resultNext;

        if (day === 1) {
            var previousMonth = month - 1;
            var previousYear = year;
            if (previousMonth === 0) {
                previousMonth = 12;
                previousYear--;
            }
            var daysInPreviousMonth = new Date(previousYear, previousMonth, 0).getDate();
            resultPrev = daysInPreviousMonth + '/' + previousMonth + '/' + previousYear;

            resultNext = '2/' + month + '/' + year;
        } else if (day === new Date(year, month, 0).getDate()) {
            resultPrev = (day - 1) + '/' + month + '/' + year;
            var nextMonth = month + 1;
            var nextYear = year;
            if (nextMonth === 13) {
                nextMonth = 1;
                nextYear++;
            }
            resultNext = '1/' + nextMonth + '/' + nextYear;
        } else {
            resultPrev = (day - 1) + '/' + month + '/' + year;
            resultNext = (day + 1) + '/' + month + '/' + year;
        }

        // B3: Hiển thị kết quả
        document.getElementById('result').innerText = `👉 Ngày hôm sau là ngày: ${resultNext}, Ngày hôm trước là ngày: ${resultPrev}`;
}

// <--------------------------------------------------->


// Bài 2 : Viết chương trình tìm số ngày của tháng

    function findDay() {
    
        // B1: Lấy dữ liệu đầu vào

        const monthInput = new Date(document.getElementById('monthInput').value);
        var month2 = monthInput.getMonth() + 1;
        var year2 = monthInput.getFullYear();
        let result2;

        // B2: Xử lý bài toán

        if(month2==1||month2==3||month2==5||month2==7||month2==8||month2==10||month2==12)

        {
            day2 = "31";
        }
        else if (month2==2)
        {
            if(year2 % 4 == 0)
            {
                day2 = '29'
            }
            else
            {
                day2='28';
            }
        }
        else
        {
            day2='30'
        }

        // B3: Hiển thị kết quả

        document.getElementById('result2').innerText = `👉 Tháng ${month2} năm ${year2} có ${day2} ngày.`;
}
// <--------------------------------------------------->


// Bài 3 : Viết chương trình đọc số

function speechNum() {

    // b1: các dữ liệu đầu vào
    const b3Num =  document.getElementById('b3Num').value;
    const digit1 = Math.floor(b3Num / 100);
    const digit2 = Math.floor((b3Num % 100) / 10);
    const digit3 = b3Num % 10;

    let readResult = '';
    
    // b2: xử lí bài toán
    console.log('digit3: ', digit3);

    if (digit1 === 1) {
        readResult += 'Một trăm ';
      } else if (digit1 === 2) {
        readResult += 'Hai trăm ';
      } else if (digit1 === 3) {
        readResult += 'Ba trăm ';
      } else if (digit1 === 4) {
        readResult += 'Bốn trăm ';
      } else if (digit1 === 5) {
        readResult += 'Năm trăm ';
      } else if (digit1 === 6) {
        readResult += 'Sáu trăm ';
      } else if (digit1 === 7) {
        readResult += 'Bảy trăm ';
      } else if (digit1 === 8) {
        readResult += 'Tám trăm ';
      } else if (digit1 === 9) {
        readResult += 'Chín trăm ';
      }

      if (digit2 === 0) {
        if (digit3 !== 0 || (digit1 === 0 && digit2 === 0)) {
            readResult += 'lẻ ';
        }
    } else if (digit2 === 1) {
        readResult += 'mười ';
    } else if (digit2 === 2) {
        readResult += 'hai mươi ';
    } else if (digit2 === 3) {
        readResult += 'ba mươi ';
    } else if (digit2 === 4) {
        readResult += 'bốn mươi ';
    } else if (digit2 === 5) {
        readResult += 'năm mươi ';
    } else if (digit2 === 6) {
        readResult += 'sáu mươi ';
    } else if (digit2 === 7) {
        readResult += 'bảy mươi ';
    } else if (digit2 === 8) {
        readResult += 'tám mươi ';
    } else if (digit2 === 9) {
        readResult += 'chín mươi ';
    }

    // Xử lí hàng đơn vị
    if (digit2 !== 1) {
        if (digit3 === 0) {
            if (digit2 === 0 || digit1 === 0) {
                readResult += '';
            }
        } else if (digit3 === 1) {
            if (digit2 !== 1) {
                readResult += 'mốt';
            }
            else {
                readResult += 'một';
            }
        } else if (digit3 === 2) {
            readResult += 'hai';
        } else if (digit3 === 3) {
            readResult += 'ba';
        } else if (digit3 === 4) {
            readResult += 'bốn';
        } else if (digit3 === 5) {
            readResult += 'lăm';
        } else if (digit3 === 6) {
            readResult += 'sáu';
        } else if (digit3 === 7) {
            readResult += 'bảy';
        } else if (digit3 === 8) {
            readResult += 'tám';
        } else if (digit3 === 9) {
            readResult += 'chín';
        }
    }
    else {
        if (digit3 === 1) {
            readResult += 'một';
        } else if (digit3 === 2) {
            readResult += 'hai';
        } else if (digit3 === 3) {
            readResult +=  'ba';
        } else if (digit3 === 4) {
            readResult += 'bốn';
        } else if (digit3 === 5) {
            readResult += 'lăm';
        } else if (digit3 === 6) {
            readResult += 'sáu';
        } else if (digit3 === 7) {
            readResult += 'bảy';
        } else if (digit3 === 8) {
            readResult += 'tám';
        } else if (digit3 === 9) {
            readResult += 'chín';
        }
    }


    // b3 : các dữ liệu đầu ra
    document.getElementById('result3').innerText = `👉 ${b3Num} đọc là: ${readResult}`;
};
// // <--------------------------------------------------->


// // Bài 4 : Viết chương trình tìm khoảng cách xa nhất theo tọa độ

function distance() {

    // b1: các dữ liệu đầu vào
    const xSV1Input = +document.getElementById("xSV1").value;
    const ySV1Input = +document.getElementById("ySV1").value;
    const xSV2Input = +document.getElementById("xSV2").value;
    const ySV2Input = +document.getElementById("ySV2").value;
    const xSV3Input = +document.getElementById("xSV3").value;
    const ySV3Input = +document.getElementById("ySV3").value;
    const xTruongInput = 5;
    const yTruongInput = 10;
    let result4;

    // b2: xử lí bài toán
        const sinhVien1 = { x: xSV1Input, y: ySV1Input };
        const sinhVien2 = { x: xSV2Input, y: ySV2Input };
        const sinhVien3 = { x: xSV3Input, y: ySV3Input };
        const truongHoc = { x: xTruongInput, y: yTruongInput };

        const khoangCachSV1 = tinhKhoangCach(sinhVien1, truongHoc);
        const khoangCachSV2 = tinhKhoangCach(sinhVien2, truongHoc);
        const khoangCachSV3 = tinhKhoangCach(sinhVien3, truongHoc);
          
        function tinhKhoangCach(diem1, diem2) {
            const deltaX = diem1.x - diem2.x;
            const deltaY = diem1.y - diem2.y;
            return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        }
        if (khoangCachSV1 == khoangCachSV2 && khoangCachSV2 == khoangCachSV3)
        {
            sinhVienXaNhat = "Khoảng cách 3 sinh viên bằng nhau";
        }
        else
        {
            if (khoangCachSV1 > khoangCachSV2 && khoangCachSV1 > khoangCachSV3) {
                sinhVienXaNhat = "Sinh viên thứ nhất xa trường nhất";
            }
            else if (khoangCachSV2 > khoangCachSV1 && khoangCachSV2 > khoangCachSV3) {
                sinhVienXaNhat = "Sinh viên thứ hai xa trường nhất";
            }
            else
            {
                sinhVienXaNhat = "Sinh viên thứ ba xa trường nhất";
            }
        }
    // b3 : các dữ liệu đầu ra

    document.getElementById('result4').innerText=`👉 ${sinhVienXaNhat}`;

};