import React from 'react';
import { setList } from '@/constants';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter()

  const onClickSongButton = (id : number) => {
    router.push(`/song/${id}`);
  }
  return (
    <div>
      <h1>AA 10/31 Poster</h1>
      {setList.map((song, index) => {
        return <button key = {song.title} onClick={() => onClickSongButton(index)}>{song.title}</button>
      })}
    </div>
  )
}

export default Home;