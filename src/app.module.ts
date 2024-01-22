import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GoogleStrategy } from './auth/google.strategy';
import { AuthModule } from './auth/auth.module';
import { DiscoverModule } from './discover/discover.module';
import { ReflectionModule } from './reflection/reflection.module';
import { TasksModule } from './tasks/tasks.module';
import { UserTasksModule } from './user-tasks/user-tasks.module';
import { RecordsModule } from './records/records.module';
import { PainAssesmentModule } from './pain-assesment/pain-assesment.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { QuestionsModule } from './questions/questions.module';
import { QuestionAnswersModule } from './question-answers/question-answers.module';
import { AnswersMultipleChoiceModule } from './answers-multiple-choice/answers-multiple-choice.module';
import { AnswersCheckboxesModule } from './answers-checkboxes/answers-checkboxes.module';
import { UserQuestionnaireModule } from './user-questionnaire/user-questionnaire.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    })
    ,
    JwtModule.register({
      secret: 'your-secret-key', // Replace with your secret key
      signOptions: { expiresIn: '1h' }, // Adjust the expiration time as needed
    }),
    UserModule, AuthModule, DiscoverModule, ReflectionModule, TasksModule, UserTasksModule, RecordsModule, PainAssesmentModule, QuestionnaireModule, QuestionsModule, QuestionAnswersModule, AnswersMultipleChoiceModule, AnswersCheckboxesModule, UserQuestionnaireModule],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
