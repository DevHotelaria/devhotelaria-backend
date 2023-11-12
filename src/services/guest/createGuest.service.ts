import AppDataSource from "../../data-source";
import { Guest } from "../../entities/guest.entity";
import { AppError } from "../../errors/appError";
import { IGuestRequest } from "../../interfaces/guest.interface";

const createGuestService = async ({name, phone_number, nationality, emergency_contact, cpf}: IGuestRequest) => {
    const guestRepository = AppDataSource.getRepository(Guest);

    const guestAlreadyExists = await guestRepository.findOneBy({
        cpf
    });
    if(guestAlreadyExists){
        throw new AppError('Guest already exists');
    }

    const guest = guestRepository.create({
        name,
        phone_number,
        nationality,
        emergency_contact,
        cpf
    });

    await guestRepository.save(guest);

    return guest;
}

export default createGuestService;