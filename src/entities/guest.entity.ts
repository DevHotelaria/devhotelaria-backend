import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm'

@Entity('guest')
export class Guest {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 70})
    name: string

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
}