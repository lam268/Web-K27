// var biến global, dùng ít nhất có thể 
// let biến cục bộ, nếu thay đổi thì sẽ dùng let
// const biến cục bộ, ưu tiên const hơn 

const mystring = 'Test string1';
const mystring2 = "Test string2";
const mystring3 = `
Test string3
Test string3
${mystring}
`; // ưu tiên dùng dấu nháy này 

const Mynumber = 4;
const Mynumber2 = 2.5;

const t = true;
const f = false;

const funtion1 = (a, b, c) // cacs tham số gọi trong hàm
    => { //logic
} // câu lệnh gọi hàm () => {}
const myarray = {1, 2, 3};
const arrayLength = myarray.length;
const firstItem = myarray[0];

const myobject{
    name: 'Lam',
    age: 22,
    address: {
        city: 'Ha Noi',
        country: 'Viet Nam',
    },
};

myname = myobject.name;
mycity = myobject.address.city;
myobject.name = `Test`;

console.log('Heloo World');

// so sánh ở trên java có 2 kiểu 
// === là so sánh cả kiểu dữ liệu lẫn giá trị còn như bth chỉ là so sánh giá trị 
// !== 
// toán tử so snahs vẫn như trên c 

if (condition) {
    // logic if condition true
} else if {
    //logic if condition flase
}

for (let i=0; i < 10; i += 1) {
    //logic
}

for (let item of myarray) { // khai báo biến item được java thay đổi mỗi lần thực hiện vòng lặp 
    //logic
}


