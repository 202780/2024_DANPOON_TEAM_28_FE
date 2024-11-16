import logo from '@/assets/logo.svg';
import logo_lively_sm from '@/assets/logo_lively_sm.svg';
import logo_lively_lg from '@/assets/logo_lively_lg.svg';

type LogoProps = {
    size?: 'small' | 'large';
    showName?: boolean;
};

const Logo = ({ size = 'small', showName = true }: LogoProps) => {
    const logoSrc = showName
        ? size === 'small'
            ? logo_lively_sm
            : logo_lively_lg
        : logo;

    return <img src={logoSrc} alt='Logo' />;
};

export default Logo;