import AppDataSource from "../../data-source"
import { Guest } from "../../entities/guest.entity"

const listGuestService = async () => {
    const guestRepository = AppDataSource.getRepository(Guest);

    const guests = await guestRepository.find()

    return guests;
};

export default listGuestService;
