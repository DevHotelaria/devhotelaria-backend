import AppDataSource from "../../data-source"
import { Room } from "../../entities/room.entity"
import { AppError } from "../../errors/appError";
import { IRoomRequest } from "../../interfaces/room.interface";

const createRoomService = async ({numberRoom, description}: IRoomRequest) => {
    const roomRepository = AppDataSource.getRepository(Room);

    const roomAlreadyExists = await roomRepository.findOneBy({
        numberRoom
    })
    if(roomAlreadyExists) {
        throw new AppError('Room already exists');
    }

    const room = roomRepository.create({
        numberRoom: numberRoom,
        status: 'disponível',
        description
    })

    await roomRepository.save(room);

    return room;
};

export default createRoomService;