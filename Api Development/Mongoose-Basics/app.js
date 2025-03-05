const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://pv9868:pv98682025@clustermongobasic.mq7na.mongodb.net/').then(() => {
    console.log("Database connected Successfully");
}).catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now }
});


// create user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
    try {

        // create a new document 
        /* 
                const newUser = await User.create({
                    name: 'Karan',
                    email: 'Karan@gmail.com',
                    age: 25,
                    isActive: true,
                    tags: ['Developer', 'Designer', 'Manager'],
                });
                  const newUser = new User({
                    name: 'Aman',
                    email: 'Aman@gmail.com',
                    age: 30,
                    isActive: true,
                    tags: ['Constructor', 'Builder', 'Manager'],
                });
        
                await newUser.save();
                console.log("Created New User", newUser); 
        
                // get all User
                const allUser = await User.find({});
        
                console.log("All Users",allUser);
             
                const newUser = await User.create({
                    name : 'John Doe',
                    email : 'JohnDoe@gmail.com',
                    age : 45 ,
                    isActive : false ,
                    tags : ['Plumber','Hardware Worker','Mechanic']
                });
        
                console.log("New USer Created Successfully",newUser); 
        
                const giveUserActiveFalse = await User.find({isActive:true});
        
                console.log("Getting user active false",giveUserActiveFalse);

        // now this method which we are going to call here only give me one result whichever comes first in database

        

        const getJohnDoeUser = await User.findOne({name:'John Doe'});

        console.log(getJohnDoeUser);
        const user = await User.create({
            name: "Travis Doe",
            email: "TravisDoe@gmail.com",
            age: 30,
            isActive: true,
            tags: ["Plumber", "Hardware Worker", "Mechanic"]
        })

        console.log("User Save Successfullly", user);

        const getLastCreatedUserByUserID = await User.findById('67aeedafa966411149a93c83');
        console.log("Last USer id is : - ",getLastCreatedUserByUserID);

        // -_id means don't include id property here
        const selectedFields = await User.find().select('name email -_id');

        console.log("Selected Fileds are : -",selectedFields);

        // limit user after skipping 1st user
        const limitedUsers = await User.find().limit(5).skip(1);
        console.log("limited Users :-",limitedUsers);

        // here if we set the age -1  so it is showing me the data in descending order now 
        // like age is now going 50 , 40, 30 , 20 ,10 ;
        const sortedUser = await User.find().sort({age : -1});

        console.log("Sorted User :- ",sortedUser);

        // doing total documents count where is active true
        const countDocument = await User.find().countDocuments({isActive:true});
        console.log(countDocument);

        // delete a data from the database
        const deletedUser = await User.findByIdAndDelete('67aeed1cc46d826f1e273c48');

        console.log("Deleted User from Database :- ",deletedUser);

        // update a particular data in database

        const singleUser = await User.findById('67aef19b629d62a96c83eec9');

        console.log("Previous Data here",singleUser);
        

        const updateData = await User.findByIdAndUpdate('67aef19b629d62a96c83eec9',{
            $set : {age : 101,isActive:true} , $push : {tags : 'latest Value Pushed'}
        },{new : true});

        console.log("Updated The age Data here :- " , updateData);
         try {
            const updatedUser = await User.findByIdAndUpdate(
                '67aef19b629d62a96c83eec9', 
                { $pop: { tags: -1 } },  // 1 removes the last item from the array and -1 to first item
                { new: true }  // Return the updated document
            );
    
            if (!updatedUser) {
                console.log('User not found');
            } else {
                console.log('Updated user:', updatedUser);
            }
        } catch (error) {
            console.error('Error removing last tag:', error);
        } */
    
            
        
    } catch (e) {
        console.log('Error -> ', e);

    } finally {
        mongoose.connection.close();
    }
};

runQueryExamples();