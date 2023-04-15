// question1
var fullname = "Nguyễn Thế Quyền";
var age = 25;
var string = "T\u00F4i t\u00EAn l\u00E0 ".concat(fullname, ", n\u0103m nay ").concat(age, " tu\u1ED5i, \u0111ang \u1EBF!");
console.log(string);
// question2
var c = 5;
var d = 20;
console.log("T\u1ED5ng c\u1EE7a ".concat(c, " v\u00E0 ").concat(d, " l\u00E0 ").concat(c + d));
// question3
var content = [
    { text: "CHẢ GIÒ NÓN LÁ" },
    { text: "BÒ LÚC LẮC HẠT ĐIỀU" },
    { text: "CÁ TAI TƯỢNG CHIÊN XÙ" },
    { text: "CÁI THÌA SỐT THỊT CUA" },
    { text: "CƠM CHIÊN CÁ MẶN" },
    { text: "LẨU HẢI SẢN" },
    { text: "RAU CÂU" },
];
content.map(function (content, key) {
    var result = "\n        <ol >\n        <li>".concat(content.text, "</li>\n        </ol>\n    ");
    console.log(result);
});
