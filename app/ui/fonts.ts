import { Inter, Lusitana } from 'next/font/google';

// next/font会在build时，将字体缓存到静态文件中
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
