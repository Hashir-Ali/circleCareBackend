import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity('userCompletedQuestionnaire')
export class UserQuestionnaire {
    @ObjectIdColumn()
    _id: string;

    @Column()
    user_id: string;

    @Column()
    questionnaire_id: string;

    @Column()
    question_id: string;

    @Column()
    selected_options: {en: string; ar?: string} | {en: string; ar?: string}[];
}
