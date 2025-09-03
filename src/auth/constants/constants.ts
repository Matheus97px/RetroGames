import 'dotenv/config';

export const jwtConstants = {
    secret: process.env.JWT_SECRET,
};

console.log('JWT_SECRET:', jwtConstants.secret); // Para debug