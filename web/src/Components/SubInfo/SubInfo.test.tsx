import renderer from 'react-test-renderer';
// @ts-ignore
import { WiThermometer, WiThermometerExterior } from 'weather-icons-react';
import SubInfo from './index';


test('Sub Info component', () => {
    const empty = renderer.create(
      <SubInfo bottomIcon={<WiThermometerExterior size={28} className="mr-2"/>}
               bottomValue="0"
               bottomCaption="°C"
               topIcon={<WiThermometer size={28} className="mr-2"/>}
               topValue="0"
               topCaption="°C"
               caption="Temperature"/>);

    expect(empty.toJSON()).toMatchSnapshot();
});