import { Entity, ObjectIdColumn, ObjectId, Column} from "typeorm";

@Entity('reflection')
export class Reflection {
    @ObjectIdColumn()
    _id: string;

    @Column()
    user_id: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @Column()
    status: number;
}
