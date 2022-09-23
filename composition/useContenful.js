import { ref } from 'vue';
import { ContentfulClientApi} from 'contentful';

function useDiscountCode() {
  const form = ref({});
  const rules = {
    code: { required },
  };

  const v = useVuelidate(rules, form);
  return { form, v };
}
export default useDiscountCode;
