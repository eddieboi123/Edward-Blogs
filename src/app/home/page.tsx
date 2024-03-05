import Navbar from '@/components/navbar'

export default function home() {
  const links = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Portofolio',
      url: '#'
    },
    {
      name: 'Portofolio',
      url: '#'
    },
    {
      name: 'Portofolio',
      url: '#'
    }
  ]

  return (
    <main>
      <Navbar title="LESGO" links={links} />






    </main>

  );
}