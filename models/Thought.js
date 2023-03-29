const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Please enter a thought.',
            minlength: 15,
            maxlength: 500,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [Reaction],
    },
    {
        // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
        // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    // Getter function to get reaction count
    .get(function () {
        return this.reactions.length;
    });

function formatDate(date) { 
    return date.toLocaleString();
}

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
