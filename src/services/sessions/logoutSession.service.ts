import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';

const logoutSessionService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
        id
    });

    if(!user.is_connected) {
        throw new AppError('This user is not logged in', 401);
    }

    await userRepository.update(id, {
        is_connected: false
    })

    return;
};

export default logoutSessionService;