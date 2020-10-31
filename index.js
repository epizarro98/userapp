const { InvalidConnectionError } = require('sequelize/types')
const db = require('./models')
const pet = require('./models/pet')
const user = require('./models/user')

// db.user.create({
//     firstName: 'Fatima',
//     lastName: 'Gomez',
//     age: 1
// })
// .then(createdUser=>{
    //     // the create promise returns the new row
    //     // of data that has been created
    //     // (otherwise it throws an error)
    //     console.log('Created User: ', createdUser)
    // })
    
    // db.user.findAll()
    // .then(foundUsers=>{
        //     // callback recieves array of users from table
        //     console.log('Found Users:', foundUsers)
        // })
        
        // db.user.findOne({
            //     where: {firstName:'Taylor'}
            // }).then(foundUser=>{
                //     console.log('found user:', foundUser.dataValues.firstName)
                // })
                
                // db.user.findOrCreate({
//     where: {
//         firstName: 'Mateen',
//         lastName: null
//     },
//     defaults: {
//         email: 'mateen@isthecoolest.com',
//         age: 345
//     }
// })
// .then(([foundOrCreatedUser, created])=>{
//     console.log('found or created user: ', foundOrCreatedUser)
//     console.log('Already existed in database?', !created)
// })

// db.user.update({
//     age: 25
// },
// {
//     where: {
//         firstName: 'Fatima'
//     }
// }).then(numRowsChanged=>{
//     console.log(numRowsChanged)
// })

// db.user.destroy({
//     where: {firstName: 'Fatima'}
// })
// .then(numRowsDeleted=>{
//     console.log(numRowsDeleted)
// })


// db.user.findOne({
//     where: {firstName: 'Fatima'}
// })
// .then(foundUser=>{
//     console.log('adding pet to this user:', foundUser.firstName)
//     foundUser.createPet({
//         name: 'slimy',
//         species: 'giant toad',
//         descripton: 'he takes anti-anxiety meds',
//     })
//     .then(createdPet =>{
//         console.log('just created:', createdPet)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

// db.user.create({
//     firstName: 'Fatima',
//     lastName: 'Gomez',
// })

db.user.findByPk(4)
.then(foundFatima=>{
    foundFatima.getPets()
    .then(fatimasPets=>{
        console.log('Fatimas farm',)
        fatimasPets.forEach(pet=>{
            console.log(pet.name)
        })
    })
})

// db.pet.findOrCreate({
//     where: {name: 'simba'},
//     default: {
//         species: 'Ginger cat',
//         description: 'maniac'
//     }
// })
// .then(([pet, created])=>{
//     db.user.findByPk(4)
//     .then(foundFatima=>{
//         foundFatima.addPet(pet)
//         console.log(`${foundFatima.firstName} is`)
//     })
// })


// db.user.findAll({
//     include: [db.pet]
// })
// .then(foundUsers=>{
//     //each ude will noe have a ,petys array contaiing anty associated pets
//     user.forEach(user=>{
//         console.log(`${user.firstName}'s farm:`)
//         user.pets.forEach(pet=>{
//             console.log(pet.name)
//         })
//     })
// })


//first get 
// db.pet.findOrCreate({
//     where: {
//         name: 'rick',
//     },
//     default: {
//         species: 'dog',
//         description: 'silly'
//     }
// })
// .then(([pet, created])=>{
//     //second get a refecer 
//     db.toy.findOrCreate({
//         where: {type: 'Snowman', color: 'dirty off white'}
//     })
//     .then(([toy, created])=>{
//         pet.addToy(toy)
//         .then(createdRelation=>{
//             console.log('createdRelation:', createdRelation)
//             console.log(`${toy.type} added to ${pet.name}`)
//         })
//     })
// })

// db.toy.findByPk(1)
// .then(foundToy=>{
//     foundToy.getPets()
//     .then(foundPets=>{
//         console.log(`${foundPets.length} pets love the ${foundToy.type}`)
//     })
// })
db.pet.findOne()({//returns first pet w this findOne
    include: [db.user, db.toy]
})
.then(foundPet=>{
    pet.toy.forEach(toy=>{
        console.log(`${foundPet.user.firstName}pet, ${foundPet.name}, loves their ${toy.type}`)
    })
})

//first find user
// db.findOne({
//     where: {firstName: 'Taylor'},
// })
// .then(foundUser=>{

// db.pet.findByPk(2)
// .then(foundPet=>{
//     foundUser.addPet(foundPet)
//     .then(newRelation=>{
//         console.log('new relation:' newRelation)
//         })
//     })
// })

db.pet.findByPk(2)
    .then(foundPet=>{
        db.toy.findOne()
        .then(petWithNewToy=>{
            consolr.log('petWToy', petWithNewToy)
        })
    })