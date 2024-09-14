import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Ui/Button'
import './Hero.css'

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <section className="Hero  md:w-[80%]">
    <div className="bg-white text-foreground flex gap-6 items-center py-4 px-6">
      {/* Unique text on the left */}
      <div className=" text-">
        <h1 className="text-3xl md:text-5xl text-center my-5 font-bold">
          Sound Conpanion
        </h1>
        <p className="text-center text-2xl ">
          Harmonize Your World: Generate Music That Moves You. Transform your
          musical ideas into reality.
        </p>
        <div className="Call-toAction my-8 flex justify-center gap-3">
          <Button className="bg-purple-600">
            <Link className="font-bold text-white" to={'/generate-music'}>
              Start Now
            </Link>
          </Button>
          <Button className="bg-pink-600 text-white font-bold">
            <Link to={'/community'}>Join community</Link>
          </Button>
        </div>
      </div>
      <div className=" w-1/2">
        {/* <img
          src="assert/images/bgimage.jpg" // Adjust path if needed
          alt="Header Image"
          className="w-full h-full "
        /> */}
        <img className="w-[30rem]" src="assert/images/cmp.png" alt="" />
      </div>
    </div>
  </section>
)

export default Hero
