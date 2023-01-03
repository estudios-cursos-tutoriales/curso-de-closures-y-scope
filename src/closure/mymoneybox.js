function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const myMoneyBoxAna = moneyBox();
myMoneyBoxAna(10);
myMoneyBoxAna(20);
myMoneyBoxAna(50);


function createPetList() {
    const petList = [];

    return  (info) => info ? petList.push(info) :  petList;

    // return function (newPet){
    //     if(newPet){
    //         petList.push(newPet);
    //     }
    //     return petList;
    // }
}

const myPetList = createPetList();
console.log(myPetList("Michi"));
console.log(myPetList("Manchita"));
console.log(myPetList("Gatiusca"));
console.log(myPetList("Apache"));
console.log(myPetList("Gatis"));
console.log(myPetList("Rayis"));
console.log(myPetList("Don gato"));
console.log(myPetList());