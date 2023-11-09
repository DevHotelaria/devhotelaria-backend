import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'

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
}