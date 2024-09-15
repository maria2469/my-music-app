import { FC } from 'react'
import { AudioPlayer } from 'react-audio-play'
import './MusicPlayer.css'

interface MusicPlayerProps {
  musicUrl: string
  background: string
}

const MusicPlayer: FC<MusicPlayerProps> = ({ musicUrl, background }) => {
  return (
    <div className="MusicPlayer w-full">
      <div
        className=" flex items-end justify-center min-h-[20rem] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <AudioPlayer className="custom-style w-[100%] " src={musicUrl} />
      </div>
    </div>
  )
}

export default MusicPlayer
