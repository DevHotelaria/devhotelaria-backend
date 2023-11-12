import { hash } from 'bcrypt';
import AppDataSource from '../../data-source';
import { AppError } from '../../errors/appError';
import { User } from '../../entities/user.entity';
import { IUserUpdate } from '../../interfaces/user.interface';

const updateUserService = async (
    { name, type_user, password }: IUserUpdate,
    id: string
) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({
        id
    });

    if(!findUser){
        throw new AppError('User not found', 404)
    }

    if(name){
        const nameAlreadyExists = await userRepository.findOneBy({
            name
        });

        if(nameAlreadyExists){
            throw new AppError('Name user already exists')
        }
    }

    if(type_user){
        if(type_user != 'administrador' && type_user != 'gerente' && type_user != 'atendente'){
            throw new AppError('User type is not valid', 401)
        }
    }

    await userRepository.update(id, {
        name: name ? name : findUser.name,
        type_user: type_user ? type_user : findUser.type_user,
        password: password ? await hash(password, 10) : findUser.password
    });

    const userUpdated = await userRepository.findOneBy({
        id
    });

    return userUpdated!;
};

export default updateUserService;