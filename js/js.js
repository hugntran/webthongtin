    document.getElementById("thongtin").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const sothich = document.getElementById("sothich").value;
    const gioithieu = document.getElementById("gioithieu").value;
  
    let el = true;
  
    if (name.length == 0 || name.length > 30) {
      alert("Nhập tối đa 30 ký tự và không để trống.");
      el = false;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Email không hợp lệ.");
      el = false;
    }
  
    if (!/^\d+$/.test(phone)) {
      alert("Chỉ nhập số.");
      el = false;
    }
  
    if (gender.length == 0 || gender.length > 3) {
      alert("Không quá 3 ký tự hoặc để trống.");
      el = false;
    }
  
    if (el) {
      const ver1 = document.querySelector(".fom");
      const ver2 = document.createElement("div");
  
      ver2.innerHTML = 
        `<h2>Thông tin của bạn: </h2>
        <p><strong>Họ tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Giới tính:</strong> ${gender}</p>
        <p><strong>Sở thích:</strong> ${sothich}</p>
        <p><strong>Giới thiệu bản thân:</strong> ${gioithieu}</p>`;
  
      ver1.style.display = "none";
      ver1.parentNode.insertBefore(ver2, ver1.nextSibling);
    }
  });
  