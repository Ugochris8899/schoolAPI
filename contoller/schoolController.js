const schoolModel = require("../model/schoolModel")


//to create school data

const createSchool = async(req, res) =>{
    try {
       const createdSchool =  await schoolModel.create(req.body)
       res.status(200).json({
        message:"school has been created", data:createdSchool
       }) 
    } catch (error) {
        res.status(404).json(error.message)  
    }
}

const getAll = async(req, res) => {
    try {
        const AllSchool = await schoolModel.find();
        res.json({message: "The available School Users are" + AllSchool.length, data:AllSchool});
    } catch (error) {
        res.status(404).json(error.message) 
    }
}

const getOne = async(req, res) =>{
    const school_Id = req.params.id;
    const getOneSchool_id = await  schoolModel.findById(school_Id)
    res.status(200).json(getOneSchool_id)
}

//   //Update an existing school
//   const updateSchool= async(req, res) =>{
//     try{
//         const userId = req.params.id
//         const newUser = await schoolModel.findById(userId);

//         const updatedUser = {
//           name: req.body.name || newUser.name,
//           address: req.body.address || newUser.address,
//           email: req.body.email || newUser.email,
//           population: req.body.population || newUser.population,
//           director: req.body.director || newUser.director,
//           extraActivities: {
//             sports: req.body.extraActivities.sports || newUser.extraActivities.sports,
//             dance: req.body.extraActivities.dance || newUser.extraActivities.dance,
//             isFree: req.body.extraActivities.isFree || newUser.extraActivities.isFree,

//           },
          
//           courses: req.body.courses || newUser.courses,
//           isPublic: req.body.isPublic || newUser.isPublic
//         }
//           await schoolModel.updateOne(updatedUser);
//           if(updatedUser) {
//             res.status(200).json(updatedUser);
//         } else {
//             res.status(400).json( {
//                 Error: "Error updating newUser."
//             })
//         }
//     } catch (e) {
//         res.status(400).json({
//             Message: e.message
//         })
    
//     }
// }


const updateSchool= async(req, res) =>{
    try{
        const userId = req.params.id
        const newUser = await schoolModel.findById(userId);

        const updatedUser = {
          name: req["body"]["name"] || ["newUser"]["name"],
          address: req["body"]["address"] || ["newUser"]["address"],
          email: req["body"]["email"] || ["newUser"]["email"],
          population: req["body"]["population"] || ["newUser"]["population"],
          director: req["body"]["director"] || ["newUser"]["director"],
          extraActivities: {
            sports: req["body"]["extraActivities"]["sports"] || ["newUser"]["extraActivities"]["sports"],
            dance: req["body"]["extraActivities"]["dance"] || ["newUser"]["extraActivities"]["dance"],
            isFree: req["body"]["extraActivities"]["isFree"] || ["newUser"]["extraActivities"]["isFree"]},
          
          courses: req["body"]["courses"] || ["newUser"]["courses"],
          isPublic: req["body"]["isPublic"] || ["newUser"]["isPublic"]
        }
          await schoolModel.updateOne(updatedUser);
          if(updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(400).json( {
                Error: "Error updating newUser."
            })
        }
    } catch (e) {
        res.status(400).json({
            Message: e.message
        })
    
    }
}



  //deleting a single user
  const deleteSchool = async(req, res)=>{
    const id = req.params.id
    const deleteUser = await schoolModel.findByIdAndDelete((id))

    res.status(200).json(
        {message:`the information of the user with the id of ${id}, has been deleted`,
    data: deleteUser}
    )
 }

    



module.exports = {
    createSchool,
    getAll,
    getOne,
    updateSchool,
    deleteSchool
}