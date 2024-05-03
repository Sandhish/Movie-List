import { MovieCard } from './components/MovieCard'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <main p-3 m-2 >
        <div className="row border boder-black">
          <div className="col-4">
            <MovieCard title="Mankatha"  image="https://th.bing.com/th/id/R.08463672be37dcad70e01734ebbfd5ec?rik=NEnMmXjjZHFfmg&riu=http%3a%2f%2fwww.impawards.com%2fintl%2findia%2f2011%2fposters%2fmankatha.jpg&ehk=T57uLtFZd%2bRv5FVjHUmWEgwdhz9D1Lz1N5UK7FwzK84%3d&risl=&pid=ImgRaw&r=0" desc="ACP Vinayak Mahadevan of Maharashtra Police is suspended for having saved a smuggler named Faizal from encounter killing and helping him escape. Later, a police officer named Kamal Ekambaram commits suicide because of the leakage of his IPL gambling plans. ACP Prithviraj takes charge to end the betting scandals in IPL cricket in Mumbai. "/>
          </div>
          <div className="col-4">
            <MovieCard title="Premalu" image="https://th.bing.com/th/id/OIP.oqHZx_o01JG-cWrN92yhhgHaK0?w=115&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7" desc="On the last day of college in Salem, Sachin Santhosh finally confesses his love to his classmate, Anjali, who rejects him. After moving back to his hometown, Aluva, he plans to shift to the UK for higher studies, leaving all his troubles behind. His visa application is rejected due to insufficient funds, leaving him with one more chance to re-apply after six months."/>
          </div>
          <div className="col-4">
            <MovieCard title="Manjummel Boys" image="https://th.bing.com/th/id/OIP.y4crkbVnMpehI8_MIMoS4AAAAA?rs=1&pid=ImgDetMain" desc="A group of friends from an arts club in Kochi leave on a trip to Kodaikanal in the neighbouring state of Tamil Nadu, during the Onam vacation. They explore Kodaikanal and before leaving, one of the friends tells about Guna Caves, a place where the film Gunaa was shot. Inebriated, high and happy, the friends reach Guna Caves" />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
