/* //Array yapısına öge eklemek ve Array içerisinden istenilen ögenin çıkarılması */

let items = [10, 20, 30, 40];
console.log("items - ilk hali:  ", items);


//**Array: sona öge/eleman eklemek ->push
items.push(50)
console.log("50", items);


//**Array: sona öge/eleman eklemek ->unshift
items.unshift(5)
console.log("5", items);


//**Array: sondaki ögeyi çıkarmak -> pop 
let lastName = items.pop() // son elemanı lastName içine ekledik
console.log("lastName: ", lastName, "items: ", items);


//**Array: sondaki ögeyi çıkarmak -> shift
let firstName = items.shift() // ilk elemanı firstName içine ekledik
console.log("firstName: ", firstName, "items: ", items);

//**Array içindeki bir ögenin bilgisinin değiştirilmesi
//**ilk ögenin değiştirilmesi
items[0] = 5; // ilk elemanı 10'du 5 yaptık
console.log(items)

//**son ögenin değiştirilmesi
items[items.length - 1] = 100 //son elemanı 40'tı. 40'ı silip 100'le değiştirdik
console.log(items)


//** Tanımlamaları doğru yapmamız çok önemlidir. Örneğin;
items[2] = 1000
console.log(items) // yazarsak 2. index'ine 1000 ögesini eklemiş olacağız. Bu kullanımda farkedilmeyebilir fakat 

items[10000] = 789
console.log(items) // yaparsak on bininci(10000) ögenin değeri 789 olacaktır. Bu yüzden tanımlamalar önemlidir.



//**Arrayin başından itibaren seçilecek kadar eleman silmek -> splice
//splice: Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.
let sports = ['basketbol', 'futbol', 'voleybol']
console.log(sports)


sports.splice(1, 1) // 1. indexten itibaren 1 tane ögeyi sil anlamına gelir. Yani 1. öge olan futbol silinir. Ve konsola basketbol ve voleybol yazar.
console.log(sports)


/* //** splice metodu da pop ve shift gibi, sildiği elemanı geriye döndürür. ancak pop ve shift geriye silinen elemanın türünde değer döndürür, splice ise geriye dizi şeklinde sonuç döndürür. */