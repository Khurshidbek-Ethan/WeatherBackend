import mongoose, { Schema } from 'mongoose'

const shamolSchema = new Schema(
	{
		shamolWindSpeed: {
			type: Number,
		},
		shamolHexCode: {
			type: Number,
		},
	},

	{ timestamps: true }
)
export default mongoose.model('Shamol', shamolSchema)
