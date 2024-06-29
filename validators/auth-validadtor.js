const { z } =  require('zod');


const signupSchema = z.object({
    username: z.string({required_error:"Username is required"}).trim().min(3,{message:" Name must be at lest 3 chars."}).max(20,{message:" Name cant be greater than 20 chars."}),
    email: z.string({required_error:"Email is required"}).email({message:"Invalid email address"}),
    password: z.string({required_error:"Password is required"}).min(8,{message:"Passsword must be greater than 8 chars."}).max(20,{message:"Passsword cant be greater than 20 chars"}),
    phone: z.string({required_error:"Phone is required"}).min(10,{message:"Phone must be greater than 10 chars."}).max(13,{message:"Phone cant be greater than 13 chars."}),
    address: z.string({required_error:"Address is required"}).min(10,{message:"Address muste be at least 10 chars."}),
    is_admin: z.boolean(),
}

);

module.exports = signupSchema;
