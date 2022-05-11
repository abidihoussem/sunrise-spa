import BasePrice from 'presentation/components/BasePrice/BasePrice.vue';
import { computed, shallowRef, watch } from 'vue';
import LineItemQuantityForm from 'presentation/components/LineItemQuantityForm/LineItemQuantityForm.vue';
import DiscountTag from 'presentation/components/DiscountTag/DiscountTag.vue';

import Remove from 'presentation/components/LineItemQuantityForm/Remove/Remove.vue';
import useCartTools from 'hooks/useCartTools';
export default {
  components: {
    LineItemQuantityForm,
    Remove,
    BasePrice,
    DiscountTag,
  },
  props: {
    lineItem: {
      type: Object,
      required: true,
    },
    extended: {
      type: Boolean,
      default: () => true,
    },
    editable: {
      type: Boolean,
      default: () => true,
    },
    selectable: {
      type: Boolean,
      default: () => false,
    },
    returnedItem: {
      type: Boolean,
      default: () => false,
    },
    discount: {
      type: Object,
      required: false,
    },
  },
  setup(props, { emit }) {
    const selected = shallowRef(false);
    const item = computed(() =>
      props.selectable
        ? {
            lineItemId: props.lineItem.lineId,
            quantity: props.lineItem.quantity,
          }
        : null
    );
    watch(selected, (selected) => {
      if (selected === true) {
        emit('select-return-item', item.value);
      }
      if (selected === false) {
        emit('unselect-return-item', item.value);
      }
    });
    return {
      selected,
      item,
      ...useCartTools(),
    };
  },
};
