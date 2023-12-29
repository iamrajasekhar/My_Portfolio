import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
<Col xs={4} md={2} className="tech-icons">
        <img
          src= "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/2560px-Red_Hat_logo.svg.png"  // Replace with the correct path
          alt="RHEL Logo"
          style={{ width: '100%', height: '130px' }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src= "https://seeklogo.com/images/C/CentOS-logo-61929B91AB-seeklogo.com.png"  // Replace with the correct path
          alt="centos Logo"
          style={{ width: '80%', height: 'auto' }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src= "https://www.pngmart.com/files/22/Ubuntu-Logo-PNG-Isolated-Image.png"  // Replace with the correct path
          alt="ubuntu Logo"
          style={{ width: '80%', height: 'auto' }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src= "https://pngimg.com/d/linux_PNG1.png"  // Replace with the correct path
          alt="Jenkins Logo"
          style={{ width: '60%', height: '140px' }}
        />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img
          src= "https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2023/03/21/Amazon_Linux_Logo_v08_Amazon-Linux-right%E2%80%94full-color-1260x616.png"  // Replace with the correct path
          alt="Docker Logo"
          style={{ width: '100%', height: 'auto' }}
        />
      </Col>
 
      </Row>
  );
}

export default Toolstack;
