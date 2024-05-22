import { Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Row>

          <Col lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <p> © 2023 Calling Card</p>
          </Col>
        </Row>
      </footer>
    </>
  )
}

export default Footer
