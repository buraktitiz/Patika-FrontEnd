/* ******** Arrow Function Kullanımı */

function hello(firsName) {
    console.log(`Merhaba ${firsName}`)
}
hello("JavaScript")

const helloFuncV1 = (firsName) => {
    console.log(`Merhaba ${firsName}`)
}
// 1. function diye yazdığımızı const diye tanımlıyoruz. Aslında bir değişken tanımlama gibi çalışıyor
// 2. ='den sonra içine girdiğimiz olan parametreyi belirttik (firstName). Parametreyi belirttikten sonra path arrow(=>) ile bir fonksiyon işlemi olduğunu belirtip return'ü de süslü parantez içine yazdık.
helloFuncV1("helloFuncV1")




const helloFuncV2 = firsName => console.log(`Merhaba ${firsName}`) // bir parametre bir dönüş işlemi 
helloFuncV2("helloFuncV2")



const helloFuncV3 = (firsName, lastName) => console.log(`Merhaba ${firsName} ${lastName}`)
helloFuncV3("helloFuncV3", "Last Name info") // birden fazla değişken var ama tek bir tane işlem olduğu için süslü parantez kullanmaya gerek duymuyoruz



const helloFuncV4 = (firsName, lastName) => { // birden fazla değişken olduğu için süslü parantezleri kullanıyoruz.
    let info = `Merhaba ${firsName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("helloFuncV4", "Other Info")