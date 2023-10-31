import React, { useEffect } from 'react';
import { setList } from '@/constants';
import { useRouter } from 'next/router'

const SongDetailPage = () => {
  const router = useRouter()
  const { song_id } = router.query;
  
  const data = setList[typeof(song_id) === 'string' ? parseInt(song_id) : 0];
  
  useEffect(() => {
    if(router.isReady){
      if(typeof(song_id) !== 'string' || !setList[parseInt(song_id)]) {
        router.push('/home');
      }
    }
  }, [router, song_id]);

  const onClickHomeButton = () => {
    router.push('/home');
  }

  return (
    <div>
      <div>{JSON.stringify(data ,null , 4)}</div>
      <button onClick = {onClickHomeButton}>home</button>
    </div>
  )
}

export default SongDetailPage;