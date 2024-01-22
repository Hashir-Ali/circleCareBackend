import { Entity, ObjectIdColumn, ObjectId, Column} from "typeorm";

@Entity('content')
export class Discover {
    @ObjectIdColumn()
    _id: string;

    @Column()
    type: string;

    @Column()
    title: string;

    @Column()
    image_thumb: string;

    @Column()
    paras: string[];
    
    @Column()
    is_video: boolean;

    @Column()
    is_care: boolean;

    @Column()
    is_active: boolean;

    @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
    date_added: string;


}
