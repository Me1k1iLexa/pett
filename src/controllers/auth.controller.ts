import {Request, Response} from "express";
import bcrypt from 'bcrypt'
import prisma from "../utils/prisma";
import {z} from "zod";

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export const register = async (req: Request, res: Response) => {
    try {
        const parsed = registerSchema.safeParse(req.body);
        if (!parsed.success) {
            res.status(400).json({ error: "Invalid request" });
            return
        }

        const { email, password } = parsed.data;

        const existingUser = await prisma.user.findUnique({where: {email}});
        if (existingUser) {
             res.status(400).json({ error: "User already exists" });
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data:{
                email,
                password: hashedPassword,
            },
        })
         res.status(200).json({ id: user.id, email: user.email})
    }
    catch(err) {
        console.error(err);
         res.status(500).json({ error: "Internal Server Error" });
    }
}