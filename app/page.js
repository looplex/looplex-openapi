'use client'

import { Row, Col, List, Typography } from "antd"
import Image from 'next/image'

const { Text } = Typography

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

        <Col span={20}>

          <List
            bordered
            style={{ width: '75%', marginTop: 30 }}
            header={
              <b style={{ fontSize: 18 }}>
                Bem vindo à página de documentações das APIs da Looplex
              </b>
            }
            dataSource={[
              'Actions v1|/v1/actions',
              'Assembler v1|/v1/assembler',
              'Cases v1|/v1/cases',
              'Looplex 365 v1|/v1/looplex365',
              'Varas e Foros v2|/v2/varas_foros'
            ]}
            renderItem={(item) => {
              let arrItem = item.split('|')

              return (
                <List.Item>
                  <a href={arrItem[1]} target="_blank">
                    <Text>{arrItem[0]}</Text>
                  </a>
                </List.Item>
              )
            }}
            footer={
              <b style={{ fontSize: 18 }}>
                Looplex - 2024
              </b>
            }
          />

        </Col>

      </Row>

    </>
  )
}
