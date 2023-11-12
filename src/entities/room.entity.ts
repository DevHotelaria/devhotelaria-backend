import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from 'typeorm'
import { RoomManagement } from './roomManagement.entity'
import { Booking } from './booking.entity'

@Entity('room')
export class Room {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({name: "number_room", unique: true})
    numberRoom: number

    @Column()
    status: string

    @OneToMany(() => RoomManagement, (manager) => manager.room)
    @JoinColumn()
    historic_room: RoomManagement[]

    @OneToMany(() => Booking, (booking) => booking.room)
    @JoinColumn()
    historic_booking: Booking[]
}