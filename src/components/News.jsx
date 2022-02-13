import React from 'react';
import { Select,  Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApis';
const {  Text, Title }  = Typography;
const { Option } = Select;
const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';
const News = ({simplified}) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ?  6 : 50 })
  if(!cryptoNews?.value) return 'Loading......';
  return (
    <Row gutter={[24,24]}>
        {cryptoNews.value.map((news,i) => (
          <Col xs={24} sm={12} lg={8}  key={i} >
            <Card hoverable className='news-card' >
              <a href={news.url} target="_blank" rel='noreferrer'>
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>
                    {news.name}
                  </Title>
                  <img style={{ maxWidth: '200px' , maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImage } />
                </div>
                <p>
                  {news.description > 100 ? `${news.description.substring(0,100)}...` : news.description}
                </p>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
  )
};

export default News;