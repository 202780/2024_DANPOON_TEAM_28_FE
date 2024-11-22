import door_clover1 from '@/assets/mission/door_clover1.png';
import door_clover2 from '@/assets/mission/door_clover2.png';
import door_clover3 from '@/assets/mission/door_clover3.png';

interface IMissionImageProps {
    clearedCount: number;
}

const MissionImage = ({ clearedCount }: IMissionImageProps) => {
    const imgList = [door_clover1, door_clover2, door_clover3];

    return (
        <img
            src={imgList[clearedCount - 1]}
            alt='클로버 미션 이미지'
            style={{
                width: '100%',
                aspectRatio: '22.5 / 16.25',
            }}
        />
    );
};

export default MissionImage;