//- создать массив с 20 числами.
//-- при помощи метода sort и колбека  отсортировать массив.
//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//-- при помощи filter получить числа кратные 3
//-- при помощи filter получить числа кратные 10
//-- перебрать (проитерировать) массив при помощи foreach()
//-- перебрать массив при помощи map() и получить новый массив в котором 
//все значения будут в 3 раза больше

//let numbers = [1,4,6,5,70,88,12,-7,44,654,400,67,7,8,98,330,12,43,2,1]

//let sort = numbers.sort((a,b)=>{
//console.log(a)
//console.log(b)
//return a-b})
//console.log(sort)

//let sort2 = numbers.sort((a,b)=>{
    //console.log(a)
    //console.log(b)
    //return b-a})
    //console.log(sort2)

//let numbers1= numbers.filter((value)=>{
//return value%3==0})
//console.log(numbers1)

//let numbers2= numbers.filter((value)=>{
   // return value%10==0})
    //console.log(numbers2)


//let numbers3=numbers.forEach((value)=>{
//console.log(value) 
//})

//let numbers4 =[]
//let map = numbers.map((value,index)=>{
   // return value*3

//})
//console.log(map)


//- создать массив со словами на 15-20 элементов.
//-- отсортировать его по алфавиту в восходящем порядке.
//-- отсортировать его по алфавиту  в нисходящем порядке.
//-- отфильтровать слова длиной менее 4х символов
//-- перебрать массив при помощи map() и получить новый массив в
// котором все значения будут со знаком "!" в конце

//let str = ['english', 'is', 'a','west', 'germanic', 'language',
 //'that', 'was', 'first', 'spoken', 'in', 'early', 'medieval', 'england', 
 //'and', 'eventually', 'became', 'a', 'global', 'lingua' ]

 //let sortstr1= str.sort((a,b)=>{
     //if(a<b){
     //return -1}else {return 1}
 //})
// console.log(sortstr1)


//let sortstr2= str.sort((a,b)=>{
    //if(a<b){
     //return 1}else {return -1}
// })
 //console.log(sortstr2) 


 //let sortlength = str.filter(word=>word.length<4)
 //console.log(sortlength)


//let strmap = str.map((value)=>{
   // return value+'!'
//})
//console.log(strmap)

//Все робити через функції масивів (foreach, map ...тд)
//Дан масив :
//let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//- відсортувати його за  віком (зростання , а потім окремо спадання)
//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує 
//унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти
// це в новий масив (первинний масив залишиться без змін)
//- відсортувати його за індентифікатором


//let users = [ {name: 'vasya', age: 31, status: false}, 
//{name: 'petya', age: 30, status: true}, 
//{name: 'kolya', age: 29, status: true}, 
//{name: 'olya', age: 28, status: false},
//{name: 'max', age: 30, status: true},
//{name: 'anya', age: 31, status: false},
//{name: 'oleg', age: 28, status: false},
//{name: 'andrey', age: 29, status: true}, 
//{name: 'masha', age: 30, status: true}, 
//{name: 'olya', age: 31, status: false}, 
//{name: 'max', age: 31, status: true} ];



//let agelist = users.sort((a,b)=>{
// return a.age-b.age
//})
//console.log(agelist)



//let agelist1 = users.sort((a,b)=>{
   // return b.age-a.age    
  // })
  // console.log(agelist1)



   //let namelist2 = users.sort((a,b)=>{   
      // if (a.name.length<b.name.length){
          // return-1
       //}else{return 1}
  // })
   //console.log(namelist2)



  // let namelist3 = users.sort((a,b)=>{ 
    //if (a.name.length<b.name.length){
       // return 1
    //}else{return -1}
//})
//console.log(namelist3)


//let users1=JSON.stringify(users)
//let usrescopy =JSON.parse(users1)
   // usrescopy.forEach((element,i)=>
//{
     //element.id=i+1
    
    //return element})

//console.log(users)
//console.log(usrescopy)


//let usresidsort = usrescopy.sort((a,b)=>{ 
    //if (a.id<b.id){
        //return 1
    //}else{return -1}
//})
//console.log(usresidsort)


//-- наисать функцию калькулятора с 2мя числами и колбеком
//-- наисать функцию калькулятора с 3мя числами и колбеком



//function calculate(a,b,callback){
   // console.log(callback (a,b))
//}
//calculate(10,20,function(a,b){
    //return a+b
//})



//function calculate(a,b,c,callback){
   // console.log(callback (a,b,c))
//}
//calculate(10,20,30,function(a,b,c){
    //return a+b+c
//})



//Відфільтрувати масив за наступними крітеріями :
//- двигун більше 3х літрів
//- двигун = 2л
//- виробник мерс
//- двигун більше 3х літрів + виробник мерседес
//- двигун більше 3х літрів + виробник субару
//- сили більше ніж 300
//- сили більше ніж 300 + виробник субару
//- мотор серіі ej
//- сили більше ніж 300 + виробник субару + мотор серіі ej
//- двигун меньше 3х літрів + виробник мерседес
//- двигун більше 2л + сили більше 250
//- сили більше 250  + виробник бмв

