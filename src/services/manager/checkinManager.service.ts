import { v4 as uuidv4 } from "uuid";
import AppDataSource from "../../data-source";
import { Guest } from "../../entities/guest.entity";
import { Room } from "../../entities/room.entity";
import { RoomManagement } from "../../entities/roomManagement.entity";
import { AppError } from "../../errors/appError";
import { ICheckinRequest } from "../../interfaces/manager.interface";

const checkinManagerService = async ({guest_id, room_id}: ICheckinRequest) => {
    const managerRepository = AppDataSource.getRepository(RoomManagement);
    const guestRepository = AppDataSource.getRepository(Guest);
    const roomRepository = AppDataSource.getRepository(Room);

    const findGuest = await guestRepository.findOne({
        relations: {
            room: true
        },
        where:{
            id: guest_id
        }
    })
    if(!findGuest){
        throw new AppError('Guest not found', 404);
    }

    const findRoom = await roomRepository.findOneBy({
        id: room_id
    });
    if(!findRoom){
        throw new AppError('Room not found', 404);
    }

    if(findRoom.status != 'disponível'){
        throw new AppError('This room is not available', 401);
    }

    if(findGuest.room != null){
        throw new AppError('This guest is already in a room', 401);
    }

    await guestRepository.update(guest_id, {
        room: findRoom
    });

    await roomRepository.update(room_id, {
        status: 'ocupado',
        ocupation_guest: findGuest
    });

    const manager = managerRepository.create({
        checkin: new Date(),
        eletronic_key: uuidv4(),
        room: findRoom,
        guest: findGuest
    });

    await managerRepository.save(manager);

    return manager;
};

export default checkinManagerService;