import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity('userTasks')
export class UserTask {
    @ObjectIdColumn()
    _id: string;

    @Column()
    task_id: string;

    @Column()
    user_id: string;

    @Column({default: false})
    user_done: boolean;

    @Column({default: false})
    user_delete: boolean;

    @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
    date_updated: string;
}