//let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
//{producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
//{producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//{producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
//{producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
//{producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
//{producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
//{producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
//{producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
//{producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
//{producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
//{producer:"mercedes",model: "e63",year:2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
//{producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

//let cars1= cars.filter((value)=>{
//return value.volume>3})
//console.log(cars1)


//let cars2= cars.filter((value)=>{
   // return value.volume==2})
   // console.log(cars2)

 //let cars3= cars.filter((value)=>{
    //return value.producer=="mercedes"})
    //console.log(cars3)  
    
//let cars3= cars.filter((value)=>{if(value.volume>3)
    //return value.producer=="mercedes" })
    //console.log(cars3)  

 //let cars4= cars.filter((value)=>{if(value.volume>3)
     //return value.producer=="subaru"})
    //console.log(cars4)  
    
    //let cars5= cars.filter((value)=>{
    //return value.power>300})
       // console.log(cars5)   

//let cars6= cars.filter((value)=>{if(value.power>300)
    //return value.producer=="subaru" })
    //console.log(cars6)    
    
 //let cars7= cars.filter((value)=>{
    //return value.engine.startsWith('ej')
//})
    //console.log(cars7)

//let cars8= cars.filter((value)=>{if(value.power>300&&value.engine.startsWith('ej') )    
    //return value.producer=="subaru" })
    //console.log(cars8)  

 //let cars9= cars.filter((value)=>{if(value.volume<3)
    //return value.producer==="mercedes" })
    //console.log(cars9)     

   // let cars10=cars.filter((value)=>{if(value.volume>2)
       // return value.power>250})
       // console.log(cars10)

    // let cars11=cars.filter((value)=>{if(value.power>250)
        //return value.producer=="bmw"})
       //console.log(cars11)   


       //- взять слдующий массив
       //-- отсортировать его по id пользователей
       //-- отсортировать его по id пользователей в обратном опрядке
       //-- отсортировать его по возрасту пользователей
       //-- отсортировать его по возрасту пользователей в обратном порядке
       //-- отсортировать его по имени пользователей
       //-- отсортировать его по имени пользователей в обратном порядке
       //-- отсортировать его по названию улицы  в алфавитном порядке
       //-- отсортировать его по номеру дома по возрастанию
       //-- отфильтровать (оставить) тех кто младше 30
       //-- отфильтровать (оставить) тех у кого отрицательный статус
       //-- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
       //-- отфильтровать (оставить) тех у кого номер дома четный     

       //let usersWithAddress = 
//[{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//{id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//{id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
//{id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
//{id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
//{id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//{id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
//{id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
//{id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
//{id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//{id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

//let usersWithAddress1 = usersWithAddress.sort((a,b)=>{ 
    //if (a.id<b.id){
       // return 1
    //}else{return -1}
//})
//console.log(usersWithAddress1)

//let usersWithAddress2 = usersWithAddress.sort((a,b)=>{ 
    //if (a.id<b.id){
        //return -1
    //}else{return 1}
//})
//console.log(usersWithAddress2)

//let usersWithAddress2 = usersWithAddress.sort((a,b)=>{
    //return a.age-b.age    
    //})
   //console.log(usersWithAddress2)
 
   //let usersWithAddress2 = usersWithAddress.sort((a,b)=>{
    //return b.age-a.age    
    //})
   //console.log(usersWithAddress2)

//let usersWithAddress3 = usersWithAddress.sort((a,b)=>{ 
    //if (a.name<b.name){
        //return -1
    //}else{return 1}
//})
//console.log(usersWithAddress3)   
   
//let usersWithAddress4 = usersWithAddress.sort((a,b)=>{ 
    //if (a.name<b.name){
        //return 1
    //}else{return -1}
//})
//console.log(usersWithAddress4)      

  //let usersWithAddress5 = usersWithAddress.sort((a,b)=>{ 
    //if (a.address.street<b.address.street){
        //return -1
    //}else{return 1}
//})
//console.log(usersWithAddress5)  

//let usersWithAddress6 = usersWithAddress.sort((a,b)=>{ 
    //if (a.address.number<b.address.number){
        //return -1
    //}else{return 1}
//})
//console.log(usersWithAddress6) 

//let usersWithAddress7= usersWithAddress.filter((value)=>{
//return value.age<30})
    //console.log(usersWithAddress7) 

 //let usersWithAddress7= usersWithAddress.filter((value)=>{
//return value.status==false})
    //console.log(usersWithAddress7) 

 //let usersWithAddress8= usersWithAddress.filter((value)=>{if (value.status==false)
    //return value.age<30})
    // console.log(usersWithAddress8)       

   //let usersWithAddress9= usersWithAddress.filter((value)=>{
//return value.address.number%2==0})
    //console.log(usersWithAddress9) 
    //ejrhfwerhu 
//wejhfwejkrhf
    