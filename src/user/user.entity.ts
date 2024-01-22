import { Entity, ObjectIdColumn, ObjectId, Column} from "typeorm";

@Entity('user')
export class User {
    @ObjectIdColumn()
    _id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    gender: string;

    @Column()
    dob: string;

    @Column()
    age: number;

    @Column()
    is_under_18: boolean;

    @Column()
    marital_status: string;

    @Column()
    email: string;

    @Column()
    password: string;


    @Column({default: 0})
    is_google: boolean;

    @Column({default: 0})
    is_facebook: boolean;

    @Column({default: 0})
    is_icloud: boolean;

    @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
    date_registered: string;
}