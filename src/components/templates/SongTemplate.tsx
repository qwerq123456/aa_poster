import { SongDataType } from "@/constants";

interface SongTemplateProps {
  data: SongDataType;
};

export const SongTemplate = (props: SongTemplateProps ) => {
  const { data } = props;
  return (
    <div>
      <div>{JSON.stringify(data ,null , 4)}</div>
    </div>
  )
}
