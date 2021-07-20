import Head from 'next/head'
import Calculator from '../src/components/Calculator'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Splitter | Tip Calculator</title>
        <meta name="description" content="Tip calculator splitter app challenge from frontendmentor.io" />
      </Head>

      <main>
        <h1>
          Spli<br />tter
        </h1>
        <Calculator />
      </main>
    </div>
  )
}
