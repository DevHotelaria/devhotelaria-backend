import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';

const profileUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
        id
    });

    return user!;
};

export default profileUserService;