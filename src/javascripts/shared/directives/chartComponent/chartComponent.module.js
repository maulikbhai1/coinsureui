import { chartComponent, ChartComponent } from './chartComponent.component';
import { ChartComponentCtrl } from './chartComponent.controller';

angular.module('coopex.components')
  .controller('ChartComponentCtrl', ChartComponentCtrl)
  .component(ChartComponent, chartComponent);
