var money = prompt ('Введите бюджет на месяц');
var time = prompt ('Введите дату в формате YYYY-MM-DD');

var appData = {
budget: money,
timeData: time,
expenses:{
    
},
optionalExpenses:{},
income:[],
savings:false,
};

// for (let i = 0;i < 2;i++){
    
//     let a = prompt ('Введите обязательную статью расходов в этом месяце'),
//          b = prompt ('Во сколь это обойдется');
//   if (  (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a !="" && b !="" && a.length<50){
//     console.log("done");
//     appData.expenses[a]=b;
//   }else{}
// }
let i=0
// while( i<2){
//     let a = prompt ('Введите обязательную статью расходов в этом месяце'),
//          b = prompt ('Во сколь это обойдется');
//   if (  (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a !="" && b !="" && a.length<50){
//     console.log("done");
//     appData.expenses[a]=b;
//   }else{}
//   i++;

// }
do{
    let a = prompt ('Введите обязательную статью расходов в этом месяце'),
    b = prompt ('Во сколь это обойдется');
if (  (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a !="" && b !="" && a.length<50){
console.log("done");
appData.expenses[a]=b;
}else{}
}while (++i<2)

appData.moneyPerDay = appData.budget /30
alert("ЕЖЕДНЕВНЫЙ БЮДЖЕТ:" + appData.moneyPerDay);
if (appData.moneyPerDay<100){
    console.log("Бомж");
}else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
console.log("Средний");
} else if (appData.moneyPerDay>2000){
    console.log('Красавчик');
} else {
    console.log('Ошибка');
}

