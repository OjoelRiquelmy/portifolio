
import Paragrafo from "../../components/Paragrafo"
import Title from "../../components/Title"
import { ImagensContainer } from "./styles"


const Sobre = () => (
    <section>
        <Title fontSize={16}>Sobre Mim</Title>
        <Paragrafo tipo="secundario">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quasi dicta quidem, architecto iure consectetur illo earum sed sit 
        voluptas ut? Aliquid cupiditate amet voluptates aspernatur molestiae 
        laborum non molestias maiores!</Paragrafo>
        <ImagensContainer>
            <img src="https://github-readme-stats.vercel.app/api?username=joelriquelmy&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=joelriquelmy&layout=compact&langs_count=7&theme=dracula"/>
        </ImagensContainer>
    </section>
)

export default Sobre