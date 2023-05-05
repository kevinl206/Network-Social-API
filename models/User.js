const { Schema, model } = require('mongoose');
// Schema to create user model
// const UserSchema = new Schema(
//     {
//         username: {
//             type: String,
//             required: true,
//             unique: true,
//             trim: true,
            
//         },
//         email: {
//             type: String,
//             required: true,
//             unique: true,
//             trim: true,
//             match: [
//                 /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//                 "Please input a valid email address",
//             ],
//         },
//         thoughts: [
//             {
//               type: Schema.Types.ObjectId,
//               ref: "Thought",
//             },
//           ],
//           friends: [
//             {
//               type: Schema.Types.ObjectId,
//               ref: "User",
//             },
//           ],
//         },
//         {
//           toJSON: {
//             virtuals: true,
//           },
//           id: false,
//         }
// );
// // Create a virtual property friendCount 
// UserSchema.virtual("friendCount").get(function () {
//     return this.friends.length;
//   });
//   // create the User model using the UserSchema
//   const User = model('User', UserSchema);
//   // export the User model
//   module.exports = User;

  




  // Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //regular expression to check if it's a valid email address
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
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
const User = model("User", userSchema);
// export the User model
module.exports = User;