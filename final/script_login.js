
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var postalCode = document.forms["myForm"]["postalCode"].value;
    var email = document.forms["myForm"]["email"].value;

    // 检查氏名是否为空
    if (name === "") {
        alert("请输入氏名。");
        return false;
    }

    // 检查邮政编码是否为7位数字
    if (!/^\d{7}$/.test(postalCode)) {
        alert("请输入有效的7位邮政编码。");
        return false;
    }

    // 检查邮箱地址是否有效
    if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(email)) {
        alert("请输入有效的邮箱地址。");
        return false;
    }

    // 如果通过验证，进行重定向到另一个页面
    if (name !== "" && /^\d{7}$/.test(postalCode) && /^[\w\.-]+@[\w\.-]+\.\w+$/.test(email)) {
        window.location.href = "main.html"; // 请替换为实际的URL
        return false; // 防止表单提交
    }
}
