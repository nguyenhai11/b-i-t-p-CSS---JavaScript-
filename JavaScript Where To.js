JavaScript Where To

--thẻ <script>
trong HTML và mã JC được chèn vào giữa các thẻ <script> và </script>
ví dụ 
<!DOCTYPE html>
<html>
<body>
<h2>Sơ yếu lí lịch bản thân </h2>
<p id="demo"></p>
<script>
documemt.getElementById("demo").innerHTML="Tôi tên là: Nguyễn Văn A";
</script>
</body>
</html>

--Các chức năng và sự kiện JavaScript
-JavaScript function là một khối mã JavaScript có thể được thực thi khi dược gọi cho 
--JavaScript trong <head> hoặc <body>
bạn có thể nhập bất kì số lượng ệp nào trong tài liệu HTML 
Tập lệnh có thể được đặt trong <body> hoặc trong <head> phần của trang HTML 
Hàm được gọi khi kích chột vào 
ví dụ 
<!DOCTYPE html>
<html>
<body>
<script>
function myFuncition(){
document.getElementById("demo").innerHTML="Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head </h2>
<p id="demo">A paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>
</body>
</html>

--JavaScript trong <body>
JavaScript functionđược đặt trong <body>phần của trang HTML.

vi du
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>

--JavaScript trong <head>
Trong ví dụ này, JavaScript functionđược đặt trong <head>phần của trang HTML.

Hàm được gọi (được gọi) khi một nút được nhấp vào:

Thí dụ
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>


-- JavaScript bên ngoài
Các tập lệnh bên ngoài là thực tế khi cùng một mã được sử dụng trong nhiều trang web khác nhau.
Các tệp JavaScript có phần mở rộng tệp .js .
Để sử dụng tập lệnh bên ngoài, hãy đặt tên của tệp tập lệnh trong thuộc tính src(nguồn) của <script>thẻ:
<!DOCTYPE html>
<html>
<body>
<h2>Demo External JavaScript</h2>
<p id="demo">A Paragraph.</p>
<button type="button" onclick="myFunction()">Try it</button>
<p>This example links to "myScript.js".</p>
<p>(myFunction is stored in "myScript.js")</p>
<script src="myScript.js"></script>
</body>
</html>
Ưu điểm của JavaScript bên ngoài
Đặt tập lệnh vào các tệp bên ngoài có một số lợi thế:

Nó phân tách HTML và mã
Nó làm cho HTML và JavaScript dễ đọc và dễ bảo trì hơn
Các tệp JavaScript được lưu vào bộ nhớ đệm có thể tăng tốc độ tải trang
Để thêm nhiều tệp tập lệnh vào một trang - hãy sử dụng một số thẻ tập lệnh:

--Tài liệu tham khảo bên ngoài
<!DOCTYPE html>
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Click Me</button>

<p>This example uses a full web URL to link to "myScript.js".</p>
<p>(myFunction is stored in "myScript.js")</p>

<script src="https://www.w3schools.com/js/myScript.js"></script>

</body>
</html>

