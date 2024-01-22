import { PartialType } from '@nestjs/swagger';
import { CreateAnswersCheckboxDto } from './create-answers-checkbox.dto';

export class UpdateAnswersCheckboxDto extends PartialType(CreateAnswersCheckboxDto) {}
