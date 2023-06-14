import './header-banner.scss';
import Swiper, {Autoplay} from 'swiper';

new Swiper('.header-banner', {
    modules: [Autoplay],
    speed: 1000,
    loop: true,
    autoplay: {
        delay:5000,
    },
   
});
