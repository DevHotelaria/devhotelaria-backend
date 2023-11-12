import AppDataSource from "../../data-source"
import { RoomManagement } from "../../entities/roomManagement.entity"
import { AppError } from "../../errors/appError";

const paidPaymentService = async (value: number, id: string) => {
    const managerRepository = AppDataSource.getRepository(RoomManagement);

    const findManager = await managerRepository.findOneBy({
        id
    });
    if(!findManager){
        throw new AppError('Manager not found', 404);
    }

    const totalValue = (findManager.accommodation_days * findManager.daily_rate) - findManager.discount;

    if(value < totalValue){
        throw new AppError('This amount is not enough to pay', 401);
    }

    await managerRepository.update(id, {
        is_paid: true
    });

    const findUpdated = await managerRepository.findOneBy({
        id
    });

    return findUpdated!;
};

export default paidPaymentService;