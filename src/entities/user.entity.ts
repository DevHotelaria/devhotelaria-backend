import { Exclude } from 'class-transformer'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('user')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 50})
    name: string

    @Column()
    type_user: string

    @Exclude()
    @Column()
    password: string
}