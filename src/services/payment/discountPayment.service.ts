import AppDataSource from "../../data-source";
import { RoomManagement } from "../../entities/roomManagement.entity";
import { AppError } from "../../errors/appError";
import { IPaymentRequest } from "../../interfaces/payment.interface";

const discountPaymentService = async ({privileges, discount}: IPaymentRequest, id: string) => {
    const managerRepository = AppDataSource.getRepository(RoomManagement);

    const findManager = await managerRepository.findOneBy({
        id
    });
    if(!findManager){
        throw new AppError('Manager not found', 404);
    }

    await managerRepository.update(id, {
        privileges: privileges ? privileges : findManager.privileges,
        discount: discount ? discount : findManager.discount
    });

    const managerUpdated = await managerRepository.findOneBy({
        id
    });

    return managerUpdated!;
};

export default discountPaymentService;