const certifications = [
    {
      id: 0,
      title: 'Certified AWS',
      image: 'images/aws cert.jpg',
      description: 'A certification that demonstrates proficiency in AWS cloud computing and advanced concepts.'
    },
    {
      id: 1,
      title: 'Certified Golang Developer',
      image: 'images/golang.jpg',
      description: 'A certification that demonstrates proficiency in Golang programming and advanced concepts.'
    },
    {
      id: 2,
      title: 'Certified React Developer',
      image: 'images/react.jpg',
      description: 'A certification for developers with expertise in building applications using React.js.'
    },
    {
      id: 3,
      title: 'Certified Docker',
      image: 'images/docker cert.jpg',
      description: 'A certification validating skills in docker development.'
    },
    {
      id: 4,
      title: 'Certified Data Virtualization',
      image: 'images/data.png',
      description: 'A certification that demonstrates proficiency in data virtualization and advanced concepts.'
    }
  ];
  
  export default function handler(req, res) {
    res.status(200).json(certifications);
  }
  