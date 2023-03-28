const { Schema, model } = require('mongoose');

// Schema to create user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please input a valid email address",
            ],
        },
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: "Thought",
            },
          ],
          friends: [
            {
              type: Schema.Types.ObjectId,
              ref: "User",
            },
          ],
        },
        {
          toJSON: {
            virtuals: true,
          },
          id: false,
        }
);
// Create a virtual property friendCount 
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });
  // create the User model using the UserSchema
  const User = model('User', userSchema);
  // export the User model
  module.exports = User;