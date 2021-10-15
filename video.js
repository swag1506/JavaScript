let info = [
    {
    id: 3,
    name: "Ben",
    surname: "Omeli",
    age: 21,
    department: "software engineer",   
},
{
    id: 1,
    name: "Shon",
    surname: "Omeli",
    age: 21,
    department: "IT specialists",   
},
{
    id: 2,
    name: "Lion",
    surname: "Omeli",
    age: 21,
    department: "Accountants",   
},
{
    id: 4,
    name: "Jon",
    surname: "Omeli",
    age: 21,
    department: "Accountants",   
},
];

// const sortById = (id)=>{
//     // console.log(info.sort((a,b)=> a.id-b.id))
// console.log(info.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase())))


// }
// sortById();


// const deleteByID = (id)=>{
//     console.log(info.filter((value)=>value.id!==id));
// }
// deleteByID(4);



// const updateById =(id)=>{
//     console.log(info.map((value)=>{
//      return   value.id===id? {...value , name:'Mark'}: value
//     }))
// }

// updateById(2);


const updateById=(obj)=>{
   const{ id,name,age}=obj;
   info.map((value) =>{
       if (value.id===id) {
           value.name=name;
           value.age=age;
           console.log({...value});
       } else {console.log(value);
           
       }
   });
  };

  updateById ( {id:3, name:'Rakhmatillo', age:'20'})
