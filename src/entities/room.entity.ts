import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
    OneToOne,
} from 'typeorm'
import { RoomManagement } from './roomManagement.entity'
import { Booking } from './booking.entity'
import { Guest } from './guest.entity'

@Entity('room')
export class Room {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({name: "number_room", unique: true})
    numberRoom: string

    @Column()
    status: string

    @OneToOne(() => Guest, (guest) => guest.room)
    @JoinColumn()
    ocupation_guest: Guest

    @OneToMany(() => RoomManagement, (manager) => manager.room)
    @JoinColumn()
    historic_room: RoomManagement[]

    @OneToMany(() => Booking, (booking) => booking.room)
    @JoinColumn()
    historic_booking: Booking[]
}