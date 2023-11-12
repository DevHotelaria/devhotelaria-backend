import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn
} from 'typeorm'
import { Guest } from './guest.entity'
import { Room } from './room.entity'

@Entity('room_management')
export class RoomManagement {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    checkin: Date

    @Column({nullable: true})
    checkout: Date

    @Column()
    eletronic_key: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @ManyToOne(() => Guest, (guest) => guest.historic_guest)
    @JoinColumn()
    guest: Guest

    @ManyToOne(() => Room, (room) => room.historic_room)
    @JoinColumn()
    room: Room
}