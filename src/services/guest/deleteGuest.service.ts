import AppDataSource from "../../data-source"
import { Guest } from "../../entities/guest.entity"
import { AppError } from "../../errors/appError";

const deleteGuestService = async (id: string) => {
    const guestRepository = AppDataSource.getRepository(Guest);

    const findGuest = await guestRepository.findOneBy({
        id
    });

    if(!findGuest) {
        throw new AppError('Guest not found', 404);
    }

    await guestRepository.delete(id);

    return;
};

export default deleteGuestService;