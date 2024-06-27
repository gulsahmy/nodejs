"use strict"

// const exampleObject = {
//     propertyName: 'value', //property, attribute, field
//     propertyArray: [],
//     propertyObject: {},

//     //obje içindeki fonksiyonlara method denir.

//     methodName: function () {
//         return 'this is a method'
//     },

//     // Alternatif yazım:
//     methodAlternative () {
//         return 'method-2'
//     },
// }

// // nokta notasyonmu ile değerler çağrılabilir

// console.log(exampleObject.propertyName)
// console.log(exampleObject.methodName())

/* ----------------------------------------------------- *

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['red', 'white'],
    details: {
        color1:'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param = '1') {
        console.log(param)
        return 'Engine started.'
    }
}
console.log(Car)
console.log(Car.brand)
console.log(Car.colors)
console.log(Car.colors[1])
console.log(Car.details)
console.log(Car.details.engineSize)
console.log(Car.startEngine())
console.log(Car.startEngine(2))

console.log(Car['brand'])
console.log(Car['colors'][1])
console.log(Car['details']['engineSize'])
console.log(Car['startEngine'](3))





/* ----------------------------------------------------- *

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['red', 'white'],
    details: {
        color1:'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param = '1') {
        console.log(param)
        return 'Engine started.'
    },
    getDetails: function() {
        // console.log(this)
        // return this.details
        // return this.startEngine()
        return this.brand+' '+this.startEngine()+this.model+' '+this.year+' '+this.colors[1]+' '+this.startEngine()
    },
    arrowMethod: () => {
        console.log(this)
    }
}

console.log(Car.getDetails())
console.log(Car.arrowMethod())

/* ------------------------------------------------- *

const testArray = ['value0', 'value1', 'value2', 'value3', 'value4'] 

// const test0 = testArray[0]
// const test1 = testArray[1]
// const test2 = testArray[2]
// // const test3 = testArray[3]
// // const test4 = testArray[4]


// const testPart = testArray.slice(3, 5)
// console.log(test0, test1, test2, testPart)

// const [var0, var1, ...varPart] = testArray
// console.log(var0, var1, varPart)



//rest operator (toplayıcı)
const [var0, var1, ...varPart] = testArray
console.log(var0, var1, varPart)

//spread operator (dağıtıcı)
const newArr = [...testArray, 'value5', 'value6']
console.log(newArr)
/* ----------------------------------------------------- */

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['red', 'white'],
    details: {
        color1:'red',
        color2: 'white',
        engineSize: 5000
    },
    startEngine: function(param = '1') {
        console.log(param)
        return 'Engine started.'
    },
}

    // const { brand, year, model, ...others } = Car
    // console.log(brand, year, model, others)

    // const { brand, year, model:newName, ...others } = Car
    // console.log(newName)

    // const newObj = { ...Car, newKey: 'newValue'}
    // console.log(newObj)

    // object to json

    // console.log(typeof Car, Car)
    // const json = JSON.stringify(Car)
    // console.log(typeof json, json)

    // // json to object

    // const obj = JSON.parse(json)
    // console.log(obj)

    // Array to JSON

    // const arr = Object.keys(Car)
    // // console.log(arr)

    // // const arr = Object.values(Car)
    // // console.log(arr)

    // //const arr = Object.entries(Car) // enumarateType
    // console.log(arr)

    // const arrToJSON = JSON.stringify(arr)
    // console.log(arrToJSON)

    // const jsonToArr = JSON.parse(arrToJSON)
    // console.log(typeof jsonToArr, jsonToArr)


    // console.log(typeof true, true)
    // console.log(typeof 1234, 1234)
    // console.log(typeof 'string', 'string')
    // console.log(typeof null, null)
    // console.log(typeof undefined, undefined)
    // console.log(typeof [], [])
    // console.log(typeof {}, {})
    // console.log(typeof function() {}, function() {})

    // const test = String('new-value')
    // console.log(typeof test, test)
/* ----------------------------------------------------- */

    // constructor function

    const carConstructor = function (brand, model, year = 2000){
        this.brand=brand
        this.model=model
        this.year=year

        this.startEngine = function () {
            //console.log(this)
            return 'Engine started.'
        }

    }

    const Ford = new carConstructor('Ford', 'Mustang', 1967)
    console.log(Ford)

    const Mercedes = new carConstructor('Mercedes', 'CLK200', 2015)
    console.log(Mercedes)
    console.log(Mercedes.brand)
    console.log(Mercedes.startEngine())















/* ----------------------------------------------------- */
/* ----------------------------------------------------- */
/* ----------------------------------------------------- */

