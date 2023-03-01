// Nhập phần tử vào mảng:

var NumArray = [];
var ArrayNumberPositive = [];
var NumberEven = [];

function Addnumber() {
    var Num = Number(document.getElementById("Number").value);
    NumArray.push(Num);
    if ( Num >= 0)
    ArrayNumberPositive.push(Num);
    if (Num % 2 == 0)
    NumberEven.push(Num);
    
document.getElementById("Array").innerHTML = NumArray;
}
document.getElementById("addnumber").onclick = Addnumber;

// Tính tổng số dương
document.getElementById("addscore").onclick = function TotalNumberPositive() {
    var total = 0;
    // Duyệt Mảng
    for (var i = 0; i < NumArray.length; i++) {
        if (NumArray[i] > 0) {
            total += NumArray[i];
        }

    }
    document.getElementById("NumberPositive").innerHTML = total;


}

// Đếm số dương
document.getElementById("CountNumberPositive").onclick = function CountNumber() {
    var count = 0;
    for (var i = 0; i < NumArray.length; i++) {
        if (NumArray[i] > 0){
            count++;
        }
        
    }
    document.getElementById("CountNumber").innerHTML = count;

}

// Tìm số nhỏ nhất

document.getElementById("FindNumberMin").onclick = function FindNumberMin (){
    var min = NumArray[0];
    for (var i = 1; i < NumArray.length; i++) {
        if (min > NumArray[i]){
            min = NumArray[i];
        }
        
    }
    document.getElementById("NumberMin").innerHTML = min;
}

// Tìm số dương nhỏ nhất
document.getElementById("FindNumberPositiveMin").onclick = function AddNumPositive (){
var num = ArrayNumberPositive[0];
for(var i = 0;i < ArrayNumberPositive.length ; i++){
    if ( num > ArrayNumberPositive[i] )
    num = ArrayNumberPositive[i];
}
document.getElementById("NumberPositiveMin").innerHTML = num;
}

// Số lẻ cuối cùng

document.getElementById("NumberEven").onclick = function FindNumberEvenLast (){
   
    var num = NumberEven[NumberEven.length - 1];

    document.getElementById("NumberEvenLast").innerHTML = num;
}


// Hoán đổi
document.getElementById("ChangePlaces").onclick = function Change (){
    var Places1 = document.getElementById("Location1").value;
    var Places2 = document.getElementById("Location2").value;
    var value1 = 0;
    var value2 = 0;

    value1 = NumArray[Places1];
    value2 = NumArray[Places2];

    [value1, value2] = [value2, value1];
    // document.getElementById("LastChange").innerHTML = NumArray;
}

// Sắp xếp số


function SortNumber() {
    var NumArrayCopy = [];
    for (var i = 0; i < NumArray.length; i++) {
        NumArrayCopy.push(NumArray[i])
    }

    NumArrayCopy.sort(function(a,b){
            return a - b;
        });
    document.getElementById("LastArrange").innerHTML = NumArrayCopy;

    }
    document.getElementById("Arrange_Btn").onclick = SortNumber;

// Số nguyên tố đầu tiên
function isprime(n){
    let flag = 1;
    if (n <2) return flag = 0;    
    let i = 2;
    while(i < n ){
        if( n % i == 0 ) {
            flag = 0;
            break;
        }
        i++;
    }

    return flag;
}
document.getElementById("FindNumberPrime").onclick = function FindNumberPrime (){
    var NumberPrime = [];
    var Num = NumArray[0];

    for (let i = 0; i < NumArray.length; i++){
        if (isprime(NumArray[i]) == 1)  
        NumberPrime.push( NumArray[i] );
        Num = NumberPrime[0];
      }
    document.getElementById("FirstNumberPrime").innerHTML = Num;
}


// Đếm số nguyên
function AddnumberInt() {
    var Num = Number(document.getElementById("NumberInt").value);
    NumArray.push(Num);
  
    
document.getElementById("ArrayInt").innerHTML = NumArray;
}
document.getElementById("addnumberint").onclick = AddnumberInt;

document.getElementById("CountNumberIntBtn").onclick = function Count (){
    var count = 0;
    for (var i = 0; i < NumArray.length; i++) {
        if (Number.isInteger(NumArray[i]) == true){
            count++;
        }  }  
    document.getElementById("CountNumberInt").innerHTML = count; 

}

// So sánh số dương và âm
document.getElementById("Compare").onclick = function CompareNumber (){
    var number1 = [];
    var number2 = [];
     for (var i = 0; i < NumArray.length; i++) {
        if (NumArray[i] > 0){
            number1.push(NumArray[i]);
            console.log(number1);  
        } else {
            number2.push(NumArray[i]);
            console.log(number2);
        }
       
     }
     if (number1.length > number2.length){
        document.getElementById("ComparisonResults").innerHTML = "Số dương > Số âm";
     } else if (number1.length < number2.length){
        document.getElementById("ComparisonResults").innerHTML = "Số âm > Số dương";
     } else {
        document.getElementById("ComparisonResults").innerHTML = "Số dương = Số âm";

     }
}