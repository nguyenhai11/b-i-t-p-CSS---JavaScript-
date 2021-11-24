--Đầu ra JavaScript

Khả năng hiển thị JavaScript
JavaScript có thể "hiển thị" dữ liệu theo những cách khác nhau:

Viết vào một phần tử HTML, sử dụng innerHTML.
Viết vào đầu ra HTML bằng cách sử dụng document.write().
Viết vào một hộp cảnh báo, sử dụng window.alert().
Ghi vào bảng điều khiển của trình duyệt bằng cách sử dụng console.log().

--Sử dụng innerHTML
Để truy cập một phần tử HTML, JavaScript có thể sử dụng document.getElementById(id)phương pháp này.

Các idthuộc tính định nghĩa các phần tử HTML. Các innerHTML bất động sản xác định nội dung HTML:

Thí dụ
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>

--Sử dụng document.write ()
Đối với mục đích thử nghiệm, nó là thuận tiện để sử dụng document.write():

Thí dụ
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>

--Sử dụng window.alert ()
Bạn có thể sử dụng hộp cảnh báo để hiển thị dữ liệu:

Thí dụ
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>

--JavaScript Print
JavaScript không có bất kỳ đối tượng in hoặc phương thức in nào.

Bạn không thể truy cập các thiết bị đầu ra từ JavaScript.

Ngoại lệ duy nhất là bạn có thể gọi window.print()phương thức trong trình duyệt để in nội dung của cửa sổ hiện tại.

Thí dụ
<!DOCTYPE html>
<html>
<body>

<button onclick="window.print()">Print this page</button>

</body>
</html>


