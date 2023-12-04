import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles.js'

export function Header() {
    return(
        <Container>

            <Profile>
                <img src="https://github.com/lucasricbarbosa.png" alt="Foto do usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Lucas Ricardo</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}