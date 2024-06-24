const certifications = [
    {
      id: 0,
      title: 'Certified Golang Developer',
      image: 'images/golang.jpg',
      description: 'A certification that demonstrates proficiency in Golang programming and advanced concepts.'
    },
    {
      id: 1,
      title: 'Certified React Developer',
      image: 'images/react.jpg',
      description: 'A certification for developers with expertise in building applications using React.js.'
    },
    {
      id: 2,
      title: 'Certified Docker',
      image: 'images/docker cert.jpg',
      description: 'A certification validating skills in docker development.'
    },
    {
      id: 3,
      title: 'Certified UI/UX Designer',
      image: 'images/data.png',
      description: 'A certification for proficiency in designing user interfaces and user experiences.'
    }
  ];
  
  export default function handler(req, res) {
    res.status(200).json(certifications);
  }
  