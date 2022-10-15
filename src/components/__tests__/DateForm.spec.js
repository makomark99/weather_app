
import {createPinia } from 'pinia';

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import DateForm from '../DateForm.vue';

describe('Hibás dátum teszt', ()=>{
  it('Kezdő datum hiba', async ()=>{
    const wrapper = await mount(DateForm,{
      global: {
        plugins: [createPinia()]
      }
    });

    await wrapper.find('#startDate').setValue('');
    await wrapper.find('#startDate').setValue('');
    await wrapper.find('.btn').trigger('click');

    expect(wrapper.find('.alert').text()).toBe('Hibás dátumok!');
  });
});