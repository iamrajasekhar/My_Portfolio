import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ultimate CI/CD E2E Pipeline using various DevOps Tools"
              description="I successfully implemented a robust CI/CD pipeline using Jenkins, Maven, and SonarQube for continuous integration and code quality analysis. The pipeline is defined through a Jenkinsfile and utilizes custom Shell Scripts for efficient image updates. Seamless deployment and orchestration are achieved using ArgoCD and Kubernetes, ensuring automated and consistent delivery of applications. This project exemplifies my expertise in building end-to-end DevOps solutions for efficient and reliable software development workflows."
              ghLink="https://github.com/iamrajasekhar/Jenkins_CI-CD/tree/main/java-maven-sonar-argocd-helm-k8s"
              demoLink="https://github.com/iamrajasekhar/Jenkins_CI-CD/tree/main/java-maven-sonar-argocd-helm-k8s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Deploying 2048 game on a Managed EKS Cluster using Fargate service"
              description="I successfully deployed a 2048 application on Amazon EKS Cluster utilizing AWS Fargate for serverless container orchestration. This project included purchasing a domain and configuring it to redirect to the application, ensuring a seamless user experience. SSL certificates were integrated into the load balancer, enhancing security for the deployed application. This comprehensive solution demonstrates my proficiency in deploying scalable, secure, and user-friendly applications on cloud infrastructure."
              ghLink="https://github.com/iamrajasekhar/EKS_2048_Deployment_resources.git"
              demoLink="https://drive.google.com/file/d/1AAWmsTIj1fKP-iM4rJiD3GjJLkfkXc9z/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Kubernetes setup on AWS using KOps"
              description="I orchestrated the seamless setup of a Kubernetes cluster on AWS using Kops, optimizing the cluster creation process for AWS infrastructure. Leveraging this Kubernetes cluster on AWS, I deployed and thoroughly tested applications, validating the cluster's scalability and reliability on the AWS cloud platform. This project underscores my proficiency in AWS-specific Kubernetes infrastructure management, showcasing the ability to create and maintain a robust environment for deploying and testing applications in the AWS ecosystem."
              ghLink="https://github.com/iamrajasekhar/Kubernetes.git"
              demoLink="https://www.linkedin.com/posts/rajasekhar-betha_day19-activity-7146392237625520129-SDmz?utm_source=share&utm_medium=member_desktop"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="K8s Cluster Monitoring setup using Grafana and Prometheus"
              description="I successfully implemented a Kubernetes monitoring solution on my local Minikube cluster, leveraging Grafana and Prometheus. This project involved setting up robust monitoring capabilities to track the performance and health of the deployed applications. Grafana dashboards were configured to provide real-time insights into the cluster's metrics, ensuring proactive monitoring and efficient troubleshooting. This project highlights my proficiency in implementing effective monitoring solutions for Kubernetes environments, even in local development setups."
              ghLink="https://github.com/iamrajasekhar/Prometheus-Grapahans.git"
              demoLink="https://www.linkedin.com/posts/rajasekhar-betha_day18-activity-7146014884772610049-RBU1?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Deployments of Microservices on Kubernetes Cluster"
              description="In a dynamic Docker-Java-Kubernetes initiative, I orchestrated the deployment of three Java applications—Shopfront, Product Catalogue, and Stock Manager—seamlessly integrating Docker for efficient containerization and Kubernetes for scalable orchestration. The project spanned from local Minikube testing to cloud deployment on Amazon EKS, involving meticulous infrastructure setup, IAM role configuration, and EKS cluster creation. The deployment process, managed through YAML files, ensured a smooth flow from Shopfront to Product Catalogue and Stock Manager. Docker played a pivotal role, containerizing Java applications and pushing images to Docker Hub. The hands-on experience showcased my proficiency in end-to-end solution orchestration and efficient DevOps practices in cloud-native environments."
              ghLink="https://github.com/iamrajasekhar/Kubernetes_Java_Deployment.git"
              demoLink="https://www.linkedin.com/posts/rajasekhar-betha_kubernetes-eks-prometheus-activity-7139592899742105600-Imx0?utm_source=share&utm_medium=member_desktop" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Developed CI pipelines using Jenkins Shared Library"
              description="Successfully executed a Jenkins Shared Library project, demonstrating expertise in streamlined and reusable CI/CD workflows. Leveraged the shared library to automate and enhance Jenkins pipelines for efficient software delivery. Additionally, orchestrated the seamless deployment of a web application, showcasing proficiency in end-to-end DevOps practices and deployment strategies."
              ghLink="https://github.com/iamrajasekhar/Jenkins-shared-library.git"
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7133767900921827328?utm_source=share&utm_medium=member_desktop" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
