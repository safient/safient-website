import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <div className=''>
      {/* <Header /> */}

      <main className=''>{props.children}</main>

      <Footer />
    </div>
  );
}
