import { Schema, model, models} from "mongoose";


const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email already exists!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    image: {
        type: String,
    }
})



// for a express server this is fine but since this is serverless,
// the backend stops and starts only when it needs to run
// User will be created everytime the model starts again.
// to avoid this, we need models, which will store our model
const User = models.User || model("User", userSchema);

export default User;