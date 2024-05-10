import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  return (

    <>
      <Image
        src={'/logo.png'}
        width={250}
        height={120}
        alt='teste'
      />

      Bem vindo à página de documentações da Looplex
      
      <br />

      <button onClick={() => router.push('/v1/actions')}>
        Actions v1
      </button>

      <br />

      <button onClick={() => router.push('/v1/assembler')}>
        Assembler v1
      </button>

      <br />

      <button onClick={() => router.push('/v1/looplex365')}>
        Looplex 365 v1
      </button>

      <br />

      <button onClick={() => router.push('/v1/cases')}>
        Cases v1
      </button>

      <br />

      <button onClick={() => router.push('/v2/varas_foros')}>
        Varas e Foros v2
      </button>

    </>
  )

}

