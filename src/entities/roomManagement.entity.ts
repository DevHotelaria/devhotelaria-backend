import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity('room_management')
export class RoomManagement {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    checkin: Date

    @Column()
    checkout: Date

    @Column()
    eletronic_key: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date
}