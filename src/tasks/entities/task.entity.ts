import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity('task')
export class Task {
    @ObjectIdColumn()
    _id: string;

    @Column()
    task_title: string;

    @Column()
    task_text: string;

    @Column()
    task_type: string;

    @Column()
    task_date: string;

    @Column({default: true})
    is_active: boolean;

    @Column({default: false})
    is_done: boolean;

    @Column({default: false})
    is_video: boolean;

    @Column({default: ''})
    video_link: string;

    @Column({default: ''})
    img_thumbnail: string;

    @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
    date_added: string;

    @Column()
    added_by: string;

}
