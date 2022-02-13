import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    // const coinPrice = [];
    // const coinTimeStamp = [];

    // for(let i=0; i < coinHistory?.data?.history?.length; i += 1)
    // {
    //     coinPrice.push(coinHistory?.data?.history[i].price);
    //     coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    // }

    // const data =  {
    //     labels: coinTimeStamp,
    //     datasets:[
    //         {
    //             label: 'price in usd',
    //             data: coinPrice,
    //             fill:  false,
    //             backgroundColor: '#0071bd',
    //             borderColor: '#0071bd'
    //         }
    //     ]
    // }

    // const options = {
    //     scales: {
    //         yAxes: [
    //             {
    //                 ticks: {
    //                     beginAtZero: true,
    //                 }
    //             }
    //         ]
    //     }
    // }

  return (
    <>
        <Row className='chart-header'>
            <Title level={2} className='chart-title'>
                {coinName} Price chart
            </Title>
            <Col className='price-container'>
                <Title level={5} className="price-change">
                    {coinHistory}%
                </Title>
                <Title level={5} className="current-price">
                    Current {coinName} price:${currentPrice}
                </Title>
            </Col>
        </Row>    
        {/* <Line date={data} options={options} /> */}
    </>
  )
}

export default LineChart