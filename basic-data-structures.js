// UserProfile.js

const userProfile = {
  firstName: "Amit",
  lastName: "Erandole",
  age: 42,
  hasChildren: false
}

const { firstName, lastName, age, hasChildren } = userProfile

console.log(`Name: ${firstName} ${lastName}`)
console.log(`Age: ${age}`)

const result = hasChildren
  ? `${firstName} has children`
  : `${firstName} has no children`

console.log(result)
