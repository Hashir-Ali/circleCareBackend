import { Entity, ObjectIdColumn, ObjectId, Column} from "typeorm";

@Entity('question')
export class Question {
    @ObjectIdColumn()
    _id: string;

    @Column()
    quiz_id: string;

    @Column()
    text: {en: string; ar: string};

    @Column()
    answer_type: number; // 0 is select one choice (radios) and 1 is multiple options (dropdowns)..

    @Column()
    date_added: string;
}
