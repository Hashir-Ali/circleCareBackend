import { Entity, ObjectIdColumn, ObjectId, Column} from "typeorm";

@Entity('painAssesment')
export class PainAssesment {

    @ObjectIdColumn()
    _id: string;

    @Column()
    user_id: string;

    @Column()
    date: Date;

    @Column()
    category: string;

    @Column()
    time: string;

    @Column()
    scale: number;
}
