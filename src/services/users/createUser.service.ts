import bcrypt from 'bcrypt';
import AppDataSource from '../../data-source';
import { AppError } from '../../errors/appError';
import { User } from '../../entities/user.entity';
import { IUserRequest } from '../../interfaces/user.interface';

const createUserService = async({name, type_user, password}: IUserRequest) => {
    const userRepository = AppDataSource.getRepository(User);
    
    const users = await userRepository.find();
    const userAlreadyExists = users.find((user) => user.name === name);
    if(userAlreadyExists){
        throw new AppError('User already exists')
    }

    if(type_user != 'administrador' && type_user != 'gerente' && type_user != 'atendente'){
        throw new AppError('User type is not valid', 401)
    }
 
    const user = userRepository.create({
        name,
        type_user,
        password: bcrypt.hashSync(password, 10)  
    });
    await userRepository.save(user);

    return user;
}

export default createUserService;