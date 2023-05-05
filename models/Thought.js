const { Schema, model } = require('mongoose');
// import moment module to format the timestamp 
const moment = require('moment');
const reactionSchema = require("./Reaction");
// thought schema
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
      },
  
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) =>
          moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
      },
  
      username: {
        type: Schema.Types.String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        getters: true,
      },
      id: false, 
    }
  );


thoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length;
})

// create the User model using the UserSchema
const Thought = model('Thought', thoughtSchema);
// export the Thought model
module.exports = Thought;