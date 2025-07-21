const people = {
  users: [
    {
      firstName: "Rahul",
      lastName: "Kumar",
      gender: "male",
      age: 25
    },
    {
      firstName: "Priya",
      lastName: "Sharma",
      gender: "female",
      age: 30
    },
    {
      firstName: "Amit",
      lastName: "Verma",
      gender: "male",
      age: 22
    },
    {
      firstName: "Sneha",
      lastName: "Sinha",
      gender: "female",
      age: 28
    }
  ]
};
people.users.forEach(users=>{
    if(users.gender==="male"){
        console.log(users.firstName)
    }
})