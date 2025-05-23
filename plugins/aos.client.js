// plugins/aos.client.js
import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({ app }) => {
  app.AOS = AOS.init({
    duration: 1000,
    once: true,
  });
};
