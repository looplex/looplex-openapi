'use client'

import { Row, Col, Typography, Tabs, Divider, Tag } from "antd"
import Image from 'next/image'

const { Text } = Typography

const apis = [
  {
    key: 'actions',
    label: 'Actions',
    children:
      <>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Endpoints do Actions
        </Text>
        <Divider />
        <a href="/v1/actions" target="_blank">
          Actions v1
        </a>
      </>
  },
  {
    key: 'assembler',
    label: 'Assembler',
    children:
      <>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Endpoints do Assembler
        </Text>
        <Divider />
        <a href="/v1/assembler" target="_blank">
          Assembler v1
        </a>
      </>
  },
  {
    key: 'cases',
    label: 'Cases',
    children:
      <>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Endpoints do Looplex Cases
        </Text>
        <Divider />
        <a href="/v1/cases" target="_blank">
          Cases v1
        </a>
      </>
  },
  {
    key: 'looplex365',
    label: 'Looplex 365',
    children:
      <>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Endpoints do Looplex 365
        </Text>
        <Divider />
        <a href="/v1/looplex365" target="_blank">
          Looplex 365 v1
        </a>
      </>
  },
  {
    key: 'varas_foros',
    label: 'Varas e Foros',
    children:
      <>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Endpoints de Varas e Foros
        </Text>
        <Divider />
        <a href="/v2/varas_foros" target="_blank">
          Varas e Foros v2
        </a>
      </>
  }
]
export default function Home() {

  return (
    <>
      <Row>
        <Col span={4}>
          <Image
            src={'/logo.png'}
            width={250}
            height={120}
            alt='Looplex'
          />

        </Col>
        <Col span={18} style={{ marginTop: 30 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            Bem vindo à página de documentações das APIs da Looplex
          </Text>
        </Col>

        <Col span={18} offset={4}>
          <Tabs
            tabBarExtraContent={() => {
              return (
                <Text>extra</Text>
              )
            }}
            tabPosition="left"
            items={apis}
          />
        </Col>

      </Row>

    </>
  )
}
