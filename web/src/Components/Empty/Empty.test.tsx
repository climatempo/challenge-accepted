import renderer from 'react-test-renderer';
import Empty from './index';


test('Empty component', () => {
    const empty = renderer.create(<Empty/>);

    expect(empty.toJSON()).toMatchSnapshot();
});