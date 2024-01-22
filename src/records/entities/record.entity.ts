import { Entity, ObjectIdColumn, ObjectId, Column} from "typeorm";

@Entity('record')
export class Record {

    @ObjectIdColumn()
    _id: string;

    @Column()
    user_id: string;

    @Column()
    record_date: Date;

    @Column()
    BP_systole: number;

    @Column()
    BP_diastole: number;

    @Column()
    sugar_level: number;

    @Column()
    sleeping_hours: number;

    @Column()
    weight: number;

}
