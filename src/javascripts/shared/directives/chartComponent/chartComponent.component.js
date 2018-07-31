import chartComponentTmpl from './chartComponent.template.html';
import { ChartComponentCtrl } from './chartComponent.controller';

export const ChartComponent = 'chartComponent';

export const chartComponent = {
  template	: chartComponentTmpl,
  bindings 	: {

  },
  controller: "ChartComponentCtrl as vm"
};
