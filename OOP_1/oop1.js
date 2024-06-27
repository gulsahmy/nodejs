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

/* ------------------------------------------------- */

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
/* ----------------------------------------------------- */
/* ----------------------------------------------------- */
/* ----------------------------------------------------- */
/* ----------------------------------------------------- */

