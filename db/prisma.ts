import { PrismaClient } from '@prisma/client';

// Khởi tạo Prisma Client cho PostgreSQL local (không cần Neon adapter)
export const prisma = new PrismaClient().$extends({
  result: {
    product: {
      price: {
        needs: { price: true },
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        needs: { rating: true },
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});

// Đảm bảo đóng kết nối khi ứng dụng tắt
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});