import BackGround from '../utils/BackGround'
import Title from '../utils/Title'
import SubTitle from '../utils/SubTitle'
import SubmitButton from '../utils/SubmitButton'
import NoShapeButton from '../utils/NoShapeButton'
import FooterFirstPage from '../utils/FooterFirstPage'
import { imageHome } from '../../assets/images'


const Home = () => {
    return (
        <BackGround bottom={'50%'}>
            <Title>Bem vindo ao GratiBox</Title>
            <SubTitle>
                Receba em casa um box com chás, produtos organicos, incensos e muito mais...
            </SubTitle>
            <img src={imageHome} width={'100%'} alt=''/>
            <SubmitButton>Quero começar</SubmitButton>
            <NoShapeButton>Já sou grato</NoShapeButton>
            <FooterFirstPage />
        </BackGround>
    )
}

export default Home