
import Paragrafo from "../../components/Paragrafo"
import Title from "../../components/Title"
import { ImagensContainer } from "./styles"


const Sobre = () => (
    <section>
        <Title fontSize={16}>Sobre Mim</Title>
        <Paragrafo tipo="principal">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quasi dicta quidem, architecto iure consectetur illo earum sed sit 
        voluptas ut? Aliquid cupiditate amet voluptates aspernatur molestiae 
        laborum non molestias maiores!</Paragrafo>
        <ImagensContainer>
            <img 
                src="https://github-readme-stats.vercel.app/api?username=riquelmyjoel&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
                alt="GitHub statistics card for riquelmyJoel displaying total commits, contributions, repositories, and followers with dark theme icons on dark background"
            />
            <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=riquelmyjoel&layout=compact&langs_count=7&theme=dracula"
                alt="Programming languages breakdown for riquelmyJoel showing top 7 most used languages with percentage distribution in compact layout with dark theme"
            />
        </ImagensContainer>
    </section>
)

export default Sobre