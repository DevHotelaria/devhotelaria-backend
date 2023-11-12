import AppDataSource from "../../data-source"
import { Guest } from "../../entities/guest.entity";
import { Room } from "../../entities/room.entity";
import { RoomManagement } from "../../entities/roomManagement.entity"
import { AppError } from "../../errors/appError";

const checkoutManagerService = async (manager_id: string) => {
    const managerRepository = AppDataSource.getRepository(RoomManagement);
    const guestRepository = AppDataSource.getRepository(Guest);
    const roomRepository = AppDataSource.getRepository(Room);

    const findManager = await managerRepository.findOne({
        relations: {
            guest: true,
            room: true
        },
        where: {
            id: manager_id
        }
    });
    if(!findManager){
        throw new AppError('Room not found', 404);
    }

    await guestRepository.update(findManager.guest.id, {
        room: null
    });

    await roomRepository.update(findManager.room.id, {
        status: 'sujo',
        ocupation_guest: null
    });

    await managerRepository.update(manager_id, {
        checkout: new Date()
    });

    const managerUpdated = await managerRepository.findOne({
        relations: {
            guest: true,
            room: true
        },
        where: {
            id: manager_id
        }
    });

    return managerUpdated!;
};

export default checkoutManagerService;