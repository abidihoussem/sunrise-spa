import { useI18n } from 'vue-i18n';
import Banner from 'presentation/Banner/Banner.vue';
import BaseMoney from 'presentation/components/BaseMoney/BaseMoney.vue';
import { useRouter } from 'vue-router';
import { createClient} from 'contentful';
import { ref } from 'vue';

export default {
  name: 'Home',
  components: { Banner, BaseMoney },

  setup() {
    const router = useRouter();
    const bannerImage = ref(null);
    const bannerTitle = ref(null);
    const banner1Image = ref(null);
    const banner1Title = ref(null);
    const banner2Image = ref(null);
    const banner2Title = ref(null);
    const banner3Image = ref(null);
    const banner3Title = ref(null);
    if (window.innerWidth < 990) {
      router.replace({
        name: 'products',
        params: { categorySlug: 'all' },
      });
    }
    const { t } = useI18n();

    const client = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "w4bajye04bqd",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "suMLJ1e_hQNtnMXvVDKsV9D29H1XVV86X6wsxk7eN3Y"
    });
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    (async () => {
        const data = await client
        .getEntry("5NOBsnBtnAg4Jz7bBpVHnB");
        console.log(data);
        bannerImage.value = data.fields.image.fields.file.url;
        bannerTitle.value = data.fields.title;
      })();
      (async () => {
        const data = await client
        .getEntry("4cdfcKI6Mx3w0Q9W4OUWDn");
        console.log(data);
        banner1Image.value = data.fields.image.fields.file.url;
        banner1Title.value = data.fields.title;
      })();
      (async () => {
        const data = await client
        .getEntry("6I4EWEsa82xINDSO9Amfpe");
        console.log(data);
        banner2Image.value = data.fields.image.fields.file.url;
        banner2Title.value = data.fields.title;
      })();
      (async () => {
        const data = await client
        .getEntry("7JRGO5mSxo2a9dcmRuCgg6");
        console.log(data);
        banner3Image.value = data.fields.image.fields.file.url;
        banner3Title.value = data.fields.title;
      })();
      
    return {
      t,
      bannerImage,
      bannerTitle,
      banner1Image,
      banner1Title,
      banner2Image,
      banner2Title,
      banner3Image,
      banner3Title
    };
  },
};
