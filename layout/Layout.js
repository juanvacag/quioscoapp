import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Layout({children, pagina}) {
    console.log(pagina)
    return (
        <>
            <Head>
                <title>Café - ${pagina}</title>
                <meta name="description" content='Quiosco Cafeteria' />
            </Head>

            <div className='md:flex'>
                <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                    <Sidebar />
                </aside>

                <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
                    <div className='p-10'>
                        {children}
                    </div>    
                        
                </main>
            </div>
        </>
    );
  }