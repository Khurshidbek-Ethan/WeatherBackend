import mongoose, { Schema } from 'mongoose'
import { MemberStatus, MemberType } from '../libs/enums/member.enum'

// Schema first
const memberSchema = new Schema(
	{
		memberType: {
			type: String,
			enum: MemberType,
			default: MemberType.USER,
		},

		memberStatus: {
			type: String,
			enum: MemberStatus,
			default: MemberStatus.ACTIVE,
		},

		memberName: {
			type: String,
			index: { unique: true, sparse: true },
			required: true,
		},

		memberSurname: {
			type: String,
			index: { unique: true, sparse: true },
			required: true,
		},

		memberUserName: {
			type: String,
			index: { unique: true, sparse: true },
			required: true,
		},
		memberPassword: {
			type: String,
			select: false,
			required: true,
		},
	},
	{ timestamps: true } // updatedAt, createdAt
)
// member schema model class yasadik. va bu database bn 100 da 100 bogliq.
export default mongoose.model('Member', memberSchema)
