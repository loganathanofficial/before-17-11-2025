

//! Assignment question on Array of objects

let students = [
    {
        rollno:7,
        grade:'B',
        class:9,
        contri:100
    },
    {
        rollno:6,
        grade:'C',
        class:8,
        contri:500
    },
    {
        rollno:5,
        grade:'B',
        class:9,
        contri:10
    },
    {
        rollno:8,
        grade:'C',
        class:8,
        contri:200
    },
    {
        rollno:16,
        grade:'A',
        class:10,
        contri:100
    },
]

function filterByClass(arr , clas){
    return arr.filter((el)=>el.class === clas)
}
let filterclass8 = filterByClass(students , 8)
console.log(filterclass8)
let filterclass9 = filterByClass(students , 9)
console.log(filterclass9)
let filterclass10 = filterByClass(students , 10)
console.log(filterclass10)

function filterEvenRollno(arr){
    return arr.filter((el)=>el.rollno%2 === 0)
}
let evenRollNumbers = filterEvenRollno(students);
console.log(evenRollNumbers)

function filterbyGrade(arr , grade){
    return arr.filter((el)=>el.grade.toLowerCase() === grade.toLowerCase())
}
let filterAGrade = filterbyGrade(students , 'A')
console.log(filterAGrade)
let filterBGrade = filterbyGrade(students , 'B')
console.log(filterBGrade)
let filterCGrade = filterbyGrade(students , 'C')
console.log(filterCGrade)

//! totalContri

// let totalContri = students.reduce((acc , el)=>{
//       return acc+el.contri;
// } , 0)
// console.log(totalContri)

//! upgrade the grades by 1
let updatedGrades = {
    'A':'A++',
    'B':"A",
    'C':"B"
}

let updatedGradesArray = students.map((el)=>{
    return {...el , grade:updatedGrades[el.grade]};
})
console.log(updatedGradesArray)c