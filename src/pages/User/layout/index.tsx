import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: any
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;