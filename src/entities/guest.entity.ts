import { Room } from './room.entity'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany
} from 'typeorm'
import { RoomManagement } from './roomManagement.entity'
import { Booking } from './booking.entity'

@Entity('guest')
export class Guest {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 70})
    name: string

    @Column({unique: true})
    cpf: string

    @Column()
    phone_number: string

    @Column()
    nationality: string

    @Column()
    emergency_contact: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @OneToOne(() => Room, (room) => room.ocupation_guest, {nullable: true})
    @JoinColumn()
    room: Room

    @OneToMany(() => RoomManagement, (manager) => manager.guest)
    @JoinColumn()
    historic_guest: RoomManagement[]

    @OneToMany(() => Booking, (booking) => booking.guest)
    @JoinColumn()
    historic_booking: Booking[]
}