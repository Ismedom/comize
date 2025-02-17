import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { CartsModule } from './modules/carts/carts.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [AuthModule, UsersModule, ProductsModule, CartsModule, PaymentsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
