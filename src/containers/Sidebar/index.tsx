
import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Title from "../../components/Title"

import { Description, Button, SidebarContainer } from "./styles"

const Sidebar = () => (
<aside>
    <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Joel Riquelmy</Title>
        <Paragrafo tipo="secundario" fontSize={16}>joelriquelmy</Paragrafo>
        <Description tipo="principal" fontSize={12}>Desenvolvedor Front-end</Description>
        <Button>Trocar tema</Button>
    </SidebarContainer>
        
    
</aside>
)

export default Sidebar  