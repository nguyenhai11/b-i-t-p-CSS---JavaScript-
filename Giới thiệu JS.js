--Giới thiệu JavaScript
.JavaScript có thể thay đổi nội dung HTML
Một trong nhiều phương pháp HTML JavaScript là getElementById()
ví dụ 
<!DOCTYPE html>
<html>
<body>
<h2> Bạn muốn tìm hiểu về JavaScript?</h2>
<p id="demo">JavaScript can change HTML content</p>
<button type="button" onclick='document.getElementById("demo").innerHTML ="Hello JavaScript!"'>Click Me!</button>
</body>
</html>

--JavaScript có thể thay đổi giá trị thuộc tính HTML
Trong ví dụ này, JavaScript thay đổi giá trị của srcthuộc tính (nguồn) của <img>thẻ:

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html>

--JavaScript có thể ẩn các phần tử HTML
việc có thể ẩn các phần tử html có thể được thực hiện bằng cách thay đôit display kiểu

ví dụ
<!DOCTYPE html>
<html>
<body>
<h2>What Can JavaScript Do?</h2>
<p id="demo">JavaScript can hide HTML elements.</p>
<button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>
</body>
</html> 

--JavaScript có thể hiển thị các phần tử HTML
Việc hiển thị các phần tử HTML ẩn cũng có thể được thực hiện bằng cách thay đổi displaykiểu:
<!DOCTYPE html>
<html>
<body>
<h2>What Can JavaScript Do?</h2>
<p>JavaScript can show hidden HTML elements.</p>
<p id="demo" style="display:none">Hello JavaScript!</p>
<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button>
</body>
</html> 






