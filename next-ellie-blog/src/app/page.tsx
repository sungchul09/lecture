import Header from '@components/Header'
import Navigation from '@components/Navigation'
import Section from '@components/Section'

export default function Home() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <nav>
        <Navigation />
      </nav>
      <section>
        <Section />
      </section>
    </div>
  )
}
