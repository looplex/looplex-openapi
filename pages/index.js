import { Button, Col, Row } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  return (
    <Row>

      <Col span={4}>
        <Image
          src={'/logo.png'}
          width={250}
          height={120}
          alt='teste'
        />
      </Col>

      <Row style={{ backgroundColor: 'green' }}>
        <Col span={24}>
          Bem vindo à página de documentações da Looplex
        </Col>
      </Row>

        <Button onClick={() => router.push('/v1/actions')}>
          Actions v1
        </Button>

        <Button onClick={() => router.push('/v1/assembler')}>
          Assembler v1
        </Button>

        <Button onClick={() => router.push('/v1/looplex365')}>
          Looplex 365 v1
        </Button>

        <Button onClick={() => router.push('/v1/cases')}>
          Cases v1
        </Button>

        <Button onClick={() => router.push('/v2/varas_foros')}>
          Varas e Foros v2
        </Button>

    </Row>
  );

}

