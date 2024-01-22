import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity('AnswersMultipleChoice')
export class AnswersMultipleChoice {
    @ObjectIdColumn()
    _id: string;

    @Column()
    question_id: string;

    @Column()
    text: {en: string; ar?: string};
}
