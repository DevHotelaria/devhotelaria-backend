import AppDataSource from "../../data-source";
import { Guest } from "../../entities/guest.entity";
import { AppError } from "../../errors/appError";
import { IGuestUpdate } from "../../interfaces/guest.interface";

const updateGuestService = async ({ name, phone_number, nationality, emergency_contact, cpf}: IGuestUpdate, id: string) => {
    const guestRepository = AppDataSource.getRepository(Guest);

    const findGuest = await guestRepository.findOneBy({
        id
    });

    if(!findGuest){
        throw new AppError('Guest not found', 404);
    }

    if(cpf) {
        const cpfAlreadyExists = guestRepository.findOneBy({
            cpf
        });

        if(cpfAlreadyExists){
            throw new AppError('Guest already exists');
        }
    }

    await guestRepository.update(id, {
        name: name ? name : findGuest.name,
        phone_number: phone_number ? phone_number : findGuest.phone_number,
        nationality: nationality ? nationality : findGuest.nationality,
        emergency_contact: emergency_contact ? emergency_contact : findGuest.emergency_contact,
        cpf: cpf ? cpf : findGuest.cpf
    })

    const guestUpdated = guestRepository.findOneBy({
        id
    });

    return guestUpdated!;
};

export default updateGuestService;