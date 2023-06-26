/* eslint-disable @next/next/no-sync-scripts */
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
};

export default RootLayout;
