import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/global.scss';

export const metadata = {
  title: 'Savidya | My Story',
  description: "Savidya's life story",
  icons: {
    icon: '/assets/icons/favicon.png',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
