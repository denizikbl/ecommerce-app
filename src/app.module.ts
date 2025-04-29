import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, ProductsModule, OrdersModule, PaymentsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
