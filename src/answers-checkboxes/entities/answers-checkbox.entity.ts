import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity('checkboxes')
export class AnswersCheckbox {
    @ObjectIdColumn()
    _id: string;

    @Column()
    question_id: string;

    @Column()
    text: {en: string; ar?: string};

    @Column()
    options: {en: string; ar?: string}[];
}
