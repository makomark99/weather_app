

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import AppHeader from '../AppHeader.vue';

describe('AppHeader props tesztelés', ()=>{
  it('city pros tesztelése', ()=>{
    const wrapper = mount(AppHeader, {props: {city:'valami'}});
    expect(wrapper.vm.city).toMatch('valami');
  });
});


describe('AppHeader props tesztelés 2', ()=>{
  it('főcím teszt', ()=>{
    const wrapper = mount(AppHeader, {props: {city:'valami'}});
    console.log(wrapper.text());
    expect(wrapper.text()).toContain('Időjárás jelentés')
  })
})