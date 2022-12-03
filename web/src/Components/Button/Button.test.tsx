import renderer from 'react-test-renderer';
import Button from './index';

test('Button', () => {
    const button = renderer.create(
      <Button title="This is a test title" onClick={() => "This is a test function"}>
          This is a test children
      </Button>
    );

    expect(button.toJSON()).toMatchSnapshot();
});