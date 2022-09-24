import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import { useI18n } from 'vue-i18n';
import { createClient} from 'contentful';
import { ref } from 'vue';

export default {
  setup() {
    const slides = ref([]);
    slides.value = [{
        title: 'Slide 1',
        content: {
          bgImage: 'banner1.jpg',
          h3Message: 'midSeasonSale',
          h1Message: 'up50',
          bttnText: 'shopNow',
        },
      },
      {
        title: 'Slide 2',
        content: {
          bgImage: 'banner2.jpg',
          h3Message: 'checkout',
          h1Message: 'newCollection',
          bttnText: 'shopNow',
        },
      },
    ];

    const client = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "w4bajye04bqd",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "suMLJ1e_hQNtnMXvVDKsV9D29H1XVV86X6wsxk7eN3Y"
    });
    (async () => {
      const slide1 = await client
      .getEntry("7YcfFcU4q1JhJzigNchyC");
      const slide2 = await client
      .getEntry("111a51m5DRz9XaXpCTHoe1");
      slides.value = [{
        title: 'Slide 1',
        content: {
          bgImage: slide1.fields.image.fields.file.url,
          h3Message: 'GET',
          h1Message: 'INSPIRED',
          bttnText: 'All Stories',
        },
      },
      {
        title: 'Slide 2',
        content: {
          bgImage: slide2.fields.image.fields.file.url,
          h3Message: 'Discover more with Canon',
          h1Message: 'Cameras',
          bttnText: 'Explore our product range',
        },
      },
    ];

    })();

    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });
    return {
      t,
      slides
    };
  },
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    autoPlaying: true,
    internalAutoPlaying: true,
  })
};
