import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './presentation/controllers';
import { MdmVslCntr } from './infrastructure/database/entities/mdm_vsl_cntr.entity';
import typeorm from './infrastructure/database/configDB/typeorm';
import { AppService } from './application/use-cases/app.service';
import { MdmVslCntrModule } from './infrastructure/modules/mdm_vsl_cntr.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    TypeOrmModule.forFeature([MdmVslCntr]),
    MdmVslCntrModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
