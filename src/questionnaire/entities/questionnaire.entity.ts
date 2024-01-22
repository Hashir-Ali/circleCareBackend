import { Entity, ObjectIdColumn, ObjectId, Column} from "typeorm";

@Entity('questionnaire')
export class Questionnaire {
    @ObjectIdColumn()
    _id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    month: string;

    @Column()
    date: string;

    @Column({default: ()=>false})
    status: boolean;
}
