/* //**Fonksiyonlar Bölüm Sonu Çalışmaları */
/* let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
}

decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    counterDOM.innerHTML=counter
    this.id == "increase" ? counter = counter += 1 : counter = counter -= 1 // increase'e bak. Eğer increase işlemi geliyorsa counter'ı 1 artır, yoksa 1 azalt.
    
} */


/* //** Bir fonksiyonu ters çevirmek
function reverseNumber(n) {
    n=n+""
    return n.split('').reverse().join('')
}
console.log(Number(reverseNumber(23456)))
console.log(String(reverseNumber("evin bahçesi")))

 */



/* //**Geçilen bir dizgenin palindrom olup olmadığını kontrol etmek
Palindrom, ileriye doğru aynı şekilde geriye doğru okunan bir kelime, cümle veya dizidir
function checkPalindrom(strEntry) {
var cstr = strEntry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
var ccount=0;
if(ccount===""){
    console.log("Nothing found")
    return false;
}
if ((cstr.length)%2===0) {
    ccount=(cstr.length)/2
} else {
    if(cstr.length===1) {
        console.log("Entry is a palindrome.")
        return true;
    } else {
        ccount=(cstr.length-1)/2
    }
}
for(i=0;i<ccount;i++) {
    if (cstr[i]!=cstr.slice(-1-i)[0]) {
        console.log("Entry is not a palindrome")
        return false;
    }
}
console.log("The entry is a palindrome")
return true;
}
checkPalindrom('madam')
checkPalindrom('nursesrun')
checkPalindrom('fox')
 */




/* // ** Bir 'JavaScript işlevi'ni parametre olarak iletmek için bir JavaScript programı
function addStudent(refreshCallback) {
    refreshCallback()
}

function refreshStudentList() {
    console.log('Hello')
}
addStudent(refreshStudentList) */




//** Girdi olarak ülke adları listesini kabul eden ve çıktı olarak en uzun ülke adlarının adını döndüren bir JavaScript işlevi
/* function uzunUlkeAdiBul(ulkeler) {
    return ulkeler.reduce(function(lname,country){
        return lname.length >country.length?lname:country;
    },"")
}
console.log(uzunUlkeAdiBul(["Avustralya","Almanya","Amerika Birleşik Devletleri"])) */


/* //**Üçgenin çevresini hesaplama(a+b+c)
let sides = []
let cevreHesaplama = sides => {
    let [a, b, c] = sides;
    let sp = (a + b + c)
    return sp
}
console.log(cevreHesaplama ([6,8,10]))
 */



/* 
//**Üçgenin alanını hesaplama ( (taban uzunluk*yükseklik)/2 )
let hesapla = []
let alanhesapla = hesapla => {
    let [uzunluk, yukseklik] = hesapla
    const sonuc = ((uzunluk * yukseklik) / 2)
    return sonuc
}
console.log(alanhesapla([5,6])) */




/* //* Bir argüman nesnesi, for döngüsü kullanılarak yinelenebilir.
function ShowMessage() {
    for (let i = 0; i <arguments.length; i++) {
        alert(arguments[i])
    }
}
ShowMessage("Steve","Jobs",100) */



/* 
//* Bir işlev, return anahtar sözcüğünü kullanarak sıfır veya bir değer döndürebilir.
function yeniNesne(ilk,son) {
    return sonuc=(ilk+son)
}
console.log(yeniNesne(10,20)) //30
*********

function mmultiply(yeni,eski){
    return sonuclar=(yeni*eski)
}
console.log(mmultiply(10)) //NaN
console.log(mmultiply(10,20)) //200
********

function yeniDeger(yeni1,eski1=50){
    return sonuclar=(yeni1*eski1)
}
console.log(yeniDeger(10)) // 500 (10*50)
console.log(yeniDeger(10,20)) //200 (10*20)
**********


function Sum(val1, val2) {
    return val1 + val2;
};
var result = Sum(10, 20); // returns 30
function Multiply(val1, val2) {
    console.log(val1 * val2);
};
result = Multiply(10, 20); // 200
*/



////////////////////////////////
//program to print the text
//declaring a function
/* function greet(name) {
    console.log("Hello "+name+"."+" How are you?");
}


//veriable name can be different
let name1=prompt("Enter a name:")

//calling function
greet(name1); */