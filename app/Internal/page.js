'use client'

import { Row, Col, Typography, Tabs, Divider, Tag } from "antd"
import Image from 'next/image'

const { Text } = Typography

const apis = [
    {
        key: 'panilha_padrao',
        label: 'Planilha Padrão',
        children:
            <>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Endpoints de planilha padrão
                </Text>
                <Divider />
                <a href="/planilha_padrao" target="_blank">
                    Planilha padrão
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
                        Bem vindo à página de documentações das API's internas da Looplex
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
