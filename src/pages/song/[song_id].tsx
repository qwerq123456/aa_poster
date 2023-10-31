import React, { useEffect } from 'react';
import { setList } from '@/constants';
import { useRouter } from 'next/router'

const SongDetailPage = () => {
  const router = useRouter()
  const { song_id } = router.query;
  useEffect(() => {
    if(router.isReady){
      if(typeof(song_id) !== 'string' || !setList[parseInt(song_id)]) {
        router.push('/home');
      }
    }
  }, [router, song_id]);

  const data = setList[typeof(song_id) === 'string' ? parseInt(song_id) : 0];
  
  return (
    <div>
      <div>{JSON.stringify(data ,null , 4)}</div>
    </div>
  )
}

export default SongDetailPage;