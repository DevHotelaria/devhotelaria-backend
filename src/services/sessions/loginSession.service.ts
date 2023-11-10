import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import AppDataSource from '../../data-source';
import { AppError } from '../../errors/appError';
import { User } from '../../entities/user.entity';
import { ILoginSession } from '../../interfaces/session.interface';

const loginSessionService = async ({name, password}: ILoginSession) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
        name
    });

    if(!user) {
        throw new AppError('Invalid email or password', 403);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
        throw new AppError('Invalid email or password', 403);
    }

    const token = jwt.sign({id: user.id, type_user: user.type_user}, process.env.SECRET_KEY as string, {
        expriresIn: '24h'
    });

    return token;
};

export default loginSessionService;