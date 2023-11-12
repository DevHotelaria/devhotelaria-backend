import AppDataSource from "../../data-source";
import { Room } from "../../entities/room.entity";
import { AppError } from "../../errors/appError";
import { IRoomUpdate } from "../../interfaces/room.interface";

const updateRoomService = async ({numberRoom, status}: IRoomUpdate, id: string) =>{
    const roomRepository = AppDataSource.getRepository(Room);

    const findRoom = await roomRepository.findOneBy({
        id
    });

    if(!findRoom){
        throw new AppError('Room not found', 404);
    }

    if(numberRoom){
        const numberRoomAlreadyExists = await roomRepository.findOneBy({
            numberRoom
        });

        if(numberRoomAlreadyExists){
            throw new AppError('Room already exists');
        }
    }

    if(status){
        if(
            status != 'reservado' && 
            status != 'ocupado' && 
            status != 'sujo' && 
            status != 'em manutenção' && 
            status != 'disponível'
            ){
            throw new AppError('Status is not valid', 401);
        }
    }

    await roomRepository.update(id, {
        numberRoom: numberRoom ? numberRoom : findRoom.numberRoom,
        status: status ? status : findRoom.status
    });

    const roomUpdated = await roomRepository.findOneBy({
        id
    });

    return roomUpdated!;
};

export default updateRoomService;