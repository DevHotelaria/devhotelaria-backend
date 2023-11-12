import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm'
import { Guest } from './guest.entity'
import { Room } from './room.entity'

@Entity('booking')
export class Booking {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    checkin: Date

    @Column()
    checkout: Date

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @ManyToOne(() => Guest, (guest) => guest.historic_booking)
    @JoinColumn()
    guest: Guest

    @ManyToOne(() => Room, (room) => room.historic_booking)
    @JoinColumn()
    room: Room
}