export interface SongDataType {
  title: string;
  artist: string;
  session: {
    vocal: string;
    guitar1: string;
    guitar2: string;
    bass: string;
    keyboard1: string;
    keyboard2?: string;
    drum: string;
  };
}
interface SetListType {
  [key: number]: SongDataType;
}
export const setList : SetListType = {
  0 : {
    'title' : '오늘이야',
    'artist' : '유다빈 밴드',
    'session' : {
      'vocal' : '은지원',
      'guitar1' : '김경환',
      'guitar2' : '박준용',
      'bass' : '정동운',
      'keyboard1' : '이승진',
      'drum' : '김민주',
    }
  },
  1 : {
    'title' : 'quasimodo',
    'artist' : '브로큰발렌타인',
    'session' : {
      'vocal' : '최석영',
      'guitar1' : '김경환',
      'guitar2' : '박준용',
      'bass' : '이유진',
      'keyboard1' : '서동희',
      'drum' : '김민주',
    }
  }
}