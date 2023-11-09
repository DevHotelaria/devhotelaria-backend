import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('room')
export class Room {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({name: "number_room", unique: true})
    numberRoom: number

    @Column()
    status: string
}