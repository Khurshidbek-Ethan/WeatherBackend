import mongoose, { Schema } from 'mongoose'
import { Harorat } from '../libs/enums/weather.enum'

const weatherSchema = new Schema(
	{
		weatherCity: {
			type: String,
		},

		weatherCountry: {
			type: String,
		},

		weatherLet: {
			type: Number,
		},

		weatherLon: {
			type: Number,
		},
		weatherTemp_c: {
			type: Number,
		},
		weatherTemp_color: {
			type: String,
		},
		weatherWind_kph: {
			type: Number,
		},
		weatherWind_color: {
			type: String,
		},
		weatherCloud: {
			type: Number,
		},
		weatherCloud_color: {
			type: String,
		},
		weatherTemperatura: {
			type: Number,
			enum: Harorat,
		},
	},
	{ timestamps: true }
)
export default mongoose.model('Weather', weatherSchema)
