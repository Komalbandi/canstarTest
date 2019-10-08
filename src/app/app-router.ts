/**
 * Created by komal on 7/10/2019.
 */
import {Routes} from '@angular/router';

import {TableComponent} from './pages/table/table.component';
import {WidgetsComponent} from './pages/widgets/widgets.component';
import {CssElementsComponent} from './pages/css-elements/css-elements.component';
import {DataPopulationComponent} from './pages/data-population/data-population.component';

export const appRoutes: Routes = [
    {path: '', component: TableComponent},
    {path: 'widgets', component: WidgetsComponent},
    {path: 'dataPopulation', component: DataPopulationComponent},
    {path: 'cssElements', component: CssElementsComponent}
];
