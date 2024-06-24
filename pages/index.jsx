import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import Certifications from '../components/HomeComponents/Certifications/Certifications';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MyExpertise />
            <Certifications />
            <ClientReviews />
            <Footer />

        </div>
    )
}

export default home