import AppDataSource from "../../data-source"
import { Room } from "../../entities/room.entity"
import { AppError } from "../../errors/appError";

const deleteRoomService = async (id: string) => {
    const roomRepository = AppDataSource.getRepository(Room);

    const findRoom = await roomRepository.findOneBy({
        id
    });
    
    if(!findRoom) {
        throw new AppError('Room not found', 404);
    }

    await roomRepository.delete(id);

    return;
};

export default deleteRoomService;