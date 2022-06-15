import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
      </Head>

      <header className="header mt-5 text-warning">hello
        <img src="/images/logo.jpg" alt=""></img>
        <i className="fa-solid fa-phone"></i>
      </header>

      <main className="content">
        <div className="badge">20off</div>
        <div className="badge badge-secondary">new entry</div>
        <div className="badge badge-oversized">%</div>
      </main>

      <footer className="footer"></footer>
    </div>
  )
}
