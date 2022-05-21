
//Object
let Leptop = {
    Model:'Sumsung',
    Guaranty: 2,
    Production: 'South Korea',
    color: 'black',
    CPU: '2.5GHz',
    Cores: '16 cores',
    RAM:'8 GB',
    'Windows version': 'Windows 11 pro',
    computer:{
         Model:'HP',
         Guaranty: 1.5,
         Production: 'USA',
         color: 'white',
         CPU: '4GHz',
         Cores: '16 cores',
         RAM:'8 GB',
        'Windows version': 'Windows 10 pro',
    }
}

//copying
let Leptop1 ={
    ...Leptop
};

//Destructuring
let {HP, Guaranty, Production, color, CPU, Cores, RAM, Windows} = Leptop1;

//Delete object
delete Leptop.Guarant;




// function handleChange
function handleChange(key, value){
    Leptop1[key] = value;
}
console.log(Leptop1)

handleChange('update', 'new version',
             'cores', '24cores')

//function
function  car(name, manifucture, color, model, engine, weight, exp_date){
    let car = {
        name, manifucture, color, model, engine, weight, exp_date
    }
    return car
}
let mercedes = car('Mercedes', 'Germany', 'black','AMG', 6.3, 2480, 2022);
console.log(mercedes);
