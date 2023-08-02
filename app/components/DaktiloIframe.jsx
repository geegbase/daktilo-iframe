import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { UserInfoIcons } from './BioCard';
import { createStyles, getStylesRef, Text } from '@mantine/core';

const slideData = [
    {
        title: 'Fahrettin Altun',
        href: 'https://bigadichalkinsesi.com/haber/15876326/turkiye-cumhuriyeti-iletisim-baskani-prof-dr-fahrettin-altun',
        avatar: '/img/1-fahrettin-altun.png',
        alt: 'Fahrettin Altun kimdir?',
    },
    {
        title: 'Hasan Şıldak',
        href: 'https://bigadichalkinsesi.com/haber/15876204/balikesir-valisi-hasan-sildak',
        avatar: '/img/2-hasan-sildak.png',
        alt: 'Hasan Şıldak kimdir?',
    },
    {
        title: 'Ali Taylan Öztaylan',
        href: 'https://bigadichalkinsesi.com/haber/15875167/ak-parti-balikesir-milletvekili-ali-taylan-oztaylan',
        avatar: '/img/3-ali-taylan-oztaylan.png',
        alt: 'Ali Taylan Öztaylan kimdir?',
    },
    {
        title: 'Mustafa Canbey',
        href: 'https://bigadichalkinsesi.com/haber/15875978/ak-parti-balikesir-milletvekili-mustafa-canbey',
        avatar: '/img/4-mustafa-canbey.png',
        alt: 'Mustafa Canbey kimdir?',
    },
    {
        title: 'İsmail Ok',
        href: 'https://bigadichalkinsesi.com/haber/15875738/ak-parti-balikesir-milletvekili-ismail-ok',
        avatar: '/img/5-ismail-ok.png',
        alt: 'İsmail Ok kimdir?',
    },
    {
        title: 'Belgin Uygur',
        href: 'https://bigadichalkinsesi.com/haber/15875447/ak-parti-balikesir-milletvekili-belgin-uygur',
        avatar: '/img/6-belgin-uygur.png',
        alt: 'Belgin Uygur kimdir?',
    },
    {
        title: 'Cavit Erkılınç',
        href: 'https://bigadichalkinsesi.com/haber/15874956/basin-ilan-kurumu-genel-muduru-cavit-erkilinc',
        avatar: '/img/7-cavit-erkilinc.png',
        alt: 'Cavit Erkılınç kimdir?',
    },
    {
        title: 'Yücel Yılmaz',
        href: 'https://bigadichalkinsesi.com/haber/15874759/balikesir-buyuksehir-belediye-baskani-yucel-yilmaz',
        avatar: '/img/8-yucel-yilmaz.png',
        alt: 'Yücel Yılmaz kimdir?',
    },
    {
        title: 'Yücel Oğurlu',
        href: 'https://bigadichalkinsesi.com/haber/15874526/balikesir-universitesi-rektoru-yucel-ogurlu',
        avatar: '/img/9-yucel-ogurlu.png',
        alt: 'Yücel Oğurlu kimdir?',
    },
    {
        title: 'Hasan Avcı',
        href: 'https://bigadichalkinsesi.com/haber/15874230/altieylul-belediye-baskani-hasan-avci',
        avatar: '/img/10-hasan-avci.png',
        alt: 'Hasan Avcı kimdir?',
    },
    {
        title: 'Dinçer Orjan',
        href: 'https://bigadichalkinsesi.com/haber/15874123/karesi-belediye-baskani-dincer-orkan',
        avatar: '/img/11-dincer-orjan.png',
        alt: 'Dinçer Orjan kimdir?',
    },
    {
        title: 'Rahmi Kula',
        href: 'https://bigadichalkinsesi.com/haber/15873833/balikesir-ticaret-odasi-baskani-rahmi-kula',
        avatar: '/img/12-rahmi-kula.png',
        alt: 'Rahmi Kula kimdir?',
    },
    {
        title: 'Nazmi Yarış',
        href: 'https://bigadichalkinsesi.com/haber/15873612/balikesir-sanayi-odasi-baskani-nazmi-yaris',
        avatar: '/img/13-nazmi-yaris.png',
        alt: 'Nazmi Yarış kimdir?',
    },
    {
        title: 'Mehmet Çetin',
        href: 'https://bigadichalkinsesi.com/haber/15873138/balikesir-ticaret-borsasi-baskani-mehmet-cetin',
        avatar: '/img/14-mehmet-cetin.png',
        alt: 'Mehmet Çetin kimdir?',
    },
];

const useStyles = createStyles(() => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}))

function Demo() {
    const { classes } = useStyles();
    const autoplay = useRef(Autoplay({ delay: 2000, }));
    return (
        <>
            <Text>Biyografi</Text>
            <Carousel
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                plugins={[autoplay.current]}
                withIndicators
                height={200}
                slideSize="25%"
                slideGap="md"
                loop
                align="start"
                breakpoints={[
                    { maxWidth: 'md', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '50%', slideGap: 0 },
                ]}
            >

                {slideData.map((slide, index) => {
                    const { title, avatar, alt, href } = slide;
                    return (
                        <Carousel.Slide className={classes.container} key={index}><UserInfoIcons title={title} avatar={avatar} href={href} alt={alt} /></Carousel.Slide>
                    );
                })}
            </Carousel>
        </>

    );
}
export default Demo;