import Head from 'next/head'

export default function Home() {
  return (
    <div className=' w-screen h-screen flex justify-center items-center bg-black'>
      <Head>
        <title>Randomly - Home</title>
        <link rel="icon" href="D:/Documents/projects/selfpro/randomly/public/favicon.ico" />
      </Head>
      <h1 className=' text-2xl text-white'>Initialization</h1>
    </div>
  )
}
