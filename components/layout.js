import Header from './header';
import Footer from './footer';

export default function Layout(props) {
  return (
    <div className=''>
      {/* <Header /> */}

      <main className=''>{props.children}</main>

      <Footer />
    </div>
  );
}
