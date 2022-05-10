// webpack is used to bundle the code into a single file
import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt='Ilustração simbolizand perguntas e respostas' />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt='Letmeask' />
                    <button>
                        <img src={googleIconImg} alt='Logo do Google' />
                        Crie sua sala com o Google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input type='text' placeholder='Digite o código da sua sala' />
                        <button type='submit'>Entrar na sala</button>
                    </form>
                </div>
            </main>
        </div>
    );
}