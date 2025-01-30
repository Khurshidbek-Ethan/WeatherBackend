import mongoose, { Schema } from 'mongoose'

const bulutSchema = new Schema(
	{
		bulutCoverage: {
			type: Number,
		},
		bulutHoxCode: {
			type: Number,
		},
	},
	{ timestamps: true }
)

export default mongoose.model('Bulut', bulutSchema)
