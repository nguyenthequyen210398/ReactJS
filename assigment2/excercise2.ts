// question1
var fullname: string = "Nguyễn Thế Quyền";
var age: number = 25;
var string = `Tôi tên là ${fullname}, năm nay ${age} tuổi, đang ế!`
console.log(string);

// question2
var c: number = 5
var d: number = 20
console.log(`Tổng của ${c} và ${d} là ${c+d}`);

// question3
var content = [
    {text:"CHẢ GIÒ NÓN LÁ"},
    {text:"BÒ LÚC LẮC HẠT ĐIỀU"},
    {text:"CÁ TAI TƯỢNG CHIÊN XÙ"},
    {text:"CÁI THÌA SỐT THỊT CUA"},
    {text:"CƠM CHIÊN CÁ MẶN"},
    {text:"LẨU HẢI SẢN"},
    {text:"RAU CÂU"},
] ;
content.map(function(content, key){
    var result = `
        <ol >
        <li>${content.text}</li>
        </ol>
    `;
    console.log(result);
});


